---
layout: post
title: "开始写es6吧"
description: ""
category: es6
tags: [es6]
---
{% include JB/setup %}

# 开始写es6吧

## ECMAScript 6简介

ECMAScript 6（以下简称ES6）是JavaScript语言的下一代标准，正处在快速开发之中，大部分已经完成了，预计将在2015年6月正式发布。Mozilla公司将在这个标准的基础上，推出JavaScript 2.0。

ES6的目标，是使得JavaScript语言可以用来编写大型的复杂的应用程序，成为企业级开发语言。

## ES6语法

传送门 [ECMAScript 6入门 作者：阮一峰](http://es6.ruanyifeng.com/#README)

为了下文需要简单先说几个ES6的语法特征。

ES6新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。


    {
      let a = 10;
      var b = 1;
    }
    a // ReferenceError: a is not defined.
    b // 1

## 部署环境

node从0.11+支持ES6更多的新特征，如果你的node版本低的话，那就去升级吧。window下如何升级，[点击传送门]()

下面是干货了，亲们注意了：

### js文件以 ```"use strict";``` 开头

    "use strict";
    {
        let a = 1;
        console.log(a)
    }


### node run的时候加上 ```--harmony``` 参数

    $ node --harmony demo.js

这样就可以正常运行ES6的代码了，快去尝尝鲜吧。 需要注意的是，部分ES6的特性node 现在是不完全支持的，所以如果出现部分语法编译执行报错，不要慌张，等等呗！

## iojs运行ES6

什么？你觉得run代码的时候，在控制台输入 ```--harmony``` 是一件很挫的事情！ 是的，很多人都这样觉得，所以才有了 ```iojs``` 。那我们再试试这个神器吧！

首先要下载 ```iojs``` ,[传送门](https://iojs.org/en/index.html) 。安装之后就可以在命令行中输入 ```iojs demo.js ``` 就可以跑ES5代码了。当然别忘记在js代码头部加上 ```"use strict";``` 。

## 在项目中用ES6

上面介绍的两种run ES6的方式是在命令行中，那么我迫不及待要在项目中运用怎么办？

```babel``` 神器助你一臂之力。

用 ```babel``` 有多中方式，[using babel](https://babeljs.io/docs/using-babel/) .总有一款属于你。

下面来看看 gulp编译的 ES6 to ES5的前后过程吧

项目文件结构

    es6demo
        dist
            es6.js
        src
            es6.js
        node_modules
        gulpfile.js
        package.json

其中package.json关键代码，是对gulp-babel的依赖。

    "dependencies": {
        "gulp": "^3.8.11",
        "gulp-babel": "^5.1.0"
    }
    

gulpfile.js 的代码，主要作用是吧src中的es6代码以es5的形式编译到dist中

    var gulp = require('gulp');
    var babel = require('gulp-babel');
    gulp.task('default', ['watch']);
    gulp.task('watch', function () {
        gulp.watch(['src/**/*.js'], ['babel']);
    });
    gulp.task('babel', function () {
        return gulp.src('src/**/*.js')
            .pipe(babel())
            .pipe(gulp.dest('dist'));
    });


那么先睹为快吧

src 中的 es6.js代码

    "use strict";
    {
        let a = 1;        
    }
    console.log(a)

dist 中的 es6.js代码

    "use strict";
    {
        var _a = 1;
    }
    console.log(a);

通过改变变量名称，把es6中的 a 变成 _a ，这样就实现了 ```{}``` 中 ```let``` 的局部变量的过程。是不是很挫！！！ 不过能用就好啦。
发现更多？自己去试试吧。

