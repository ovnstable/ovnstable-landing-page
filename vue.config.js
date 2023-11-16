module.exports = {
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks');
  },

  configureWebpack: {
    devServer: {
      watchOptions: {
        ignored: [/node_modules/, /public/],
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
      },
    },
  },
};
