# jQuery, Backbone, Vue

[@meathill](//weibo.com/meathill/)

--------

### 关于作者

--------

![Meathill](http://qiniu.meathill.com/wp-content/uploads/2016/07/20160607_005422423_iOS-825x510.jpg | height=400)

全栈工程师，编程爱好者

[博客](http://blog.meathill.com/)

--------

## jQuery
## Backbone
## Vue

--------

前端技术发展迅速，也伴随很多纷争。了解一门技术的起源、目的、结果，有助于我们更好的理解和应用它，有助于我们更好的规划学习路径。

--------

## jQuery

--------

### jQuery 的优势

1. 统一 DOM 和 Ajax API
2. 创造很多高效用法
3. 提供事件代理机制
4. 提供简单又强壮的插件机制
5. 语法容错性更好

--------

## 使用 jQuery 开发

--------

### jQuery 的问题

只关注 DOM 操作，对上规模的产品很无力。

1. 应该提交哪些数据给服务器？
2. 有数据，怎么还原出操作结果？
3. 修改了 A 组件，B 组件要同步体现变化，怎么处理？

--------

## Backbone

[官网](http://backbonejs.org/)

--------

### Backbone 是什么？

1. MVP 框架
    1. View 视图 渲染，相应用户操作
    2. Collection/Model 数据模型 组织数据，和服务器交互
    3. Router 路由 在大型单页应用中提供全局定位
2. 将业务抽象成数据操作
3. 视图响应数据变化

--------

### Backbone 是这么做的

--------

### Model 和 View 交互

![Models and Views](http://backbonejs.org/docs/images/intro-model-view.svg | height=160)

1. 用户操作视图
2. 视图将用户操作的结果，以数据方式传给模型
3. 模型向服务器同步数据
4. 模型广播 `change` 事件
5. 视图侦听到 `change` 时间，刷新

--------

### Collection 和 Model 的关系

![Collection](http://backbonejs.org/docs/images/intro-collections.svg | height=320)

1. Model 是一个对象，比如“一名员工”
2. Collection 是相同对象组成的集合，比如“全部员工”
3. Collection 会代理 Model 的事件

--------

### 视图同步

![View Rendering](http://backbonejs.org/docs/images/intro-views.svg | height=240)

1. 用户操作 A 视图
2. A 试图讲数据发送给模型
3. 模型修改，同步，并广播事件
4. 所有侦听该模型的视图均得到更新

--------

## Backbone 的优势

1. 各组件独立，耦合很低
2. 开发维护成本得以大大降低
3. 侵入性很低，可以很容易配合其它类库及框架

--------

## 使用 Backbone 开发

--------

### Backbone 的问题

* 没有数据双向绑定
* 只能全量更新
* 需要花费大量时间绑定事件

--------

## Vue

[官网](//cn.vuejs.org/)

--------

### Vue 的优势

1. MVVM 框架，数据双向绑定
2. 丰富的模板语言，易读好写
3. 组件系统开发大规模应用更有优势

--------

## 使用 Vue 开发

--------

## 总结

1. 语言在发展，学习是必须的
2. 项目的体量决定了不同技术选型之间的效率差别
3. Vue 是个好东西，推荐给大家

--------

## Q&A