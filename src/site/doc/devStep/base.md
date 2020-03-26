## 构建步骤
一个由`mess-cli`生成的前端微服务项目，需要一个`核心服务`来管理各个`子模块`，否则最终没有入口将各个子模块整合起来。  
![核心服务](./center.png)

1. 首先创建一个核心服务：`mess init`
2. 根据业务需要，创建`react、vue`项目，并将子模块<span class="important">手动注册</span>或<span class="important">自动注册</span>进核心服务