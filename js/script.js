let cartao = document.querySelector('.cartao') 
let input = document.querySelectorAll('input')
console.log(input);

function enviar(){

    let tel = document.querySelector('#tel').value
    let email = document.querySelector('#email').value
    let bairro = document.querySelector('#bairro').value
    let cidade = document.querySelector('#cidade').value
    let rua = document.querySelector('#rua').value
    let ncasa = document.querySelector('#ncasa').value

    if(nomeCompleto || msgUser || idade){

        nomeCompleto()
        idade()
        msgUser()

    } else {

        msgUser()
        nomeCompleto()
        idade()
        
    }
}

function nomeCompleto(){

    let nome = document.querySelector('#nome').value
    let no = document.querySelector('.msg-error-no')
    let msgNome = document.createElement('p')
    no.insertAdjacentElement('beforeend', msgNome)

    let sobrenome = document.querySelector('#sobrenome').value
    let sobre = document.querySelector('.msg-error-sobre')
    let msgSobreNome = document.createElement('p')
    sobre.insertAdjacentElement('beforeend', msgSobreNome)
   
    if(nome.length == 0 || sobrenome == 0){
    msgNome.innerHTML += `não pode está vazio <br>`
    msgSobreNome.innerHTML += `não pode está vazio <br>`
    }
    if(!nome.match(/^[a-zA-Z]+$/g) || !sobrenome.match(/^[a-zA-Z]+$/g)) {  

        msgNome.innerHTML += `não pode ser um numero`
        msgSobreNome.innerHTML += `não pode ser um numero`
    }else{
        no.remove()
        sobre.remove()
        cartao.innerHTML += `NOME COMPLETO: ${nome} ${sobrenome}<br>`

    }

}

function idade(){

    let idade = document.querySelector('#idade').value
    let ida = document.querySelector('.msg-error-idade')
    let msgIdade = document.createElement('p')
    
    ida.insertAdjacentElement('beforeend', msgIdade)

    if(idade == 0 || idade.length == 0 || idade >= 110){
        msgIdade.innerHTML = 'idade invalida'
    }else{
            ida.remove()
            cartao.innerHTML += `IDADE: ${idade}`
    }

}

function msgUser(){

    let user = document.querySelector('#user').value
    let mu = document.querySelector('.msg-error-us')
    let msgUser = document.createElement('p')
    let n1 = Math.round(Math.random() * (0 + 1000) + 1)

    mu.insertAdjacentElement('beforeend', msgUser)

    if(user.length < 3 || user.length > 10){
        msgUser.innerHTML = 'O idUser precisa conter entre 3 a 10 caractere'
    }else{
        mu.remove()
        cartao.innerHTML += `idUser: ${user} (Nº: #${n1})<br>` 
    }  
}
