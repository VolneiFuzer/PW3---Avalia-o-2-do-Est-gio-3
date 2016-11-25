var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var urlEncodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static("static"));
var trabalhos = [];

app.get("/index.html", function(req, res){
    res.sendFile( __dirname + "/static/" + "Trabalho.html" );
});

app.post("/cadastrarTrabalho", urlEncodedParser, function(req, res){
        
    response = {
        inputEmpresa: validaEmpresa(req.body.inputEmpresa),
        inputLogradouro: validaLogradouro(req.body.inputLogradouro),
        inputNumero: req.body.inputNumero,
        inputComplemento: req.body.inputComplemento,
        inputBairro: validaBairro(req.body.inputBairro),
        inputCEP: validaCEP(req.body.inputCEP),
        inputCidade: validaCidade(req.body.inputCidade),
        inputTelFixo: validaTelFixo(req.body.inputTelFixo),
        inputRamal: validaRamal(req.body.inputRamal),
        inputSetor: req.body.inputSetor
    };
    
    trabalhos.push(response);
    console.log(response);
    res.end(JSON.stringify(response));
});

function validaEmpresa(campo){
    var campoValidar = campo.trim();
    if(campoValidar == ""){
        return "Erro: O campo 'Empresa' deve ser preenchido!'"
    } else {
        return  campo;
    }
};

function validaLogradouro(campo){
    var campoValidar = campo.trim();
    if(campoValidar == ""){
        return "Erro: O campo 'Logradouro' deve ser preenchido!'"
    } else {
        return  campo;
    }    
};

function validaBairro(campo){
    var campoValidar = campo.trim();
    if(campoValidar == ""){
        return "Erro: O campo 'Bairro' deve ser preenchido!'"
    } else {
        return  campo;
    }  
};

function validaCEP(campo){
    var campoValidar = campo.trim();
    if(campoValidar == ""){
        return "Erro: O campo 'CEP' deve ser preenchido!";
    } else if(isNaN(campoValidar)){
        return "Erro: O campo 'CEP' deve ter somente numeros!";
    } else if (campoValidar.length != 8){
        return "Erro: O campo 'CEP' deve ter 8 dígitos!";
    } else {
        return campo;
    }
};

function validaCidade(campo){
    var campoValidar = campo.trim();
    if(campoValidar == ""){
        return "Erro: O campo 'Cidade' deve ser preenchido!'"
    } else {
        return  campo;
    }
};

function validaTelFixo(campo){
    var campoValidar = campo.trim();
    if(campoValidar == ""){
        return "Erro: O campo 'Telefone fixo' deve ser preenchido!";
    } else if(isNaN(campoValidar)){
        return "Erro: O campo 'Telefone fixo' deve ter somente numeros!";
    } else if (campoValidar.length != 10){
        return "Erro: O campo 'Telefone fixo' deve ter 10 dígitos!";
    } else {
        return campo;
    }    
};

function validaRamal(campo){
    var campoValidar = campo.trim();
    if(campoValidar == ""){
        return "Erro: O campo 'Ramal' deve ser preenchido!";
    } else if(isNaN(campoValidar)){
        return "Erro: O campo 'Ramal' deve ter somente numeros!";
    } else if (campoValidar.length != 10){
        return "Erro: O campo 'Ramal' deve ter 10 dígitos!";
    } else {
        return campo;
    }        
};

var server = app.listen(8081, function (){
    console.log("Server running at http://127.0.0.1:8081/");
});