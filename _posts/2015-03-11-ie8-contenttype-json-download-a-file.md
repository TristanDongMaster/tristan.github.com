---
layout: post
title: "IE8会下载ajax返回的json"
description: ""
category: 
tags: [javascript]
---
{% include JB/setup %}

ie8 不知道对于 application/json 的相应怎么处理 
所以需要在后端处理一下 

比如 

	private static string SetContentTypeBasedOnBrowserAndCommand(HttpContext context)
    {
        var contentType = "application/json"; // default
        // if browser is IE
        if (DegreeCore.Util.BrowserUtil.IsIE(context.Request.Browser))
        {
            // override response
             contentType = "text/html";
        }

        return contentType;

    }


否则ie8会以文件的形式下载后端的json返回值，文件名以一个随机串结尾。