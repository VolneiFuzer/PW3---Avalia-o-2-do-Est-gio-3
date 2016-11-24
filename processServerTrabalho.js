var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var urlEncodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static("static"));
var pessoas = [];

app.get("/index.html", function(req, res){
    res.sendFile( __dirname + "/static/" + "Trabalho.html" );
});

//ajustar para receber os dados do formulário "Trabalho.html"
app.post("/cadastrarTrabalho", urlEncodedParser, function(req, res){
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };

    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8081, function (){
    console.log("Server running at http://127.0.0.1:8081/");
});