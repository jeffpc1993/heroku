var http=require('http');
const PORT=5000;

function handleRequest(request,response){
  response.writeHead(200, {"Content-Type": "application/json",'Access-Control-Allow-Origin':'null'});
  var json=JSON.stringify({imagesize:150,correct:[2,4],gridtype:"4x4",images:["http://lorempixel.com/150/150"]});
  response.end(json);
}

var server=http.createServer(handleRequest);
server.listen(PORT,function(){console.log("listening on http://localhost:%s",PORT);});



