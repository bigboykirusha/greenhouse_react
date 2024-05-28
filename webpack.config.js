const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
   plugins: [
      new CompressionPlugin({
         filename: '[path][base].gz',
         algorithm: 'gzip',
         test: /\.(js|css|html|svg|png|webp)$/,
         threshold: 10240,
         minRatio: 0.8,
      }),
   ],
};