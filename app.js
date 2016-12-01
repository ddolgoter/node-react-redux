var express = require('express');
var app = express();

app.set('views', './client');
// a trick to make express work with regular .html files
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('./client/public'));

app.get('/', function (req, res) {
  res.render('index', {title: 'Hello world!'});
  console.log('Index route');
})

app.listen(3000, function () {
  console.log('Listening on port 3000');
})