module.exports = {
  entry: {
    web: __dirname + '/dist/App.js',
  },
  output: {
    path: __dirname + '/bundle',
    name: 'index.js',
  },
  options: {
    env: {
      "coreJs": 3
    }
  }
}
