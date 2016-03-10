---
layout: post
title: "关闭 Mac 版 Chrome 自动更新的方法"
description: ""
category: 
tags: [备忘]
---

Chrome 的一大特性之一就是自动更新，但如果在某些特定情况下想要关闭自动更新功能的话，也是可以实现的，本文就分享下如何关闭 Mac 版 Chrome 的自动更新功能。非常简单，在终端中执行命令（然后重启 Chrome）：

	defaults write com.google.Keystone.Agent checkInterval 0

完成之后，Mac 版 Chrome 就不会在自动更新了，比如你使用3G上网卡，想要节省流量的话，这个方法非常有效。并且需要提醒的是，执行这个命令之后不仅仅会关闭 Chrome 的自动更新功能，还会关闭装在当前电脑上所有 Google 软件的自动更新功能。所以，一般情况下不建议使用。

关闭自动更新之后，能否手动更新呢？当然！在 Finder 中按快捷键 Command+shift+G，然后输入下面的路径：

	/Library/Google/GoogleSoftwareUpdate/GoogleSoftwareUpdate.bundle/Contents/Resources/

接着双击该目录中的 CheckForUpdatesNow.command 文件，让它在终端中执行，现在就启动 Google 软件的手动更新功能了。

如果想要恢复 Chrome 的自动更新也很简单，在终端中运行下面的命令：

	defaults write com.google.Keystone.Agent checkInterval 18000

原文链接
http://www.chromi.org/archives/13955	