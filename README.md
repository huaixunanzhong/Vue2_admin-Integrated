# Vue管理系统的模板

## 简介
基于[arco-design-pro-vue](https://vue-pro.arco.design/login)开发，包含动态路由+权限管理解决用户权限问题，提供基础固定权限：admin、test、editor和自定义用户权限，可自定义修改角色对应的菜单,可定义用户多角色，布局方面提供左右布局和上下布局两种，可自由切换；系统内置了混合主题、浅色主题，深色主题，可随意切换；
还有一些后台管理系统常用的功能如表单，table表等；

## 测试账号
```
dawei/dawei
```

## 前序准备
* 该项目采用[vue](https://github.com/vuejs/vue)+[vue-cli4](https://github.com/vuejs/vue-cli)+[vuex](https://github.com/vuejs/vuex)+[arco-design-pro-vue](https://vue-pro.arco.design/login)和[axios](https://github.com/axios/axios)开发，数据采用[mock.js](https://github.com/nuysoft/Mock)进行模拟
* 系统内置了echarts常用的图表展示和arcgis地图；
* 格式化方面采用 [ESlint](https://github.com/eslint/eslint)+[prettier](https://github.com/prettier/prettier)。


## 功能

```
- 登录  用户名密码/手机号验证码
- 权限  
- 动态路由
- echarts各种图表
- arcgis地图
- 克里金插值分析图
- 全景图
- 富文本
- Markdown
- 错误页面 403 404 500
- 个人设置
- 系统设置
- 更换主题
- 两种布局方式
- 面包屑
- 标签页
- webSocket 
- svg图标
- 全屏
- 返回顶部
- webpack优化
- 抽奖页
- table表
- form表单
- 上传Excel
- 上传头像和裁剪
- htmlcanvas2截屏
- 封装自定义loading
```

## webpack优化
```
- 关闭生产环境sourceMap;
- 关闭预加载(vue会预加载后面的页面，会导致首屏加载比较慢)
- g-zip压缩(需要nginx配置);
- 生产环境CDN加载部分插件
- 去除生产环境console和debugger;
- 公共代码抽离
- 打包大小分析
- 打包缓存
- 部分依赖使用异步cdn加载

```

### 文件目录说明
```

├── mock                             ---mock模拟数据
├── public                           ---静态资源文件
├── src          
│  ├── api                           ---接口     
│  ├── assets                        ---图片
│  ├── components                    ---可复用的vue组件
│  ├── layouts                       ---布局方式
│  ├── router                        ---路由
│  ├── store                         ---vuex
│  ├── styles                        ---less样式
│  ├── utils                         ---方法函数
│  ├── vendor                        ---导出excel
│  ├── views                         ---页面
│  ├── App.vue                       
│  ├── main.js            
│  ├── permission.js                 ---路由拦截           
├── .browserslistrc
├── .env
├── .eslintrc.js
├──  babel.config.js
├──  package.json
├──  package-lock.json
├──  README.md
└──  vue.config.js                   ---webpack的配置


```

## 最后
参考了 [arco-design-pro-vue](https://vue-pro.arco.design/login)






