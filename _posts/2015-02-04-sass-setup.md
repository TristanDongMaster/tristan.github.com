---
layout: post
title: "sass 安装"
description: ""
category: sass scss
tags: [tools]
---
{% include JB/setup %}

sass 运行依赖于ruby，以前安装的时候也存在一些坑，贴出来，希望看到的人可以绕过去。

#1安装ruby
此处省略
#2安装sass
正常安装方式

	$ gem install sass
	$ gem install compass

通常这样是安装不上的，你懂得。

曲线救国吧，把ruby的源改为国内淘宝镜像。


	$ gem sources --remove https://rubygems.org/
	$ gem sources -a https://ruby.taobao.org/
	$ gem sources -l

然后再指向正常安装的指令就ok了。