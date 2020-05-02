// console.log("From server.js");

// var http = require("http");
 var PORT = 8080;
// //var server = http.createServer(handle);
// var fs = require("fs");
var express = require("express");
var path = require("path");


var app = express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.get("/", function(req, response){
    response.sendFile(path.join(__dirname, "/public/index.html"));
});


app.get("/notes", function (req, response){
    response.sendFile(path.join(__dirname, "/public/notes.html"));
});


app.listen(PORT, function(){
    console.log("Listening on PORT: http://" + PORT);
});