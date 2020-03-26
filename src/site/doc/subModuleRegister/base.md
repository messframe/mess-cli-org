## 注册一个子模块

### 自动注册
***
当你在核心服务项目所在的根目录执行：`mess add [vue|react] projectName from portalName`  
<blockquote class='tip'>
    <p>例如核心服务所在文件夹名称叫center，当你在center同级目录执行<code class='tipCode'>mess add vue cA from center</code>时，脚手架将会为你自动注册子模块cA</p>
</blockquote>


### 手动注册--config.js
***
首先你需要在`核心服务/config.js`中，修改配置文件。
```js
// config.js
module.exports = {
    ...
    "components": {
        "center": {
            "moduleName": "@center/config",
            "origin": "http://localhost:8233",
            "entry": "/config.js"
        },
        "cA": {
            "moduleName": "@center/cA",
            "origin": "http://localhost:8236",
            "prodOrigin": "http://localhost:8244",
            "entry": "/cA.js"
        }
    }
    ...
}
```  
配置文件中的`center`是`mess init`时创建核心服务的名称，<span class='important'>center的配置建议不要修改</span>，上述代码中，可以看到还有一个`cA`模块被注册。  
* `components`中的`cA`是指这个模块的名称
* `moduleName`指子模块导出的模块名，核心服务通过这个名称将子模块引用进来
* `origin`指子模块运行的地址，这里仅对`development模式`有效
* `entry`指子模块的入口文件相对`origin`路径，请确保由`origin`和`entry`可以访问到子模块的入口文件
* `prodOrigin(可选)`指子模块打包后(`production`)的访问地址，适用于子模块打包后需要单独运行，可能是引入的子模块能够被多个项目复用的场景，这里同样也要确保`prodOrigin`和`entry`可以访问到子模块的入口文件
### 确认子模块导出名称
子模块导出模块名在`子模块/src/set-public-path.js`中进行设置，往往它有一个默认值，但是这个默认值通常不那么有用，你需要手动去修改它，让它跟你在核心服务配置文件注册的模块名是一致的

```js
// set-public-path.js
...
function getUrl () {
  return window.System.resolve('@center/cA')
}
...
```