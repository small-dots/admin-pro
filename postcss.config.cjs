module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['last 2 versions', '> 1%', 'ie 10'],
      grid: true
    },
    "postcss-pxtorem": {
      rootValue: 192, // 192表示1920设计稿
      propList: ["*"],
    },
  }
};
