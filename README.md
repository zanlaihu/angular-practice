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

## 使用脚手架创建新项目

使用ng指令创建Angular项目。
```
ng new my-app
```

这里，我使用如下指令
```
ng new angular-practice
```
生成的项目会有如下结构：

<img src="pictures/init-project.png" width="200px">

src目录下会生成一个app组件：

<img src="pictures/app-component.png" width="200px">

1. app-routing.module.ts 路由
2. app.component.css 样式
3. app.component.html 模版
4. app.component.spec.ts 单元测试文件
5. app.component.ts 组件文件
6. app.module.ts 配置文件



使用ng指令启动项目：
```
ng serve
```
映入眼帘的第一个画面就是app.component.html

## 新建工程目录

根据过往项目经验，我习惯新建一个business文件夹，用于存放工程的其它组件。这样子不但可以和app组件分隔开，而且目录上也更加清晰。

1. 新建“business”用于摆放其它页面。

<img src="pictures/new-business.png" width="200px">

# Angular路由器

Angular是一个单页面应用，通过显示或隐藏特定组件的显示部分来改变用户能看到的内容。这个项目里，这个单一画面是angular-practice/src/index.html。

所以，画面之间的跳转，实质上是index页面内组件的替换。

为了处理从一个画面到另一个画面的导航，需要使用Angular的Router（路由器）。路由器会把浏览器URL解释成改变视图的操作指南，以完成导航。

这样子，我在business目录下放置的组件才可以被正确地找到。

## 配置路由

这里有一个tricky的地方。



这样的好处是我可以在app.component里预加载一些方法，用于在项目启动期间一直使用。在项目进行后期，如果有需要对全部画面改动的地方，也可能可以通过只改动app.component而遍及全局。

但是如果将组件放在远离app.module的地方，就需要配置路由让它可以被找到。

需要如下步骤：



# 创建页面（组件）


2. cd 到目的地文件夹，使用Angular Cli创建组件：
```
ng generate component PAGE01X01
```
