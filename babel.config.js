module.exports = function (api) {
  api.cache(true);

  const presets = [
    ['@babel/preset-env',
      {
        debug: true,
        useBuiltIns: "false", // false 啥都不做 entry 导入全部的require usage按需要加载
        corejs: 3,
        targets: {
          browsers: ["> 1%", "last 2 versions", "not ie <= 8"]
        }
      }
    ],
  ];
  const plugins = [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3
      }
    ]
  ];
  const ignore = [ // 忽略文件
    'src/a.js'
  ]

  return {
    presets,
    plugins,
    ignore,
    comments: false, // 删除注释
    minified: true, // 压缩
    include: [], // 总是启用哪些 plugins
    exclude: []  // 强制不启用哪些 plugins，用来防止某些插件被启用
  };
}