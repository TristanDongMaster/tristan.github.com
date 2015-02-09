---
layout: post
title: "javascript prototype"
description: ""
category: 
tags: [javascript basic]
---
{% include JB/setup %}

##什么是原型 prototype
原型是构造器函数的属性。在函数被定义时，会创建一个prototype属性，它的起始值是一个空对象。

	function foo(a,b){
		return a+b;
	}

	foo.length
	>2

	foo.constructor
	>function Function() { [native code] }

	foo.prototype
	>foo {}

##利用原型添加方法和属性
我们现在有一个构造器函数如下：

	function Person(name){
		this.name = name;
		this.getName = function(){
			console.log('my name is ' + this.name) ;
		}
	}

我们可以用prototype来添加更多的属性和方法：

	Person.prototype.color = 'white';
	Person.prototype.say = function(words){
		console.log(words);
	}

如果不想逐一用prototype添加属性和方法，可以利用一个对象，然后覆盖到原来的原型上去。

	Person.prototype = {
		color : 'white',
		say : function(words){
			console.log('i say : '+words)
		}
	}

##使用原型中的属性和方法
我们利用 Person 构造器函数创建一个对象 jack ，就可以访问到原型中的方法了。

	var jack = new Person('jack');
	jack.getName();//自身方法
	>my name isjack 
	
	jack.name//自身属性
	"jack"

	jack.color//原型属性
	>"white"
	
	jack.say('hello')//原型方法
	>i say : hello 

##自身属性与原型属性

上面的demo中可以发现 jack 可以访问到自身属性和原型属性。
所谓自身属性是指在构造器中函数中定义的属性，原型属性则是在原型中定义的方法，如上例。
当我们访问某个属性的时候， JavaScript 会遍历对象的所有属性，如果找到就返回；如果找不到就去查询创建当前对象的构造器函数的原型，如果原型中找到，就立即返回，否则返回undefined，如：

	jack.color//原型方法
	>"white"


##利用自身属性重写原型属性

弄清楚了自身属性和原型属性的区别之后，我们会想到这样一个问题：如果对象自身属性和原型属性同名怎么办？
先说答案：对象自身属性的优先级高于原型属性。	

	function Person(name){
		this.name = name;
		this.getName = function(){
			console.log('my name is ' + this.name) ;
		}
	}

	Person.prototype = {
		color : 'white',
		say : function(words){
			console.log('i say : '+words)
		}
	}

	Person.prototype.name = 'fool';

	var jack = new Person('jack');

	jack.name
	>"jack"

	delete jack.name
	jack.name
	>"fool"

可以看到在原型中有name属性，自身属性也有name属性，对象会取对象的name属性，而不是原型中的。
有了这个特性之后，我们就可以利用构造器来重写原型中的属性了。

##isPrototypeOf()方法

每个对象中都有一个 isPrototypeOf() 方法，这个方法告诉我们当前对象是否是另一个对象的原型。

	function Person(name){
		this.name = name;
		this.getName = function(){
			console.log('my name is ' + this.name) ;
		}
	}

	var proto = {
		color : 'white',
		say : function(words){
			console.log('i say : '+words)
		}
	}

	Person.prototype = proto;

	var jack  =new Person('jack');
	proto.isPrototypeOf(jack)
	>true


## ____proto____ 链接
____proto____ ： 对象中存在一个指向相关原型的链接，这个链接在ff中被叫做 ____proto____ 。

看个例子：

	function Person(name){
		this.name = name;
		this.getName = function(){
			console.log('my name is ' + this.name) ;
		}
	}

	var proto = {
		color : 'white',
		say : function(words){
			console.log('i say : '+words)
		}
	}

	Person.prototype = proto;

	var jack  =new Person('jack');

	jack.color
	>'white'

Person 中没有color属性，JavaScript就到原型中去寻找color属性；那么这就意味着我们可以从对象jack中获取原型对象。具体做法是把
构造器作为一个中转站， 执行

	jack.constructor.prototype 

就可以调用。
我们现在把这个中转站重写了，

	jack.constructor = 'str'

	typeof jack.constructor.prototype
	>"undefined"

	jack.color //原型属性
	>"white"

可以发现原型和jack的关系已经被我们打乱了，但是 jack.color 还是可以访问到原型中的属性值，这说明对象中有个隐形链接指向原型，这个就是 ____proto____

需要说明的是，该属性在ie浏览器中是不存在的。

____proto____ 与 prototype并不是等价的。 ____proto____ 实际上是某个实体对象的属性 ，而 prototype则是属于构造器函数的属性。
____proto____只能在调试环境下使用。
