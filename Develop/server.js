
// var http = require("http");
 var PORT = 3000;
// //var server = http.createServer(handle);
var fs = require("fs");
var express = require("express");
var path = require("path");


var app = express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.get("/", function(req, response){

    return response.sendFile(path.join(__dirname, "/public/index.html"));
});


app.get("/notes", function (req, response){

    return response.sendFile(path.join(__dirname, "/public/notes.html"));
});


app.get("*", function (req, response){
    return response.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, function(){
    console.log("Listening on PORT: localhost:" + PORT);
});



//Where is it printing out?

app.get("/api/notes", function(req, response){
    console.log("From get api/notes");
    console.log(read("/db/db.json"));
    return response.sendFile(path.join(__dirname, "public.notes.html"));
});



function read(filename){
    fs.readFile(filename, function(err, text){
        console.log(`From read: \n${text}`);
        return text;
    });
}