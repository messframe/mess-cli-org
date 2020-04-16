# 快速开始
快速构建一个前端微服务项目，只需要三步  

### 1. 创建一个项目文件夹  
你可以在任何位置创建一个文件夹来容纳你的前端应用  

### 2. 初始化一个核心服务  
在第一步创建的项目根目录中，初始化一个核心服务，执行：  
```bash
$ mess init
```  
命令行会提示你输入核心服务的名称：
![mess init](./portal/mess_init.png)
等待初始化完毕即可  
### 3. 初始化一个子应用
在第一步创建的项目根目录中，你可以初始化一个react子应用，或者一个vue子应用，执行：
```bash
$ mess add [vue|react] [projectName] from [portal]
```  
![自动注册核心服务](./subModule/from_center.png)  
你还可以在相同的根目录初始化多个子应用  
***  
最终的目录结构应该是  

![自动注册核心服务](./subModule/auto_conf.png)  

你需要为每个子应用安装依赖： `npm i`  
  
在每个应用的根目录执行`npm run dev`，并且在核心服务的公共依赖文件夹下开启http服务，建议使用`http-serve`  
```bash
$ npm i http-server -g
```
在核心服务下，找到`common-deps-static`,在`common-deps-static`中执行：
```bash
$ hs -p 8200 --cors
```  
等所有应用都启动起来了后，打开`http://localhost:8233`即可  
按照上述步骤执行的话，你打开页面应该是一个空页面，你可以尝试访问某一个应用的页面，比如应用A：`http://localhost:8233/#/A`，更多详情可参照<a href='/#/route'>路由模块</a>