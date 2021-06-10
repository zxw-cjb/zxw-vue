// const px2rem = require('postcss-px2rem');
// const postcss = require('postcss');
// const utils = require('./utils')
// const config = require('../config')

// module.exports = {
//     loaders: utils.cssLoaders({
//         sourceMap: sourceMapEnabled,
//         extract: isProduction,
        
//         /*允许使用usePostCSS*/
//         usePostCSS:true,
        
//       }),
//       cssSourceMap: sourceMapEnabled,
//       cacheBusting: config.dev.cacheBusting,
//       transformToRequire: {
//         video: ['src', 'poster'],
//         source: 'src',
//         img: 'src',
//         image: 'xlink:href'
//       },
      
//       /*配置remUnit*/
//       postcss: function() {
//         return [px2rem({remUnit: 37.5})];
//       }
//   }
