const http = require('http');
const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootpassword',
    database: 'e_commerce'
});
connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

var express = require('express');
var app = express();

    app.get('/listUsers', function (req, res)
        //{    if(req.url="/selectproductlist")
        {
        connection.query('SELECT * FROM e_commerce.product', (err,rows) => {
        if(err) throw err;
        console.log(rows);
        res.send(rows);
        
     }) });
     app.get('/updateuser', function (req, res)
     //{    if(req.url="/selectproductlist")
     {
     connection.query('UPDATE e_commerce.product SET price = ? Where product_id = ?',
     [60000, 101],
     (err, result) => {
       if (err) throw err;
       res.send(result);
     
  }) });

  app.get('/insertuser', function (req, res)
  //{    if(req.url="/selectproductlist")
  {
  connection.query("INSERT INTO e_commerce.product (product_id,product_name,description,color,price,seller,seller_address) values (104, 'HP laptop', '11 inch','white',45500,'arpitha','shimoga');",
  (err, result) => {
    if (err) throw err;
    res.send(result);
  
}) });

app.get('/deleteuser', function (req, res)
     //{    if(req.url="/selectproductlist")
     {
     connection.query('DELETE FROM e_commerce.product where product_id = ?', [103],
     (err, result) => {
       if (err) throw err;
       res.send(result);
     
  }) });

     var server = app.listen(8081, function () {
        var host = server.address().address
        var port = server.address().port
        console.log("Example app listening at http://%s:%s", host, port)
     })
    