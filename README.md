# Angular

Angular由组件构成，一个组件包含：
1. 一个HTML模版
2. 一个Typescript类
3. 一个CSS样式（可选）

# Angular Cli

创建组件需要Angular Cli（脚手架）。
安装Angular Cli：
```
npm install -g @angular/cli
```

查看Angular Cli版本：
```
ng version
```

# 初始化项目

自动生成一个完整的Angular App。
```
ng new my-app
```

这里我用了
```
ng new angular-practice
```
来生成了我的App。
那么最后得到的项目长这个样子：

<img src="pictures/init-project.png" width="200px">

# 创建页面

按照现代工程经验，推荐在src文件夹里放置其余页面。

1. 新建“business”用于摆放其它页面。

2. 