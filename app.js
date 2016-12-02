var express = require('express')
var app = express();

app.set('views', './client')
// a trick to make express work with regular .html files
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use(express.static('./client/public'))

var quizRoutes = require('./routes/quizzes')

app.get('/', function (req, res) {
  res.render('index', {})
})

app.get('/getQuiz', quizRoutes.getQuiz)

app.listen(3000, function () {
  console.log('Listening on port 3000');
})