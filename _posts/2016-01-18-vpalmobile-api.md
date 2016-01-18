---
layout: post
title: "vpalmobile api"
description: ""
category: 
tags: []
---
{% include JB/setup %}

## 概述

vpalmobileui 是以H5收银台为基础开发的一套微型H5前端UI组件库，目前包括的组件有：字体、标题、脚手架、banner、按钮、checkbox、文本输入框、列表、tab页、弹窗。组件在不断完善中……

## 兼容性

	Safari 6+ (Mac)
	Chrome 30+ (Windows, Mac, Android, iOS, Linux, Chrome OS)
	Firefox 24+ (Windows, Mac, Android, Linux, Firefox OS)
	iOS 5+ Safari
	Android 2.3+ Browser
	Internet Explorer 10+ (Windows, Windows Phone)
	UC手机浏览器
	QQ手机浏览器

## UI效果

地址：[http://wikieswan.github.io/vpalmobileui/](http://wikieswan.github.io/vpalmobileui/)

## API

### 脚手架

脚手架的结构如下：

	<div class="container">
		<div class="row">
			<div class="col">
				
			</div>
		</div>
	</div>


```<div class="container">``` 为最外层容器；

```<div class="row">``` 为行级；

```<div class="col">``` 为列级。

```<div class="row">``` 的宽度是整个屏幕宽度的100%；对于不需要满屏的行，可以使用 ```<div class="row row-padding">``` ，这样横向会有 1rem 的空余。如果这种padding不能满足需求，可以自定义横向padding数值。

```<div class="col">``` 默认宽度是 100% ；为了适应各种宽度需求，提供了各种百分比宽度的 col ：

	col-10
	col-20
	col-25
	col-30
	col-33
	col-40
	col-50
	col-60
	col-67
	col-70
	col-75
	col-80
	col-90

用法：

	<div class="row">
		<div class="col col-10">
		</div>
		<div class="col col-10">
		</div>
		<div class="col col-10">
		</div>
		<div class="col col-10">
		</div>
		<div class="col col-10">
		</div>
		<div class="col col-10">
		</div>
		<div class="col col-10">
		</div>
		<div class="col col-10">
		</div>
		<div class="col col-10">
		</div>
		<div class="col col-10">
		</div>
	</div>

脚手架目的是为了适应各种形式的布局。














































