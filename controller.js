var app = require('./index');
var db = app.get('db')
module.exports = {
    getProducts: function (req, res){
        db.products(function(err, prod){
            if(err) return console.log(err, 'err on product endpoint');
            else return res.send(prod)
        })
    }
}