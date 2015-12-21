---
layout: post
title: "android cli"
description: ""
category: adnroid
tags: [cli androi]
---
{% include JB/setup %}

android 命令行


	adb devices
	//列出可用的设备信息


	android
	//打开android sdk 管理器,一般用于安装和更新 android 各个版本的 sdk

	android list sdk --all
	//列出所有可用的 sdk	


	android update sdk -u -a -t  1,2,3,10,20,21,22,23
	//更新指定的sdk  序号对应上一条命令返回的sdk序号

	

