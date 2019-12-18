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