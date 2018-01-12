var express = require("express");
var bodyParser = require("body-parser");
var util = require("util");
var path = require("path");

var app = express();

var area = require("./module/area");

app.set("view options", {layout: false});
app.use(express.static(__dirname + "/pages"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 5000;

app.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    //Enabling CORS
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE');
        return res.status(200).json({});
    }
    // make sure we go to the next routes
    next();
});

app.get('/getArea', function(req, res){
    
    res.setHeader('Content-Type', 'application/json');
    
    
    var side1 = parseInt(req.query.side1);
    var side2 = parseInt(req.query.side2);
    
    console.log(side1);
    console.log(side2);
    
    var input = [side1, side2];
    
    
    var result = area(input);
    
    console.log(result);
    
    if(result == -1){
         res.statusCode = 400;   
    }
    else{
        res.statusCode = 200;
    }
    
    var resJson = {area: result};
    
    console.log(resJson);
    
    res.json(resJson);
    res.end(); 
});

app.get('/getArea?side1=?&side2=?', function(req, res){
    
    res.setHeader('Content-Type', 'application/json');
    

    var side1 = parseInt(req.query.side1);
    var side2 = parseInt(req.query.side2);
    
    
    console.log(side1);
    console.log(side2);
    
    var input = [side1, side2];
    
    var result = area(input);
    
    console.log(result);
    
    if(result == -1){
         res.statusCode = 400;   
    }
    else{
        res.statusCode = 200;
    }
    
    var resJson = {area: result};
    
    console.log(resJson);
    
    res.json(resJson);
    res.end(); 
});

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: { message: err.message } });
});



app.listen(port);
console.log('Magic happens on port ' + port);


module.exports = app;