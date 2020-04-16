## 事件总线
<br>
<blockquote class='tip'>
    <p>核心服务提供了一个<span class='important'>事件总线</span>，名为<span class='important'>eventBus</span></p>
</blockquote>  

<span class='important'>建议不要太依赖于事件总线来进行跨模块间的通信，因为这样会增大模块间的耦合程度，违背了前端微服务的设计初衷。</span>  
事件总线通常用于全局通知，例如换肤、多语言、token认证过期、权限下发(下发到其他模块)等，在某个模块（通常会存在某个主模块）发布了这些事件之后，子模块各自去订阅相关事件即可。

***  
在react项目中
```js
import {singleSpa} from '../utils/singleSpa'

...
singleSpa.eventBus.trigger('eventName')

singleSpa.eventBus.on('eventName', () => {  })

singleSpa.eventBus.off('eventName')
...
```  
***  
在vue项目中
```js
...
this.$singleSpa.eventBus.trigger('eventName')

this.$singleSpa.eventBus.on('eventName', () => {  })

this.$singleSpa.eventBus.off('eventName')
...
```  
***  


`eventBus`提供了三个简单的API：`eventBus.on`、`eventBus.trigger`、`eventBus.off`  

### eventBus.on
注册一个事件，当这个事件被触发时，将会调用回调函数
```js
eventBus.on('talkToMe', (params) => {
    console.log(params)
})
```  
<blockquote class='tip'>
    <p>你可以为一个事件添加多个回调函数，但是它们遵循队列<span class='important'>先进先出</span>的特性，即先添加的回调事件将先执行</p>
</blockquote>  

```js
let num = 0;
eventBus.on('talkToMe', (params) => {
    num = 1
})
eventBus.on('talkToMe', (params) => {
    num = 2
})
eventBus.on('talkToMe', (params) => {
    num = 3
})
evenBus.trigger('talkToMe')
// num = 3 
```  
>当你重复注册两次相同的回调函数时，只会将第一次添加进去

```js
let num = 0;
let a = function () {
    num ++
}
eventBus.on('talkToMe', a)
eventBus.on('talkToMe', a)
eventBus.on('talkToMe', a)
evenBus.trigger('talkToMe')
// num = 1
```  

### eventBus.trigger
你可以通过`evenBus.trigger('talkToMe')`触发一个事件  
带参数的：`evenBus.trigger('talkToMe', {parmas: 1})`
### eventBus.off  
`evenBus.off`可以删除掉某一个事件的回调函数。
* 例如`evenBus.off('talkToMe')`，将会删除掉`talkToMe`的所有注册的回调函数。  

* 也可以删除某个事件下的指定回调函数：
```js
let num = 0
let a = function () {num = 1}
let b = function () {num = 2}
let c = function () {num = 3}

eventBus.on('talkToMe', a)
eventBus.on('talkToMe', b)
eventBus.on('talkToMe', c)

eventBus.trigger('talkToMe')
// num = 3 

eventBus.off('talkToMe', c)

eventBus.trigger('talkToMe')
// num = 2

eventBus.on('talkToMe', c)
eventBus.trigger('talkToMe')
// num = 3
```  