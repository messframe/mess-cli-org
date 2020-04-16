## 注册一个子模块

### 自动注册
***
当你在核心服务项目所在的根目录执行：`mess add [vue|react] projectName from portalName`  
<blockquote class='tip'>
    <p>例如核心服务所在文件夹名称叫center，当你在center同级目录执行<code class='tipCode'>mess add vue cA from center</code>时，脚手架将会为你自动注册子模块cA</p>
</blockquote>


### 手动注册--config.js
***
你只需要在`核心服务/mess.config.js`中，修改配置文件中的`components`属性即可。
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
* `components`中的`cA`是指这个模块的名称，这个与页面的路由存在绑定关系
* `moduleName`指子模块定义的模块名，核心服务通过`SystemJS`和`moduleName`将子模块引用进来
* `origin`指子模块运行的地址，这里仅对`development模式`有效
* `entry`指子模块的入口文件相对`origin`路径，请确保由`origin`和`entry`可以访问到子模块的入口文件
* `prodOrigin`指子模块打包后(`production`)的访问地址，适用于子模块打包后需要单独运行，可能是引入的子模块能够被多个项目复用的场景，这里同样也要确保`prodOrigin`和`entry`可以访问到子模块的入口文件