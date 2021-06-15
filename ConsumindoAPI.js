function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criarLinha(usuario) {
    document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdEmail = document.createElement("td");
    tdId.innerHTML = usuario.tdId
    tdNome.innerHTML = usuario.name
    tdEmail.innerHTML = usuario.tdEmail

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdEmail);
    return linha;
}

function geral() {
   let data = fazGet("http://localhost:5000/usuarios");
   let usuarios = JSON.parse(data);
   let tabela = document.getElementById("tabela")
   usuarios.forEach(element => {
       let linha = criaLinha(element);
       tabela.appendChild(linha);
   });
}

geral()
