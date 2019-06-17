var app = require("../server/server");

var port = 8005;  //localhost
 app.listen( port , function(){
     console.log("server running at port " ,  port);
 });

 