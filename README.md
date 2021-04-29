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

# 配置路由

按照项目经验，我想要将工程页面单独放到一个文件夹中，和app.component独立开来。

这样的好处是我可以在app.component里预加载一些方法，用于在项目启动期间一直使用。在项目进行后期，如果有需要对全部画面改动的地方，也可能可以通过只改动app.component而遍及全局。

但是如果将组件放在远离app.module的地方，就需要配置路由让它可以被找到。

需要如下步骤：

1. 新建“business”用于摆放其它页面。

<img src="pictures/new-business.png" width="200px">

# 创建页面（组件）



2. 配置路由，让angular知道该如何去往其它页面：

2. cd 到目的地文件夹，使用Angular Cli创建组件：
```
ng generate component PAGE01X01
```
