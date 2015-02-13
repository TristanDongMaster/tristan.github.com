---
layout: post
title: "node http.get 接受数据的方式"
description: ""
category: node
tags: [node]
---
{% include JB/setup %}

## node 中 http.get() 接受数据的正确方式

代码如下

	app.get('/', function(req, res){
		
		http.get("http://127.0.0.1:9000/goodsList", function(res0,data) {
			res0.setEncoding('utf8');
			var body = '';
			res0.on('data', function (chunk) {
				body += chunk;
			});
			res0.on('end', function() {
				// do with body data
				body = JSON.parse(body)
				
			    //option.goodsList = body.list;
			    //res.render('index', option);
			});
		}).on('error', function(e) {
		  console.log("error" + e.message);
		});
		
	});

可以看到，在 'end' 的回调函数中处理数据

	res0.on('end', function() {
		//do with data
	});

这样可以保证接受到完整的数据流之后执行函数。

如果是在 'data' 事件上绑定对数据的处理的话，如果数据过大，可能在没有接受完整的数据前就开始执行回调函数了，这样就得到错误的结果了。

