function cadastrar(url, body){

    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}

function deletar(url){
    let request = new XMLHttpRequest()
    request.open("DELETE", url, false)
    request.send()
    
}

function atualizar(url, body){
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("PUT", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))
    
    request.onload = function() {
    
        console.log(this.responseText)
        
    }

    return request.responseText
}


function cadastrarUsuario() {

    event.preventDefault()
    let url = "http://localhost:5000/usuarios"
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    console.log(nome)
    console.log(email)

    body = {
    
        "nome": nome,
        "email": email
        
    }

    cadastrar(url, body)
    alert("O usuário foi cadastrado com sucesso!")

}

function deletarUsuario(){
    event.preventDefault()
    let id = document.getElementById("id").value
    let url = "http://localhost:5000/usuarios/" + id 
    deletar(url)
    alert("O usuário foi deletado com sucesso!")
   
}
    
function atualizarUsuario() {
    event.preventDefault()
    let id = document.getElementById("id").value
    let url = "http://localhost:5000/usuarios/" + id
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    console.log(nome)
    console.log(email)

    body = {
        "nome": nome,
        "email": email
        
    }

    cadastrar(url, body)
    alert("O usuário foi atualizado com sucesso!")

}
