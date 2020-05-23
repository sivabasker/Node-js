var express = require('express');
var mongoClient = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017'

mongoClient.connect(url, function(err, client){
    if(!err){
        console.log('Database created successfully');
    }
    var db = client.db('TestDB');
    var user = db.collection('User').find();
    user.each(function(err, data){
        console.log(data);
    });
    //client.close();
});


var app = express();
app.get('/',function(req,res){
  res.send('Hello World');
});

app.listen(8000,function(res){
    console.log('Application started...');
})