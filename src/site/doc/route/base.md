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

### 路由跳转  
通过`mess-cli`构建的应用，都会在各自的`子模块入口`绑定一个`router`对象  
由于框架的原因，在`react、vue`模板中调用方式有一定的区别。
***  
#### react 
在`react`应用中，`[react]/src/utils/singleSpa.js`中封装一个微服务工具库  
  

在`本地运行`的模式下，会在本地运行的入口（`[react]/src/localDev.js`）进行初始化，方便本地运行模式的使用  
  

在`基于核心服务启动`的模式下，会在基于核心服务启动的入口（`[react]/src/root.component.js`）进行初始化  

使用方式如下：  
```js
import {singleSpa} from '../utils/singleSpa'

...
singleSpa.router.push(path)
...
```
***
#### vue
在`vue`应用中，`[vue]/src/utils/singleSpa.js`中封装一个微服务工具库  
  

在`本地运行`的模式下，会在本地运行的入口（`[vue]/src/main.js`）进行初始化，`作为全局变量绑定在Vue对象上`，方便本地运行模式的使用    

在`基于核心服务启动`的模式下，会在基于核心服务启动的入口（`[vue]/src/index.js`）进行初始化，作为全局变量绑定在Vue对象上  

使用方式如下：  
```js
// 在vue组件中
...
this.$singleSpa.router.push('/a')
...
```
***
#### API
内置的router提供了`push`，`back`，`forward`，`go`方法  
```js
/**
  * path: '/a'
  * 路由跳转
*/
this.$singleSpa.router.push(path) // vue
singleSpa.router.push(path) // react

/**
  * 上一个路由
*/
this.$singleSpa.router.back() // vue
singleSpa.router.back() // react

/**
  * 下一个路由
*/
this.$singleSpa.router.forward() // vue
singleSpa.router.forward() // react

/**
 * n - ... | -1 | 0 | 1 | ...
 * 去到第几个路由（以当前路由为准）
*/
this.$singleSpa.router.go(n) // vue
singleSpa.router.go(n) // react
```  
<blockquote class='tip'>
    <p>为什么要单独封装一个路由库？</p>
    <p>由于各个子应用通过single-spa组装在一起，不同子应用间的互相跳转是没办法依赖各自应用中的路由库实现的，因此需要一个路由库将应用路由统一起来。</p>
</blockquote>  
  

应用内部使用框架自带的路由库对路由进行响应即可，例如vue项目中，使用vue-router，并且子应用内部可单独维护路由，当你需要跳转到外部其他路由时，建议使用上述方式。