---
layout: post
title: "localStorage 介绍"
description: ""
category: blog
---

## 简介
localStorage 是html5的新特性，它提供了一个能在浏览器端做数据存储的对象。

## localStorage API

1 clear()
清空本地localStorage存储。

```javascript
	localStorage.clear()
```

2 getItem('key')
获取localStorage对象中key为参数的对象值。

```javascript
	localStorage.getItem('key')
```

3 setItem('key',value)
设置localStorage中键值为key对象的值为value

```javascript
	localStorage.setItem('key',value)
```

4 removeItem('key')
删除localStorage中键值为key的对象

```javascript
	localStorage.removeItem('key')
```

5 key(index)
获取索引值为index的key值

```javascript
	localStorage.key(0)
```
6 length
	localStorage的长度属性

```javascript
	localStorage.length
```

## 一段小程序介绍上面接口的用法

```javascript
	//清空
	localStorage.clear()

	//查看当前的 localStorage 对象
	localStorage
	Storage {length: 0}

	//新增一个'name'属性，它的值是'lucy'
	localStorage.setItem('name','lucy')

	//查看 'name'属性的值
	localStorage.getItem('name')
	"lucy"

	//这时候 localStorage 的长度是1
	localStorage.length
	1

	//localStorage 的第一个对象的key是 'name'
	localStorage.key(0)
	"name"

	//删除'name'属性
	localStorage.removeItem('name')

	//这时候localStorage的长度是 0
	localStorage
	Storage {length: 0}
```

## 兼容性
localStorage 对象是html5的新特性，老版本的浏览器是不兼容的。我们先来看看都有哪些兼容。


	桌面浏览器
	Feature		Chrome	Ff	IE	Opera	Safari (WebKit)
	localStorage	4	3.5	8	10.50	4
	sessionStorage	5	2	8	10.50	4

[更多请查看](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

但是，并不是说老版本的浏览器就没有机会尝试这种新家伙了，我们可以用cookie来做老版本浏览器的兼容。

这段代码是用cookie来模拟 localStorage 对象的特性

```javascript

	if (!window.localStorage) {
	  Object.defineProperty(window, "localStorage", new (function () {
	    var aKeys = [], oStorage = {};
	    Object.defineProperty(oStorage, "getItem", {
	      value: function (sKey) { return sKey ? this[sKey] : null; },
	      writable: false,
	      configurable: false,
	      enumerable: false
	    });
	    Object.defineProperty(oStorage, "key", {
	      value: function (nKeyId) { return aKeys[nKeyId]; },
	      writable: false,
	      configurable: false,
	      enumerable: false
	    });
	    Object.defineProperty(oStorage, "setItem", {
	      value: function (sKey, sValue) {
	        if(!sKey) { return; }
	        document.cookie = escape(sKey) + "=" + escape(sValue) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
	      },
	      writable: false,
	      configurable: false,
	      enumerable: false
	    });
	    Object.defineProperty(oStorage, "length", {
	      get: function () { return aKeys.length; },
	      configurable: false,
	      enumerable: false
	    });
	    Object.defineProperty(oStorage, "removeItem", {
	      value: function (sKey) {
	        if(!sKey) { return; }
	        document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
	      },
	      writable: false,
	      configurable: false,
	      enumerable: false
	    });
	    this.get = function () {
	      var iThisIndx;
	      for (var sKey in oStorage) {
	        iThisIndx = aKeys.indexOf(sKey);
	        if (iThisIndx === -1) { oStorage.setItem(sKey, oStorage[sKey]); }
	        else { aKeys.splice(iThisIndx, 1); }
	        delete oStorage[sKey];
	      }
	      for (aKeys; aKeys.length > 0; aKeys.splice(0, 1)) { oStorage.removeItem(aKeys[0]); }
	      for (var aCouple, iKey, nIdx = 0, aCouples = document.cookie.split(/\s*;\s*/); nIdx < aCouples.length; nIdx++) {
	        aCouple = aCouples[nIdx].split(/\s*=\s*/);
	        if (aCouple.length > 1) {
	          oStorage[iKey = unescape(aCouple[0])] = unescape(aCouple[1]);
	          aKeys.push(iKey);
	        }
	      }
	      return oStorage;
	    };
	    this.configurable = false;
	    this.enumerable = true;
	  })());
	}

```

我们用cookie来模拟localScorage对象，归根对象的本身还是cookie，那么就会有cookie自身的限制，同一个域下cookie的个数是有限制的，每个cookie对应的长度也是有限制的，一般小于4k。
所以如果用它来存储大数据时，需要考虑到这些限制，以免出现未知错误。

在对localScorage对象的属性进行增删改查的时候，我们要用 
```localStorage.getItem('key')``` ,```localStorage.getItem('key',value)``` .```localStorage.removeItem('key')``` ;而不是用 ```localStorage.key``` 的方式进行操作。因为这样的话可能不会以正确的方式。

还有另外一种方式来做 localStorage 对象的兼容性。下面这种方法可以向下兼容到更低版本的IE，比如IE<8的都可以兼容。同样，我们还是用cookie来模拟 localStorage 对象。

```javascript

	if (!window.localStorage) {
	  window.localStorage = {
	    getItem: function (sKey) {
	      if (!sKey || !this.hasOwnProperty(sKey)) { return null; }
	      return unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1"));
	    },
	    key: function (nKeyId) {
	      return unescape(document.cookie.replace(/\s*\=(?:.(?!;))*$/, "").split(/\s*\=(?:[^;](?!;))*[^;]?;\s*/)[nKeyId]);
	    },
	    setItem: function (sKey, sValue) {
	      if(!sKey) { return; }
	      document.cookie = escape(sKey) + "=" + escape(sValue) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
	      this.length = document.cookie.match(/\=/g).length;
	    },
	    length: 0,
	    removeItem: function (sKey) {
	      if (!sKey || !this.hasOwnProperty(sKey)) { return; }
	      document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
	      this.length--;
	    },
	    hasOwnProperty: function (sKey) {
	      return (new RegExp("(?:^|;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
	    }
	  };
	  window.localStorage.length = (document.cookie.match(/\=/g) || window.localStorage).length;
	}

```

注意到这两中兼容的写法不同之处在于第一种方式用了 Object.defineProperty() 这个方法。
而这个方法是在IE>=9才支持。[详细了解请猛戳](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty).。

对比这两种兼容方式，官方给的说法是第一种更贴近 localStorage 内部实现的机制，第二种只是在表现形式上进行模拟。
