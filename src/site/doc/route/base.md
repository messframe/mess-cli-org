## 路由
### 按规则匹配
`mess-cli`脚手架生成的核心服务，路由具有一定的规则。
***
以核心服务启动的url为`http://localhost:8233/#/`为例  
模块cA的注册核心服务的内容是：  
```js
"cA": {
    "moduleName": "@center/cA",
    "origin": "http://localhost:8236",
    "entry": "/cA.js"
},
```
如果要访问模块`cA`的内部路由，则必须要在核心服务的路由中加上模块名称，例如：  
* http://localhost:8233/#/cA
* http://localhost:8233/#/cA/page1
* http://localhost:8233/#/cA/page2
  
如果注册的内容是:  
```js
"module_cA": {
    "moduleName": "@center/cA",
    "origin": "http://localhost:8236",
    "entry": "/cA.js"
},
```
就应该用：
* http://localhost:8233/#/module_cA
* http://localhost:8233/#/module_cA/page1
* http://localhost:8233/#/module_cA/page2
  
***
### 一直展示
如果要让某个模块一直展示在页面上，例如侧边菜单、头部导航栏菜单等，需要在注册这个模块的时候，设置其`router`为`true`
```js
"module_cA": {
    "moduleName": "@center/cA",
    "origin": "http://localhost:8236",
    "entry": "/cA.js",
    "router": true
},
```
>提示：<br>当你设置了某一个模块的router为true后，那么该模块不应该有内部路由，通常模块内部存在路由时，在访问其他模块的内部路由时，该模块的内部路由有可能将无法匹配，导致展示不出来。<br>这个不是核心服务的问题，而是子模块的路由规则导致的。
***
核心服务只负责模块的基础路由，模块的内部路由，由模块自身进行维护