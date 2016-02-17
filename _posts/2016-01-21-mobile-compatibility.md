---
layout: post
title: "移动端H5开发兼容性"
description: ""
category: 兼容性
tags: [html5 兼容性]
---
{% include JB/setup %}

## 这里整理遇到的移动端开发遇到的兼容性问题

坑！


## 1 QQ浏览器```<a>```标签不能识别 visited 属性

问题描述：

QQ浏览器版本：6.3.0.1960
表现: ```<a>``` 标签不能识别 visited 属性，及时设置了 a 标签的 visited 属性，但是点击 a 之后，仍然还是变成灰色。

代码如下：


	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8" >
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
		<meta name="msapplication-tap-highlight" content="no">	
		<meta content="yes" name="apple-mobile-web-app-capable">
		<meta content="black" name="apple-mobile-web-app-status-bar-style">
		<meta content="telephone=no" name="format-detection">

		<title>a target test</title>
		<style type="text/css">
			a{
				display:inline-block;
				background: transparent; 
				text-decoration: none; 
				color:#000;
				-webkit-tap-highlight-color: rgba(255,255,0,0); 
			}


			a:link{
				text-decoration:none;
				color:#000;
			}
			a:active{
				text-decoration:none;
				color:#000;
			}
			a:visited{
				text-decoration:none;
				color:#000;
			}
			a:hover{
				text-decoration:none;
				color:#000;
			}
		</style>
	</head>
	<body>
		<a href="javascript:;">hello word</a>
	</body>
	</html>



+ 点击前

<img src="/img/do-not-delete/qq-a-click-before.jpg" style="border:1px solid #ccc;">


+ 点击后 

<img src="/img/do-not-delete/qq-a-click-after.jpg" style="border:1px solid #ccc;">


但是在其他浏览器：比如Safari、UC等浏览器中没有发现这个问题。

之所以说这是个问题，是因为我都是用```<a>```标签来写按钮的，这样的话我的按钮点击后在QQ浏览器下文字就变成灰色了。

没找到解决办法，先记着。


## 2 谷歌浏览器下 1rem=12px

问题描述：

html {font-size: 62.5%;}
body {font-size: 1.4rem;}
这样式设置以后 1rem=10px; 1.4rem=14px;2rem=20px 但是在谷歌浏览器的和模型下是 1rem=12px


解决方案：

这个原因就在于，chrome不支持10px字体了啊。
所以，你即便设置了10px的字体，但是谷歌浏览器默默地帮你改成了12px。
解决的办法就是将html的字体大小设置为50px，换算成百分比就是312.5%，美团的触屏h5页面就是这么处理的。
这样算起来就好算多了。
当然，也可以设置成20px，也好算。
用css预编译处理器最好，省的计算了。





