---
layout: post
title: "ajax 页面恢复上次离开的是的历史记录"
description: ""
category:
tags: [javascript , ajax history]
---
{% include JB/setup %}

对于单页面应用（spa），页面内的操作基本上都是ajax，ajax页面内操作不会导致浏览器地址栏发生变化，要ajax页面的操作状态记忆需要特殊方式。

##思路：把页面上操作记录都存储下来，等回到页面再根据之前存储的值恢复页面状态
在存储介质上，我们可以选择前端介质，比如localstorage、cookie,或者手动维护一个js对象来存储，但是页面刷新之后变量就会丢失值，还可以选择后端存储。

存储介质的选择不同，但是思路都一样 ---- 页面上每个操作的状态都记录下来，恢复的时候利用之前存储的状态还原即可。下面逐一分析这些介质的特点：

###localstorage

兼容！痛。作为存储介质肯定没有问题，唯一的问题是兼容性，html5特性并不完全兼容所有浏览器，如果项目不考虑兼容性，这个是可以考虑的。

###cookie
太珍贵了！cookie没有兼容问题，但是cookie存储的量不大，一般不推荐。

###后端存储
后端把状态缓存起来，这种模式太重了。

###location.hash存储
通常我们单页面应用不会改变url，防止页面刷新的。但是我们可以利用hash的特点来实现。
注意到浏览器的地址栏通常是 
	
	http://xxx.com/#route1

改变#之后的内容不会引起浏览器行为，除非你绑定了onhashchange函数。我们的思路就是把页面操作过程都存到hash中，在浏览器地址栏里面记录这些历史操作。把页面内的操作都存到hash中，当页面跳转的时候，把这些hash带着，目的是为了跳回来的时候，把这些参数带着，这样就可以解析历史操作了。



为此需要准备一些基本工具----解析和拼接url中hash的值

####
1 解析hash值的参数

	define([],function () {

	    return function(){
	        var hash = location.hash,
	            hashArr,
	            queryObj = {},
	            queryArr = [];
	        if(hash.indexOf('&')==-1){
	            return queryObj;
	        }
	        hashArr = hash.split('&');
	        hashArr.shift();
	        _.each(hashArr,function(e){
	            queryArr = e.split('=');
	            queryObj[queryArr[0]] = queryArr[1];
	        });
	        return queryObj;
	    };
	});

2 拼接hash参数

	define([],function () {

	    return function(queryParam){
	        var paramStr = '',
	            rstHref = '';
	        if(queryParam=={}){
	            return rstHref;
	        }
	        for(var i in queryParam){
	            paramStr += '&'+i+'='+queryParam[i];
	        }
	        rstHref =  paramStr;
	        return rstHref;
	    };
	});

浏览器hash值类似这样

	http://127.0.0.1/center#route/price/monitor/queryDetailSummery?category=&ptBrand=&durativeIndex=&dataDate=2015-02-05&currentPage=1&pageSize=10&isWarn=1

解析后的值

	Object
		category: ""
		currentPage: 1
		dataDate: "2015-02-05"
		durativeIndex: ""
		isWarn: 1
		pageSize: 10
		ptBrand: ""
		__proto__: Object

其中 #route/price/monitor/queryDetailSummery? 这段代码是页面路由，与参数无关。

这样做也有它的劣势，当过多页面需要记住操作历史的时候，可能存在页面间参数重名的问题、浏览器内容过长的问题等。如果少量页面间跳转需要记录历史，比如列表页跳转到详情页，这样的场景还是比较适用的。