function cadastraTrabalho(event){
    event.preventDefault();
    var request = new XMLHttpRequest();
 
    request.onreadystatechange = function(){
        if (request.readyState == 4){
            if (request.status == 200){
                var pessoa = JSON.parse(request.responseText);
                console.log(pessoa);
                var listaPessoas = document.getElementById("listaPessoas");
                var itemPessoa = document.createElement("li");
                itemPessoa.innerHTML = "Nome: " + pessoa.first_name + " Sobrenome: " + pessoa.last_name;
                listaPessoas.appendChild(itemPessoa);                 
            }   
        }
    };

    request.open("post", "cadastrarPessoa" , true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var firstNameInput = document.getElementById("first_name");
    var lastNameInput = document.getElementById("last_name");
    request.send("first_name=" + firstNameInput.value + "&last_name=" + lastNameInput.value);
};