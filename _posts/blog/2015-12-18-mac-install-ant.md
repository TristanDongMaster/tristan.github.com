---
layout: post
title: "mac install ant"
description: ""
category: mac
tags: [mac]
---

mac 下安装 ant

## 1 下载 Apache ant 

官网下载，在墙外；。在官网下载最新的安装包，那个zip包

## 2 解压到某个目录

解压到指定的目录，我把它解压到 /usr/local/ 下

## 3 配置环境变量指定到 ant 解压目录

终端输入

	vi ~/.bash_profile

添加ant 配置信息

	export ANT_HOME=/usr/local/apache-ant-1.9.6  
	export PATH=${PATH}:${ANT_HOME}/bin 

## 4 测试

输入命令 

	ant -verison


输出

	Apache Ant(TM) version 1.9.6 compiled on June 29 2015

安装成功！	


