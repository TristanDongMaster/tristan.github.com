---
layout: post
title: "jekyll 常用命令"
description: ""
category: 
tags: [jekyll]
---
{% include JB/setup %}

##安装jetyll

	$ gem install jekyll

##启动jetyll

	$ jekyll serve

##新增一篇文章

	$ rake post title="Hello World"

##新增一个页面
创建一个简单的页面

	$ rake page name="about.md"

创建一个嵌套页面

	$ rake page name="pages/about.md"

创建一个带路径的页面

	$ rake page name="pages/about"
	# this will create the file: ./pages/about/index.html