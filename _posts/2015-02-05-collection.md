---
layout: post
title: "收藏夹"
description: ""
category: tools
tags: [collection]
---
{% include JB/setup %}

#常用工具收藏

##1 CDN

开放静态文件 CDN新增一个库 

	http://www.staticfile.org/

##2 supervisor 

当修改了node代码或者node服务器挂了，可以自动重启node服务器的神器

安装

	npm install supervisor -g

使用

	supervisor server.js ##原来的 node server.js

详细参数 参见[https://github.com/isaacs/node-supervisor/](https://github.com/isaacs/node-supervisor/)
