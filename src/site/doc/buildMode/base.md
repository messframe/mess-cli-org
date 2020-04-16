## 打包
每个由`mess-cli`生成的项目下面，都有`npm run build`命令与其相关的webpack配置文件，可根据自身需求进行修改  
  

* 核心服务打包后的文件在核心服务根目录下的`build`文件夹下
* 通过`mess add [vue|react] projectName from portalName`命令生成的子模块，打包后的文件所在目录是核心服务项目下的`build`文件夹下，有它自身的模块名称。
* 通过`mess add [vue|react] projectName`命令生成的子模块，打包后的文件在子模块根目录的`build`文件夹下

<blockquote class='tip'>
    <p>更多有关打包详情，请参考对应的打包配置文件。</p>
    <p>在不依赖核心服务的子模块，打包后，需要确认核心服务的子模块是否正确注册，否则无法引入子模块。更多详情参见<a href='/#/registerSubModule'>注册一个子模块</a></p>
</blockquote>