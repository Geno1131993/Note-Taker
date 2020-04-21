// console.log("From server.js");

var http = require("http");
var PORT = 8080;
var server = http.createServer(handle);
var fs = require("fs");

function handle(request, response){
    var path = request.url;
    //console.log(path);
    //response.end("Path: " + path);
    displayHome(response);


}




function displayHome(response){
    fs.readFile(__dirname + "/public/index.html", function(err, data){
        if(err) throw err;
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(data);

    });
}


server.listen(PORT, function(){
   // console.log("Server listening on: http://localhost:" + PORT);
});




