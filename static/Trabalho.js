function cadastraTrabalho(event){
    event.preventDefault();
    var request = new XMLHttpRequest();
    var formValidado = true;
 
    request.onreadystatechange = function(){
        if (request.readyState == 4){
            if (request.status == 200){
                var trabalho = JSON.parse(request.responseText);
                console.log(trabalho);
                
                if (trabalho.inputEmpresa != input_empresa.value){
                    formValidado = false;
                    document.getElementById("erroInputEmpresa").style.color = "#ff0000";
                    document.getElementById("erroInputEmpresa").innerHTML = trabalho.inputEmpresa;
                } else{
                    document.getElementById("erroInputEmpresa").innerHTML = "";
                }

                if (trabalho.inputLogradouro != input_logradouro.value){
                    formValidado = false;
                    document.getElementById("erroInputLogradouro").style.color = "#ff0000";
                    document.getElementById("erroInputLogradouro").innerHTML = trabalho.inputLogradouro;
                } else{
                    document.getElementById("erroInputLogradouro").innerHTML = "";
                }

                if (trabalho.inputBairro != input_bairro.value){
                    formValidado = false;
                    document.getElementById("erroInputBairro").style.color = "#ff0000";
                    document.getElementById("erroInputBairro").innerHTML = trabalho.inputBairro;
                } else{
                    document.getElementById("erroInputBairro").innerHTML = "";
                }

                if (trabalho.inputCEP != input_cep.value){
                    formValidado = false;
                    document.getElementById("erroInputCEP").style.color = "#ff0000";
                    document.getElementById("erroInputCEP").innerHTML = trabalho.inputCEP;
                } else{
                    document.getElementById("erroInputCEP").innerHTML = "";
                }

                if (trabalho.inputCidade != input_cidade.value){
                    formValidado = false;
                    document.getElementById("erroInputCidade").style.color = "#ff0000";
                    document.getElementById("erroInputCidade").innerHTML = trabalho.inputCidade;
                } else{
                    document.getElementById("erroInputCidade").innerHTML = "";
                }

                if (trabalho.inputTelFixo != input_telfixo.value){
                    formValidado = false;
                    document.getElementById("erroInputTelFixo").style.color = "#ff0000";
                    document.getElementById("erroInputTelFixo").innerHTML = trabalho.inputTelFixo;
                } else{
                    document.getElementById("erroInputTelFixo").innerHTML = "";
                }

                if (trabalho.inputRamal != input_ramal.value){
                    formValidado = false;
                    document.getElementById("erroInputRamal").style.color = "#ff0000";
                    document.getElementById("erroInputRamal").innerHTML = trabalho.inputRamal;
                } else{
                    document.getElementById("erroInputRamal").innerHTML = "";
                }                

                if (formValidado){
                    var listaTrabalhos = document.getElementById("listaTrabalhos");
                    listaTrabalhos.innerHTML =
                        "<h1>" + "Dados cadastrados" + "</h1>" +
                        "<ul>" +
                            "<li>" + "Empresa: " + trabalho.inputEmpresa + "</li>" +
                            "<li>" + "Logradouro: " + trabalho.inputLogradouro + "</li>" +
                            "<li>" + "Numero: " + trabalho.inputNumero + "</li>" +
                            "<li>" + "Complemento: " + trabalho.inputComplemento + "</li>" +
                            "<li>" + "Bairro: " + trabalho.inputBairro + "</li>" +
                            "<li>" + "CEP: " + trabalho.inputCEP + "</li>" +
                            "<li>" + "Cidade: " + trabalho.inputCidade + "</li>" +
                            "<li>" + "Telefone fixo: " + trabalho.inputTelFixo + "</li>" +
                            "<li>" + "Ramal: " + trabalho.inputRamal + "</li>" +
                            "<li>" + "Setor: " + trabalho.inputSetor + "</li>" +
                        "</ul>";
                    listaTrabalhos.appendChild(itemtrabalho);
                }                 
            }   
        }
    };

    request.open("post", "cadastrarTrabalho" , true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    var input_empresa = document.getElementById("inputEmpresa");
    var input_logradouro = document.getElementById("inputLogradouro");
    var input_numero = document.getElementById("inputNumero");
    var input_complemento = document.getElementById("inputComplemento");
    var input_bairro = document.getElementById("inputBairro");
    var input_cep = document.getElementById("inputCEP");
    var input_cidade = document.getElementById("inputCidade");
    var input_telfixo = document.getElementById("inputTelFixo");
    var input_ramal = document.getElementById("inputRamal");
    var input_setor = document.getElementById("inputSetor");

    request.send(
        "inputEmpresa=" + input_empresa.value + 
        "&inputLogradouro=" + input_logradouro.value +
        "&inputNumero=" + input_numero.value +
        "&inputComplemento=" + input_complemento.value +
        "&inputBairro=" + input_bairro.value +
        "&inputCEP=" + input_cep.value +
        "&inputCidade=" + input_cidade.value +
        "&inputTelFixo=" + input_telfixo.value +
        "&inputRamal=" + input_ramal.value +
        "&inputSetor=" + input_setor.value
        );
};