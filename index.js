var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
const config = require('./config.js')

var connectionString = config.connectionString;

var db = massive.connectSync({connectionString : connectionString})

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./public'));

app.set('db', db);

db.set_schema(function(err, data){
  if(err) console.log(err);
  else console.log('All tables successfull reset')
})

var controller = require('./controller.js')

app.get('/products', controller.getProducts)
app.get('/product/:id', controller.showProd)
var port = '3080'
app.listen(port, function(){
  console.log("Successfully listening on : " + port)	
})