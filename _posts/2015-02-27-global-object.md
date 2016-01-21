---
layout: post
title: "获取全局对象 this || (0, eval)('this')"
description: ""
category: javascript
tags: [javascript]
---
{% include JB/setup %}

##获取全局对象 
	
	var window = this || (0, eval)('this')

全局变量的正确获取方式如上，那么为什么不能直接用 ```window``` 或者 ```this``` 呢？

在一些封装的js库中，我们经常可以见到上面的写法来获取全局对象，这样的写法很安全，可以保证无论如何方式
引用库文件，都可以把对象追加到全局全局对象下面。


```this```
表达中的指向的当前调用者，如果在浏览器中，它就是 ```window``` ，其他环境中就是别的全局对象，比如node的v8环境。所以不能直接用 ```window``` 来
表示全局变量。
```eval```
的间接调用可以保证当
```this```
无效的时候还可以取到全局对象。

```(0, eval)('this')``` 间接的调用了 ```eval``` 。首先解释怎么间接调用，这里用到我们不常用的逗号表达式 ```,```
它的用法可以MDN查下，简单的说一个特征就是逗号表达式是取最后面的一个值作为结果。如：

	(1,2,3,4,5,6,7,8)
	8

又如：

	function a(){}
	(1,a)
	function a(){}

又如：

	(0, eval)
	function eval() { [native code] }

所以```(0, eval)('this')```的结果是 ```eval('this')``` ，这个 ```this``` 指向的调用者。在浏览器中指向的window。

其次，为什么需要间接调用呢？```var window = this || eval('this')``` 这样写有什么问题？

看个例子

	function f () {
	    console.log(this, eval('this'), (0, eval)('this'));
	}

	var o = {};
	f.apply(o);
	Object {} Object {} Window {top: Window, window: Window, location: Location, external: Object, chrome: Object…} 

这个例子中可以看到，无论如何方式调用```(0, eval)('this')```，返回的都是全局对象，而 ```eval('this')``` 可能返回的调用者的对象。
至于为什么会有这样的区别，可以看下面解释。

 ```eval('this')``` 获取的对象  ```o``` 的 ```this``` 所以返回的是空对象；```(0, eval)('this')```表达式是先接受对象 ```o``` 的 ```this``` ，但是执行过程是逗号表达式返回了一个函数 ```eval()``` ，返回的函数再执行的时候，这是的```this```则不是指向 ```o``` ，
 而是指向了全局对象。所以可以这样延展 ```(0||eval)()``` ，也是可以起到相同的作用。

 参考资料:
 [return this || (0,eval)('this');](http://stackoverflow.com/questions/14119988/return-this-0-evalthis/14120023#14120023)


