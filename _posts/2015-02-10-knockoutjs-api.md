---
layout: post
title: "knockoutjs api"
description: ""
category: javascript 
tags: [knockoutjs]
---
{% include JB/setup %}

#从这里开始

##1.KO怎样工作并且它能给我们带来什么好处？

介绍
Knockout是一个以干净的数据模型（data model）为基础的能够帮助你创建富文本，响应显示和编辑用户界面的JavaScript类库。任何时候你的UI部分需要动态更新（比如：更新取决于用户的操作或外部数据源变化）。KO可以帮助你实现由于它更简单并且很容易维护。

重要特性

  1. 优雅的依赖跟踪-无论何时你的数据模型改变你的需要变化的UI部分都会自动更新。

  2. 声明式绑定-通过一种简单易懂的方式连接你的数据模型到你的UI部分。你可以非常容易的运用任意的嵌套绑定上下文的方式来构建一个复杂的动态界面。

  3. 傻瓜式扩展-仅仅短短几行代码就可以做出可重用的新声明式绑定来实现用户自定义行为

额外的好处

  1. 纯净的javascript库：兼容所有的服务器端和客户端技术。
  2. 可以轻松添加到已有的web程序顶部：而不需要大的架构改变。
  3. 简洁的：压缩后只有13kb
  4. 兼容任何主流浏览器 (IE 6+、Firefox 2+、Chrome、Safari、其它)。
  5. 统一的规范(采用行为驱动开发) 意味着在新的浏览器和平台上可以正确的运行。

开发者如果熟悉Ruby on Rails (是一个可以使你开发，部署，维护 web 应用程序变得简单的框架。)或其它MVC技术可能会发现它是一个带有声明式语法的MVC实时form。从另一个意义上讲,你能想到可以把KO作为一种编辑JSON数据的方法而不用在乎它怎么工作。

OK，但是我们怎么使用它呢？
开始的最快和最有趣的方式是通过互动教程。一旦你掌握了基本知识,探索<a href="###">live example</a>,然后在一个自己的项目中运用它了。

KO和jquery是对立关系，还是相互协作呢？

所有人都喜欢jQuery! 它是一个在页面里操作元素和事件的框架，非常出色并且易使用，在DOM操作上肯定使用jQuery，KO解决不同的问题。

如果页面要求复杂，仅仅使用jQuery需要花费更多的代码。 例如：一个表格里显示一个列表，然后统计列表的数量，Add按钮在数据行TR小于5调的时候启用，否则就禁用。jQuery 没有基本的数据模型的概念，所以需要获取数据的数量（从table/div或者专门定义的CSS class），如果需要在某些SPAN里显示数据的数量，当添加新数据的时候，你还要记得更新这个SPAN的text。当然，你还要判断当总数>=5条的时候禁用Add按钮。 然后，如果还要实现Delete功能的时候，你不得不指出哪一个DOM元素被点击以后需要改变。



Knockout的实现有何不同？

使用KO非常简单。将你的数据描绘成一个JavaScript数组对象myItems，然后使用模板（template）转化这个数组到表格里（或者一组DIV）。不管什么时候数组改变， UI界面也会响应改变（不用指出如何插入新行<tr>或在哪里插入），剩余的工作就是同步了。例如：你可以声明绑定如下一个SPAN显示数据数量（可以放在页面的任何地方，不一定非要在template里）：

  There are <span data-bind="text: myItems().count"></span> items
  就是这些！你不需要写代码去更新它，它的更新依赖于数组myItems的改变。同样， Add按钮的启用和禁用依赖于数组myItems的长度，如下：

  ```
  <button data-bind="enable: myItems().count < 5">Add</button>
  ```

  之后，如果你要实现Delete功能，不必指出如何操作UI元素，只需要修改数据模型就可以了。



  总结：KO没有和jQuery或类似的DOM 操作API对抗竞争。KO提供了一个关联数据模型和用户界面的高级功能。KO本身不依赖jQuery，但是你可以一起同时使用jQuery， 生动平缓的UI改变需要真正使用jQuery。

##2.下载和安装

#监控属性

##1.创建可见的监控模型

Knockout是在以下三个功能上建立起来的：

1.监控属性和依赖跟踪

2.声明式绑定

3.模板

  这一节，你讲学到3个功能中的第一个。 在这之前， 我们先来解释一下MVVM模式和view model的概念。

  MVVM and View Models

  Model-View-View Model (MVVM) 是一种构建用户界面的设计模式。它描述了如果把一个复杂的UI分成三部分：

  1. A model： 你的应用程序存储的数据。这个数据表示对象和业务领域的操作(比如银行业务-可以执行转账)，并且它独立于任何UI。当你使用KO的时候，model通常指的是利用ajax从服务器端读取和写入进去的数据模型。

  2. A view model: 一些纯粹的代码表示UI层面的数据和操作。例如，你正在实现列表编辑，你的视图模型就是列表项目对象和增删改查操作方法。

  注意这不是UI本身：它不包含任何按钮的概念或者显示风格。它也不是持续数据模型 – 包含用户正在使用的未保存数据。使用KO的时候，你的view models是不包含任何HTML知识的纯JavaScript 对象。保持view model抽象可以保持简单，以便你能管理更复杂的行为。

  3. view: 一个可见的，交互式的，表示view model状态的UI。 从view model显示数据，发送命令到view model（例如：当用户click按钮的时候） ，任何view model状态改变的时候更新。


