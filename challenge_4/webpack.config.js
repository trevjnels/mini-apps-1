module.exports = {
  entry: __dirname + '/client/components/app.jsx',
  module : {
    rules : [
      {
        test: [/\.jsx$/],
        exclued: /node_modules/,
        use : {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  output:{
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }


}