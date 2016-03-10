---
layout: post
title: "window下卸载并重新安装node"
description: "reinstall node on window os"
category: node
tags: [node]
---

# window下卸载并重新安装node

## 卸载node

window下安装node是到[node官网下载页面](https://nodejs.org/download/)去下载对应系统的msi。它会集成了npm，当然你可以手动下载node.exe，然后手动安装npm。


卸载node的话，我们也需要用msi文件。如果从控制面板里面卸载node，然后把 program 文件下的node文件和 appData中的 node 文件都手动删除，还是不能完全卸载node的。当下载了一个新的node安装包，会出现下面的报错信息。

    The feature you are trying to use is on a newwork resource that is unavailable.
    Click OK to try again,ro entrer an alternate path to a folder cantaining the installation package 'node-v0.10.26-x86.msi' in ths box below


<img src="http://wikieswan.qiniudn.com/reinstallnode.png">

这时候，你需要到到[官网](http://nodejs.org/dist/)上去下载这个版本的 msi 文件。这种情况产生的原因是我们已经移除了当初的安装包。
下载下来报错内容提示的安装包，放到错误信息中的路径去，然后启动安装包，选择卸载这个版本的 node 。这时候，这个版本的 node 就从电脑中彻底移除了 。  可以安装新版本的 node msi程序了。

总结：window 卸载 node ，必须用对应的安装包 msi。

祝好运！

