module.exports = function (api) {
  api.cache(true);

  const presets = [
    ['@babel/preset-env',
      {
        useBuiltIns: "usage",
      }
    ]
  ];
  const plugins = [
    // '@babel/plugin-transform-arrow-functions'
  ];
  const ignore = [ // 忽略文件
    'src/a.js'
  ]
  // const copyFiles = [
  //   'src/b.js'
  // ]

  return {
    presets,
    plugins,
    ignore,
    // copyFiles,
  };
}