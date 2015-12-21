---
layout: post
title: "mac android sdk"
description: ""
category: mac
tags: [android sdk]
---
{% include JB/setup %}


mac 安装 android sdk

## 1 下载android sdk

去官网下载 [http://developer.android.com/sdk/installing/index.html](http://developer.android.com/sdk/installing/index.html)

找到 dmg 安装包，下载。

## 2 安装 .dmg文件 

点击下一步，直到完成。

## 3 配置环境变量

1 修改环境变量文件

打开

	vi ~/.bash_profile

添加

	export ANDROID_HOME=/Users/wan-mac/Library/Android/sdk
	export PATH=$ANDROID_HOME/tools:$PATH
	export PATH=$ANDROID_HOME/platform-tools:$PATH


其中	ANDROID_HOME 是你机器上android本地安装路径，我的是 /Users/wan-mac/Library/Android/sdk

2 刷新修改

	source ~/.bash_profile

## 检查 

	adb devices

