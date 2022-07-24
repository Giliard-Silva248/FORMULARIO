let cartao = document.querySelector('.cartao') 
let input = document.querySelectorAll('input')
console.log(input);
function enviar(){
    let bairro = document.querySelector('#bairro').value
    let cidade = document.querySelector('#cidade').value
    let rua = document.querySelector('#rua').value
    let ncasa = document.querySelector('#ncasa').value
   if(nomeCompleto || msgUser || idade || numTel || validateEmail){
        nomeCompleto()
        idade()
        numTel()
        msgUser()
        validateEmail()

    } else {
        msgUser()
        nomeCompleto()
        idade()
        numTel()
        validateEmail()
    }
}
function validateEmail(email) {
    let eMail = document.querySelector('#email').value
    let em = document.querySelector('.msg-error-email')
    let msgEmail = document.createElement('p')
    em.insertAdjacentElement('beforeend', msgEmail)
    let re = /\S+@\S+\.\S+/;
    if(!eMail.match(/\S+@\S+\.\S+/)){
        msgEmail.innerHTML = 'email invalido'
    }else{
        cartao.innerHTML = `EMAIL: ${eMail}`
        em.remove()
        return re.test(email);
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
function numTel(){
    let tel = document.querySelector('#tel').value
    let nt = document.querySelector('.msg-error-tel')
    let msgTel = document.createElement('p')
    nt.insertAdjacentElement('beforeend', msgTel)
    if(tel.length < 11 || tel.length > 11){
        msgTel.innerHTML = 'Seu número precisa conter apenas números!'
    } else{
        nt.remove()
        cartao.innerHTML = `Nº DE TELEFONE: ${tel}`
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
