---
layout: post
title: "Jekyll Bootstrap 如何去除页面上Disqus评论框架的Discovery box部分"
description: "Jekyll Bootstrap"
category: jekyll
tags: [jekyll]
---
{% include JB/setup %}

Jekyll Bootstrap的评论功能是有Disqus提供的服务。我们的博客想要评论功能，但是不想要广告。
下面就介绍怎么把广告去掉。

#注册Disqus
首先先登陆disqus.com，注册一个自己的服务，记住自己的short_name，可以在设置页面查看到。

	https://USERNAME.disqus.com/admin/settings/

#修改_config.yml配置
comments的默认配置是：

	comments :
    provider : disqus
    disqus :
      short_name : jekyllbootstrap


为此我们需要修改为

	comments :
    provider : disqus
    disqus :
      short_name : USERNAME  #这就是你在disqus的short_name

到此，问题就解决了。
