var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var urlEncodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static("static"));
var trabalhos = [];

app.get("/index.html", function(req, res){
    res.sendFile( __dirname + "/static/" + "Trabalho.html" );
});

//ajustar para receber os dados do formulário "Trabalho.html"
app.post("/cadastrarTrabalho", urlEncodedParser, function(req, res){
    response = {
        inputEmpresa: req.body.inputEmpresa,
        inputLogradouro: req.body.inputLogradouro,
        inputNumero: req.body.inputNumero,
        inputComplemento: req.body.inputComplemento,
        inputBairro: req.body.inputBairro,
        inputCEP: req.body.inputCEP,
        inputCidade: req.body.inputCidade,
        inputTelFixo: req.body.inputTelFixo,
        inputRamal: req.body.inputRamal,
        inputSetor: req.body.inputSetor
    };
    
    trabalhos.push(response);
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8081, function (){
    console.log("Server running at http://127.0.0.1:8081/");
});