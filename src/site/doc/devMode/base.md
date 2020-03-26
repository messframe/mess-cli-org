## 运行

### 本地开发
***
在子模块中，单独运行子模块，只需要执行命令`npm run dev:local`，在设定好的启动端口中进行访问即可
### 依赖核心服务运行
***
当依赖核心服务运行时，需要确认以下内容：
* 核心服务的配置文件`config.js`中是否已经注册了该子模块([手动注册子模块](/#/registerSubModule))
* 被注册的子模块的`origin`和`entry`是否正确，是否能够正常访问到子模块的入口文件
* 被注册的子模块的`moduleName`是否和子模块`set-public-path.js`中定义的一致


以上内容确认完毕后，就可以运行了：
* 首先要运行核心服务，在核心服务根目录执行命令`npm run dev`
* 运行子模块，在子模块根目录执行`npm run dev`
  
运行完成后，打开核心服务的页面入口，默认是`8233`端口
<blockquote class='tip'>
    <p>打开页面后，若发现页面是空的，也不要担心，可以尝试访问路径<code class='tipCode'>http://localhost:8233/#/${模块名称}</code></p>
    <p>更多有关路由介绍，请移步<a href="/#/route">路由</a></p>
</blockquote>