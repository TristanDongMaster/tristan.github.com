---
layout: post
title: "sass 控制指令用法说明"
description: "sass control directives "
category: css
tags: [css]
---
{% include JB/setup %}

##sass 的控制指令 ： @if,@for,@each 和 @while

sass控制指令是创建一个可重用、可分布的库的基础。当谈及Sass技术的时候，这也是首当其冲需要掌握的。

##这是一堂很有基情的Sass指令课程

Sass指令提供文件流和逻辑，用混合函数让你写出有层次的css代码。

这一课程中我们来学习一下 ： @if, @for, @each 和 @while.


## @if

在SassScript表达式中，当```@if``` 控制指令返回一个非```false```的值，结果就会执行到 ```@if``` 中的代码样式。

下面用一个例子说明：

sass 代码


	// Set a variable to run the if statement against
	$boolean: true !default

	=simple-mixin
	  @if $boolean
	    @debug "$boolean is #{$boolean}"
	    display: block
	  @else
	    @debug "$boolean is #{$boolean}"
	    display: none

	.some-selector
	  +simple-mixin

编译后的css代码

	.some-selector {
	  display: block;
	}


注意我在每一个流操作之后添加了```debug```指令。这不是重点，但是要告诉你在命令行中怎么获取变量的值。
你也可以试试 ```@warn```指令。对于复杂的混合和函数，这样可以提供一个的开发经验，更好的进行调试发现问题。

例如，如果你在命令行中运行下面的代码，你会看到下面的结果

	/Users/.../screen.sass:8 DEBUG: $boolean is true

##@for

```@for```控制指令有两种形式

第一种 ： ``` @for $var from <start> through <end>``` ，从``` <start>```开始，对每个迭代器进行循环，在循环过```<end>```后结束。
很直接吧。

第二种 ： ```@for $var from <start> to <end>``` ，从``` <start>```开始，对每个迭代器进行循环，在循环```<end>```前结束。

两个区别是```through```会循环到最后一个索引，而```to```会在到最后一个索引前终止循环。


##@each
```@each```指令的形式是```@each $var in <list>```；

sass代码

	$list: adam john wynn mason kuroir

	=author-images
	  @each $author in $list
	    .photo-#{$author}
	      background: image-url("avatars/#{$author}.png") no-repeat

	.author-bio
	  +author-images

css代码

	.author-bio .photo-adam {
	  background: url('/images/avatars/adam.png') no-repeat;
	}
	.author-bio .photo-john {
	  background: url('/images/avatars/john.png') no-repeat;
	}
	.author-bio .photo-wynn {
	  background: url('/images/avatars/wynn.png') no-repeat;
	}
	.author-bio .photo-mason {
	  background: url('/images/avatars/mason.png') no-repeat;
	}
	.author-bio .photo-kuroir {
	  background: url('/images/avatars/kuroir.png') no-repeat;
	}

##@while

sass代码

	$types: 4
	$type-width: 20px

	@while $types > 0
	  .while-#{$types}
	    width: $type-width + $types
	  $types: $types - 1

css代码

	.while-4 {
	  width: 24px;
	}

	.while-3 {
	  width: 23px;
	}

	.while-2 {
	  width: 22px;
	}

	.while-1 {
	  width: 21px;
	}



参考链接：


[http://thesassway.com/intermediate/if-for-each-while](http://thesassway.com/intermediate/if-for-each-while)