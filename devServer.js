var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var favicon = require('serve-favicon');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(favicon(__dirname + '/favicon.ico'));

app.use('/static', express.static('static'));
app.use('/libs', express.static('libs'));

app.use('/CodeAcross', function(req, res) {
  res.sendFile(path.join(__dirname, 'CodeAcross/index.html'));
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '404.html'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
