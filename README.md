# babel-lesson

# 配置babel
* babel.config.js （推荐，babel本身也是这种）
* .babelrc 文件
* .babelrc.js 与.babelrc 的配置相同，但你可以使用 JavaScript 编写。还可以调用node.js中的任何api
* package.json 中配置
* 使用 CLI (@babel/cli)


babel是一个编辑器：编译过程分为三个阶段：解析-->转换-->输出
插件就是用来转换代码

// 先执行 transform-decorators-legacy ，在执行 transform-class-properties。
{
  "plugins": ["transform-decorators-legacy", "transform-class-properties"]
}

//将按如下顺序执行：stage-2、react 然后是 
es2015。@babel/preset-env如果不进行配置，将支持最新的js特性
{
  "presets": ["es2015", "react", "stage-2"]
}

useBuiltIns // 按需require 的module

Babel 只是转换 syntax 层语法,所有需要 @babel/polyfill 来处理API兼容,又因为 polyfill 体积太大，所以通过 preset的 useBuiltIns 来实现按需加载,再接着为了满足 npm 组件开发的需要 出现了 @babel/runtime 来做隔离


Babel 默认只是转换了 箭头函数 let ,Promise 和 includes 都没有转换 ,这是为什么

Babel 把 Javascript 语法 分为 syntax 和 api

先说 api , api 指那些我们可以通过 函数重新覆盖的语法 ，类似 includes,map,includes,Promise,凡是我们能想到重写的都可以归属到 api

啥子是 syntax ,像 箭头函数，let,const,class, 依赖注入 Decorators,等等这些，我们在 Javascript 在运行是无法重写的，想象下，在不支持的浏览器里不管怎么样，你都用不了 let 这个关键字

@babel/runtime, @babel/plugin-transform-runtime 首先 执行下,这2个一个都不能少,都是必须的