#绑定 binding

##文本和展现的控制

###1 visible 绑定
<!-- text绑定 -->




作用

visible 根据变量值的true或者false来控制DOM元素的显示或者隐藏。 

示例

<iframe width="480" height="360" src="http://codepen.io/anon/embed/LEREKG?slug-hash=LEREKG&default-tab=result&height=300&theme-id=0&user=anon" frameborder="0"> </iframe>


参数说明

主要参数

参数值为类似false值（eg，false、0、null、undefined）把yourElement.style.display设置为none，元素就隐藏了。

参数值为类似true值（eg，true、非null 的对象），则元素会显示。

如果参数是一个observable 变量，无论参数的值什么时候发生变化，元素的visible属性也会发生改变的。如果参数不是一个observable 变量，那么只会在第一次绑定的时候控制元素的visible属性，之后元素的visible属性不会发生变化。

其他参数

无

注意 使用函数或者表达式控制元素的显示或者隐藏

可以是用javascript函数或者表达式作为参数；knockout会运行函数或者表达式，用返回值来作为参数，从而觉得元素的显示或者隐藏。

e.g.


<iframe width="480" height="360" src="http://codepen.io/anon/embed/wBzaXR?slug-hash=wBzaXR&default-tab=result&height=300&theme-id=0&user=anon " frameborder="0"> </iframe>

依赖

无








<!-- text绑定 -->

###2 text 绑定

作用

text 绑定让DOM元素显示参数的值。对于 span 、 em 这些常用来表示文本的标签起作用，但是你想绑定在其他标签上也是可以的。 

示例

<iframe width="480" height="360" src="http://codepen.io/anon/embed/ZYpYgZ?slug-hash=ZYpYgZ&default-tab=result&height=300&theme-id=0&user=anon " frameborder="0"> </iframe>

参数说明

主要参数

Knockout 用参数的值设置DOM元素的text属性值；DOM元素原先的值会被复写。

如果参数是一个observable变量，那么一旦参数的值发生变化，页面上绑定的值都会立即改变；如果不是，那么只会在第一次绑定的时候改变页面元素的文本值，页面上的值之后就不会再被改变。

如果参数的类型不是number或者string（e.g., 对象或者数组），那么页面上展示的文本是对象到字符串等效转化的值，相当于yourParameter.toString()

其他参数

无

注意1：使用函数和表达式获取文本的值

如果想通过程序方式确定文本的值，那么需要用到可计算的observable,用可以返回文本的函数名作为参数。

e.g.

<iframe width="480" height="360" src="http://codepen.io/anon/embed/bNwdLO?slug-hash=bNwdLO&default-tab=result&height=300&theme-id=0&user=anon" frameborder="0"> </iframe>

那么文本的值就会根据price 的

变化而取 “expensive” 或者 “affordable” 。

另外，如果像下面那样只做简单的逻辑处理的话，是不需要创建可计算的observable的函数的。你可以传递任何的javascript表达式作为数据绑定。e.g.


```
The item is <span data-bind="text: price() > 50 ? 'expensive' : 'affordable'"></span> today.
```

注意2 HTML编码

既然绑定是用文本节点的值来设置页面上文本的值的，那么为了安全起见，设置任何字符串值的时候都应该避免HTML或者script注入。

e.g.

```
viewModel.myMessage("<i>Hello, world!</i>");
```


这段代码不会在页面上渲染出斜体文本，（即html标签不会被浏览器解析渲染），而是在页面上直接原样显示。

如果你要在数据模型中设置html代码，请看下文关于html绑定的说明。

注意3 不适用html元素完成文本绑定

有时候，你想完成数据绑定而不引入额外的HTML元素。例如，在option标签中引入额外的元素是不可以的，像下面的代码是不会生效的：

```
<select data-bind="foreach: items">
  <option>Item <span data-bind="text: name"></span></option>
</select>
```

为了处理这种情况，需要引入无容器的语法 -- 文本注释标签

```
<select data-bind="foreach: items">
	<option>Item <!--ko text: name--><!--/ko--></option>
</select>
```

The
```
<!--ko-->
```
和
```
<!--/ko--> 
```

表示注释区域的开始和结束。用这种方式定义了“虚拟元素”，里面包含了标记绑定。Knockout 会理解这种虚拟元素语法，并且会完成数据绑定。

注意4 IE 6下怪异的空格

IE 6会忽略紧跟在span标签后面的空格。例如


```
Welcome, <span data-bind="text: userName"></span> to our web site.
```

在IE 6下 to our web site前面的空格不会显示出来，解决这个问题的办法是在span标签里面加上&nbsp;例如

```
Welcome, <span data-bind="text: userName">&nbsp;</span> to our web site.
```


