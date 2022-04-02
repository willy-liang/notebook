## 搭建博客

> - 全局安装vuepress：`cnpm install -g vuepress`
> - 启动vuepress服务：`vuepress dev .`
> - 配置需要在文档目录下创建一个`.vuepress`目录，所有vuepress相关的文件都将会放在该目录下
> - 其中网站的所有文件的配置都在`.vuepress/config.js`这个文件里面，该文件要导出一个JavaScript对象
>
> ```js
> module.exports = {
>   title: "个人文档",
>   description: "willysliang",
> }
> ```
>
> 