# antd-vue

地址：[Ant Design of Vue](https://vue.ant.design/docs/vue/introduce-cn/)

## 安装 ##

    npm install ant-design-vue --save
    
**按需加载**

- 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)（推荐）。

```json
// .babelrc or babel-loader option
// css选项可以设置为less
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "ant-design-vue",
        "libraryDirectory": "es",
        "style": "css"       
      }
    ]
  ]
}
```

## 在`vue-cli 3`中使用 ##

    yarn add ant-design-vue
    
    yarn add --dev babel-plugin-import
    
    