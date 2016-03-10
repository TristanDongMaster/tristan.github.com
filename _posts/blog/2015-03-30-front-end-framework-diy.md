---
layout: post
title: "自己动手做一个前端SPA框架"
description: "web"
category: blog
---
{% include JB/setup %}

SAP框架当然首选Angular，功能强大，书写简单。但是有的时候我们需要一些实现一些特殊的业务，又不想被框架绑架，比如框架出现了BUG或者特殊需求框架不能满足。那自己动手，来写一个SPA框架。

业务上，为了解决浏览器兼容问题（兼容到ie8），我们放弃了Angular，选择自建框架。

材料

	knockout	//view ui库 
	jquery		//js 库 
	underscore	//js 库
	require		//模块化开发

工具
	
	npm	//前端自动化
	bower	//包自动化管理器
	gulp	//前端开发流程管理

项目目录

<img src="http://wikieswan.qiniudn.com/spa.jpg" style="width:100%;border:1px solid #ccc">

框架设计

index.html作为主页面，在这里引入了必要的样式和库文件。有一个div#body，它来存放每次load到主页面的业务逻辑代码段。

	<!DOCTYPE html>
	<html>
	<head>
	    <title>framework demo</title>
	    <link rel="stylesheet" href="./resources/somethings.css" rel="stylesheet" media="screen">
	</head>
	<body>
	    <div id="body">载入中...</div>
	</body>

	<script src="./resources/somethings.js"></script>
	<script src="./resources/bower_lib/require.mins.js"></script>
	<script src="./resources/js/config.js"></script>

config.js是框架的js入口文件

	requirejs.config({
	    baseUrl: './resources',
	    urlArgs: '1.0.0',
	    paths: {        
	        'domReady':'bower_lib/domReady',        
	        'app': 'app',
	        'mod' : 'js/mod'
	    }
	});
	requirejs(['domReady','mod/route','mod/rootScope'],function(domReady,route,rootScope) {
	    domReady(function () {      
	        var defaultUrl = rootScope.filePath + 'busyness1/index.html';
	        route(defaultUrl);

	    });
	 });

route.js模块是整个网站的路由控制器，它的原理是让主页面index.html的div#body按照具体的文件路径加载文件。当业务逻辑文件busyness1/index.html被div#body load之后，busyness1/index.html的代码就会执行，这时候只要在busyness1/index.html页面代码中用script标签引入它对应的逻辑代码busyness1/mod.js代码就可以完成逻辑模块的加载了。具体代码如下：

route.js 路由控制文件

	define([],function () {
	    return function(url,fn){
	        $('#body').load(url,function(){
	            $(window).scrollTop(0);
	            if(typeof fn==='function'){
	                fn();
	            }
	        });
	    };
	});

rootScope.js 路径配置文件

	define([],function () {
	    var rootScope = {
            filePath : './resources/js/app/',
            domain: 'http://www.demo.com'
	    };
	    return rootScope;
	});

busyness1/index.html 业务逻辑的html代码

	<div id="busyness1">
		<!--view code busyness goes here-->
		<script src="./resources/js/app/busyness1/mod.js"></script>
	</div>

busyness1/mod.js 业务逻辑的js代码

	requirejs(['domReady'],function(domReady) {
	    domReady(function () {
	    	// js code busyness goes here
	    }
	});