function cadastraTrabalho(event){
    event.preventDefault();
    var request = new XMLHttpRequest();
 
    request.onreadystatechange = function(){
        if (request.readyState == 4){
            if (request.status == 200){
                var trabalho = JSON.parse(request.responseText);
                console.log(trabalho);
                var listaTrabalhos = document.getElementById("listaTrabalhos");
                var itemtrabalho = document.createElement("li");
                itemtrabalho.innerHTML = "Empresa: " + trabalho.inputEmpresa + " Logradouro: " + trabalho.inputLogradouro;
                listaTrabalhos.appendChild(itemtrabalho);                 
            }   
        }
    };

    request.open("post", "cadastrarTrabalho" , true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var input_empresa = document.getElementById("inputEmpresa");
    var input_logradouro = document.getElementById("inputLogradouro");
    request.send("inputEmpresa=" + input_empresa.value + "&inputLogradouro=" + input_logradouro.value);
};