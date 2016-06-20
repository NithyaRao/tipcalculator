const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function() {
  console.log('server is listening');
});
// app.METHOD is the HTTP Verb. The only part we are matching on is the path.
app.get('/tipcalc', function(request, response){
  //rgba(34,26,78,0.3)

  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let a = Math.random();

const color = `rgba(${r},${g},${b},${a})`;
console.log('color', color);


  response.render('tipcalc', {color});
});

app.post('/tipcalc', function(request, response){
  console.log('body is', request.body)
let tipamt = 0;
tipamt = Number(request.body.amt) * (parseInt(request.body.percent)/100)

  response.render('tipcalc', {tipamt});
});
