var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("index");
})

var server = app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server listening on address: " + server.address().address);
    console.log("and port: " + server.address().port);
})