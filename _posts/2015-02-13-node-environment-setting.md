---
layout: post
title: "node中设置环境是生产或者开发或者测试 node environment setting"
description: ""
category: node
tags: [node]
---
{% include JB/setup %}

## 问题场景
在不同的环境下，程序调用的接口地址是不一样的。

在开发 测试 生产的环境中，程序的调用接口地址一般是不一样的。
在stackoverflow上找到一些答案

Before running your app, you can do this in console,

	export NODE_ENV=production

Or if you are in windows you could try this:

	SET NODE_ENV=production

or you can run your app like this:

	NODE_ENV=production node app.js

You can also set it in your js file (express/lib/application.js):

	process.env.NODE_ENV = 'production';