z在新版本的IE浏览器或者其他浏览器没有这个问题。

依赖

只依赖Knockout 核心库



<!-- html 绑定 -->

###3 html 绑定

html绑定让相关的DOM元素按照参数的内容展示html内容

尤其是当数据模型中的值是一段你需要展示的html字符的时候，html绑定是你的最爱。

示例


<iframe width="480" height="360" src="http://codepen.io/anon/embed/RNGPBM?slug-hash=RNGPBM&default-tab=result&height=300&theme-id=0&user=anon " frameborder="0"> </iframe>

参数说明

主要参数

knockout会先清除绑定元素中的html内容，然后根据情况把参数中的值设置为绑定元素的内容。

这里的情况分为两种，如果页面中引入了<b>jquery</b>，那么ko会调用$.html()函数来设置值；如果没有，那么knockout会拷贝参数内容到绑定元素中，然后append到绑定元素上，作为绑定元素的子元素。

如果参数是一个observable变量，那么无论时候变量发生变化，页面上的值也会随着变量一起变化；否则，只会在首次绑定的改变绑定元素的值，之后不会页面上的值不会随着参数变量值发生变化而变化。

如果参数的类型不是number或者string（e.g., 对象或者数组），那么页面上展示的文本是对象到字符串等效转化的值，相当于yourParameter.toString()

其他参数

无

注意 HTML 编码

既然HTML绑定是用<b>innerHTML</b>来实现的，那么再使用的时候要小心，别引入不被信任的代码片段，因为这可能导致script 注入攻击。如果你不能确认引用的模块是否安全，可以使用text绑定，而它的原理使用<b>innerText </b>或者<b>textContent </b>来实现内容绑定的。

依赖

只依赖Knockout 核心库






<!-- css 绑定 -->

###4 css 绑定



作用

 css 可以实现给指定DOM元素增加或者移除一个或者多个class。例如当参数值发生变化的时候，根据需要，给页面元素高亮成红色。

示例1 静态class



<iframe width="480" height="360" src="http://codepen.io/anon/embed/pvEJBv?slug-hash=pvEJBv&default-tab=result&height=300&theme-id=0&user=anon " frameborder="0"> </iframe>
当currentProfit 的值小于0的时候，元素会加上profitWarning 这个class

示例2 动态class


<iframe width="480" height="360" src="http://codepen.io/anon/embed/JoRdVJ?slug-hash=JoRdVJ&default-tab=result&height=300&theme-id=0&user=anon" frameborder="0"> </iframe>

当currentProfit是正值的时候，元素会绑定profitPositive  class，否则绑定profitWarning class

参数说明

主要参数

如果你使用静态的CSS class，然后传递一个属性名是CSS类名的javascript对象，根据是否加上CSS类的需求，把它们的值设置为true或者false。

可以一次设置多个CSS 类。例如，如果数据模型中有一个属性<b>isSevere</b>


```
<div data-bind="css: { profitWarning: currentProfit() < 0, majorHighlight: isSevere }">
```

用引号括起来多个CSS类，可以实现根据同一个条件来设置多个CSS 类。例如


```
<div data-bind="css: { profitWarning: currentProfit() < 0, 'major highlight': isSevere }">
```


非boolean 会被转化为boolean 型。例如0和null被转化为false；数字21或者非空对象被转化为true。

如果参数是一个observable 参数，当参数值发生改变的时候，绑定元素会添加或者移除CSS类。如果不是，那么直会在第一次绑定的时候添加或者移除CSS类，之后不会改变。

如果你想用动态的CSS类，（所谓动态是指参数去不同的值，元素会绑定不同的CSS类），你需要传递一个字符串，这个字符串用来表示将要添加到DOM上的CSS类名。

如果参数是一个observable参数，绑定的时候会移除DOM原先的所有CSS类，然后根据参数的值给元素添加新的CSS类。

通常，可以使用任意的javascript函数或者表达式作为参数。knockout会计算结果，然后根据逻辑决定添加或者移除CSS类。


其他参数

无

注意 不能使用不合法的javascript变量名作为CSS类名

如果你想使用<b>my-class</b>类名，你不能像下面这样写：

```
<div data-bind="css: { my-class: someValue }"></div>
```

因为这时<b>my-class</b>不是合法的标示符。解决方案很简单，用引号括起来就可以了。这样CSS类名变成了一个简单的字符串文本，对于javascript对象来说这就是合法的属性名了。换句话说，javascript语言本身不支持带'-'的属性名。
例如

```
	<div data-bind="css: { 'my-class': someValue }"></div>
```

依赖
只依赖Knockout 核心库


<!-- style 绑定 -->

###5 style 绑定

waiting ...



<!-- attr 绑定 -->

###6 attr 绑定

attr提供一个通用的方法来给

示例




  
<iframe width="480" height="360" src="http://codepen.io/anon/embed/qEaONx?slug-hash=qEaONx&default-tab=result&height=300&theme-id=0&user=anon" frameborder="0"> </iframe>

参数说明
主要参数



其他参数
无
注意 HTML 编码

依赖
只依赖Knockout 核心库

