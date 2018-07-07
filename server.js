var http = require("http");
var fs = require("fs");

function onRequest(request, response){

    response.writeHead(200,{'Content-Type':'text/html'} );
    fs.readFile("./index.html", null, function(err,data){ // null options.
        if(err){
            response.writeHead(404);
            response.write("File not found.");
        } else {
            response.write(data); // The .write method lets you pass html files.
        }
        response.end(); // End the response. Returns the response to the http.createServer function below.

    });
}

http.createServer(onRequest).listen(3000, () => {
      console.log("Listening on port 3000.");
});
