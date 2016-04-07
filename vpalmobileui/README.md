# front-end workflow 

##  工具流提供的接口

```bash	
	//根据 package.json 的分支和版本信息，对新建分支进行初始化
	gulp init

	//是 gulp init 的逆向操作，据说恢复目录名称到初始状态
	gulp reset

	//工具流入口，它完成了 静态服务器的启动、 监听所有静态文件的修改并编译等操作
	gulp or gulp default


	//开发完成之后，需要把 src 源目录的 code 打包到上线目录中
	//以下两个命令分别打包 pc 和 h5 的 code
	gulp build-h5
	gulp build-pc

	//清除上一步打包的文件
	//清除这个分支的所有打包后的文件，包括pc和h5 （慎用，小心删了别人的code）
	gulp clear

	//清除h5 打包后的code
	gulp clear-h5

	//清除pc 打包后的code
	gulp clear-pc
```

## 工具流使用方法

### 目录说明：

目前 vpalstatic 域下的所有静态资源都是增量发布的，线上 code 的目录结构大致如下:

```sh
	vpalstatic/
		css/
			public/
				branchName/
					versionName/
						h5/
						pc/
		font/
		html/
		img/
		js/
		lib/
		src/
```


+ 1 font html img js 和 css 的目录结构一样，就省略不写了。src 是前端开发源文件放置的位置，不上线
+ 2 新增的分支的命名规则是 branchName-versionName ，例如 remotes/origin/portal-v1.0
+ 3 新分支的发布路径和原有路径不会重复，作用是增量发布


### 新分支开发流程

#### 1 请从远程的 generater 分支上切换到自己的开发分支，假如开发分支是 wallet-v1,那就在 generater 分支下执行

```sh
	git checkout -b  wallet-v1
```

#### 2 打开 src/package.json ， 修改 dir.branchName dir.versionName 的值，如下

```sh
	"dir": {
	    "branchName": "wallet",
	    "versionName": "v1"
	}
```

#### 3 到src目录下执行项目初始化命令，按照下面的顺序执行：

```sh
	cd src
	npm install
	gulp init
```

这一步需要依赖 node npm gulp 环境，如果没有请自行安装。

#### 4 这时候所有的开发环境都准备好了，开始写 code ，启动静态服务器，监听所有修改

```sh
	gulp
```

#### 5 开发完成之后，对项目进行打包。

这一步的主要作用是把 src 目录下的code 复制到对应的上线目录中
注意，h5 和 pc 的code 是分开打包的，因为一般情况下 h5 和 pc 项目是分开开发的

```sh
	gulp build-h5	
	//gulp build-pc
```

到这里，开发流程就完成了！



## 前端开发联调接口的说明

vpalstatic 是前后端分离的开发模式，开发过程中，启动了 node 静态服务器，
那么为了在调用后端接口的时候避免跨域的问题，我们使用了 nginx 做了一层代理。
nginx 配置信息如下：

```nginx
	worker_processes  1;
	events {
	    worker_connections  1024;
	}

	http {
	    include       mime.types;
	    default_type  application/octet-stream;
	    sendfile        on;
	    keepalive_timeout  65;
	    server {
	        listen       9000;
	        server_name  localhost;

	        location /api {
	            proxy_pass  http://myvpal.vip.com/api;
	        }
	        location / {
	            proxy_pass  http://vpal.vipstatic.com;
	        }
	    }
	}
	include servers/*;
```

host 配置信息如下

```sh
	10.100.79.228 myvpal.vip.com
	10.100.79.228 myvpal.vip.vpal.com
	127.0.0 vpal.vipstatic.com
```

nginx 服务器启动的是 9000 端口，那么我们在浏览器中访问 

```sh
	http://127.0.0.1:9000
```

这时候， nginx 会把所有的 /api 接口请求转发到 10.100.79.228 myvpal.vip.com ，
而其他的请求都转发到 127.0.0 vpal.vipstatic.com 。这样我们就可以愉快的和 backend 调接口了。

## 总结：
前端工具流主要包括3部分内容

+ 1 自动化新建分支目录和编译打包code
+ 2 nginx 反向代理
+ 3 host 域名配置

我们来重点说明第一条。

### 自动化新建分支目录和编译打包code的原理分析：

#### 1 新建分支目录

根据package.json的配置信息，用 shell 或者 dos 命名完成目录的初始化，这里做了 windows 和 mac 的兼容

#### 2 编译 js

js 模块化开发，我们推荐是用 webpack 工具，使用 webpack 的好处：

1 生产环境不依赖第三方库，例如 seajs 或者 requirejs
2 可以放心使用 es6 语法，这样就有

目前h5 端开发是使用 webpack ，pc端使用 seajs。鉴于seajs 社区没落，打包工具不完善等因素，建议pc 端也转向 webpack 打包模块化 js 文件。

#### 3 css 预处理

目前流程中支持两种 css 预处理方式，分别是 sass 和 less，默认是 sass，通过注释可以完成sass到less 的切换。当然如果需要支持其他 css 预处理方式，请自行添加。

#### 4 其他静态文件处理

如有需要，可以自行在 gulpfile 中添加

这里需要强调一点是：webpack 仅仅用于做 js 模块化预处理工作，这也是它的本职工作，不建议把less、img等作为模块打包，
这样虽然可以减少http请求，但是会出现闪屏现象。其他的工作，还是交给 gulp 来处理。






