---
layout: post
title: "angularjs component"
description: "angularjs 1.5 组件"
category: angularjs 
tags: [component]
---
{% include JB/setup %}

[原文地址](https://docs.angularjs.org/guide/component) ,以下是翻译内容

## 理解组件

在 ng 中， component 和 directive 相似，使用简单的配置，适用于基于组件的应用架构。

ng component ，让我们像使用 web component 或者 ng2 风格的应用架构一样来写应用。

### component 的优势

+ 比 directive 的配置信息要更简单

+ 设置默认值，更好的应用实践

+ 优化基于组件的架构

+ 组件化的指令，更平滑的升级到 ng2

### 不适合使用 component 的场景

+ 依赖 DOM 操作、添加事件监听等的 directive ，因为组件没有 compile 和 link 函数

+ 需要用到priority, terminal, multi-element等高级的 directive 选项的

+ 用 css class 或者属性，而不是用元素生成 directive 的情况 （component 只能生成元素）












