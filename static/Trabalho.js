function cadastraTrabalho(event){
    event.preventDefault();
    var request = new XMLHttpRequest();
 
    request.onreadystatechange = function(){
        if (request.readyState == 4){
            if (request.status == 200){
                var trabalho = JSON.parse(request.responseText);
                console.log(trabalho);
                var listaTrabalhos = document.getElementById("listaTrabalhos");
                
                //criar variável com if onde vai verificar se o que retornou do servidor esta igual ao enviado,
                // caso contrário vai jogar o erro por appendChild no input em questão

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