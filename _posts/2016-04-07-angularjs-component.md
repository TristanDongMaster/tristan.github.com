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

## 创建、配置 component 

使用 Angular 模块（```angular.module()```）的 ```.component()``` 方法创建 component 。 这个方法接受两个参数：

+ component 的名称（string）

+ component 配置信息（注意，和```.directive```方法不一样的是，该方法没有工厂函数）

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-heroComponentSimple-production</title>
  

  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js"></script>
  <script src="index.js"></script>
  <script src="heroDetail.js"></script>
  

  
</head>
<body ng-app="heroApp">
  <!-- components match only elements -->
<div ng-controller="mainCtrl as ctrl">
  <b>Hero</b><br>
  <hero-detail hero="ctrl.hero"></hero-detail>
</div>
</body>
</html>

<!-- 
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
-->
```

## directive 和 component 的对比

  | Directive | Component 
---------------|---------------|---------------|---------------
bindings|	No	|Yes (binds to controller)
bindToController|	Yes (default: false)|	No (use bindings instead)
compile function|	Yes	|No
controller|	Yes	|Yes (default function() {})
controllerAs|	Yes (default: false)	|Yes (default: $ctrl)
link functions|	Yes	|No
multiElement|	Yes	|No
priority|	Yes	|No
require|	Yes	|Yes
restrict|	Yes	|No (restricted to elements only)
scope|	Yes (default: false)	|No (scope is always isolate)
template|	Yes	|Yes, injectable
templateNamespace|	Yes	|No
templateUrl|	Yes	|Yes, injectable
terminal|	Yes	|No
transclude|	Yes (default: false)	|Yes (default: false)

##  基于组件的应用架构

### component 仅仅控制它自己的 view 和 data

component 不能修改它作用域外的数据或者DOM。通常，在 angular 中，通过作用域的继承和监听，我们可以修改应用中的任何值。如果对修改的内容不清楚的话，会导致不容易排查的问题。所以 component 指令使用一个分离的作用域，不能操作全局作用域。

### component 公共API - inputs 和 outputs

作用域隔离是不够的，因为 angular 使用双向绑定。所以，如果向 component 传递这样参数： ```bindings:{item:'='}``` ，那么组件修改了属性值，那么会影响到父组件。对于组件来说，它只修改自己的数据，这样就可以判断数据变化的原因了。component 需要遵循以下规则：

### Inputs 使用 ```<``` ，```@```绑定。在Angularjs 1.5之后 ```<``` 代表单向绑定。和```=```不同的地方在于 component 绑定的属性是






