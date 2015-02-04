---
layout: post
title: "Windows 安装  jetyll"
description: ""
category: tools
tags: [jetyll setup]
---
{% include JB/setup %}

国内安装基于ruby的组件都是很痛苦的一件事情，你懂得！那只好曲线救国了。
先安装ruby，如果你没安装，请猛戳[http://rubyinstaller.org/downloads/](http://rubyinstaller.org/downloads/)

打开CMD，正常安装

	gem install jekyll

报错了是正常的，这是我们把ruby的源指向国内淘宝的

	sudo gem sources --remove http://rubygems.org/
	sudo gem sources -a http://ruby.taobao.org/

windows下安装还是需要 DevKit。DevKit 是一个在 Windows 上帮助简化安装及使用 Ruby C/C++ 扩展如 RDiscount 和 RedCloth 的工具箱。 详细的安装指南可以在程序的 wiki 页面 阅读。

再次前往 [http://rubyinstaller.org/downloads/](http://rubyinstaller.org/downloads/)
下载同系统及 Ruby 版本相对应的 DevKit 安装包。 例如，DevKit-mingw64-64-4.7.2-20130224-1432-sfx.exe 适用于64位 Windows 系统上的 Ruby 2.0.0 x64。
下面列出了如何选择正确的 DevKit 版本：
Ruby 1.8.6 to 1.9.3: DevKit tdm-32-4.5.2
Ruby 2.0.0: DevKit mingw64-32-4.7.2
Ruby 2.0.0 x64: DevKit mingw64-64-4.7.2
运行安装包并解压缩至某文件夹，如 C:\DevKit
通过初始化来创建 config.yml 文件。在命令行窗口内，输入下列命令：

	cd “C:\DevKit”
	ruby dk.rb init
	notepad config.yml

在打开的记事本窗口中，于末尾添加新的一行 - C:\Ruby200-x64，保存文件并退出。
回到命令行窗口内，审查（非必须）并安装。

	ruby dk.rb review
	ruby dk.rb install

##安装 Jekyll

确保 gem 已经正确安装

	gem -v

输出示例：
2.0.14
安装 Jekyll gem

	gem install jekyll

还有其他坑，比如要求ruby gem 1.9+的版本，低版本的请到官网升级。

当然安装jetyll只是为了能在本地预览博客。如果不想安装的话，也可以，大不了每次都push到github，在那里预览。
这里介绍一个快速构建博客的框架，请猛戳[jJekyll-Bootstrap](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)，进入页面之后，根据提示来操作吧，剩下的就很简单了。