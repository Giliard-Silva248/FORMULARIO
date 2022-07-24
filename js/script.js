/* ADD MSG DE ERRO APOS OS INPUTS*/


let res = document.querySelector('.res')
let cartao = document.querySelector('.cartao') 
let input = document.querySelectorAll('input')
console.log(input);

function enviar(){

    let user = document.querySelector('#user').value
    let nome = document.querySelector('#nome').value
    let sobrenome = document.querySelector('#sobrenome').value
    let idade = document.querySelector('#idade').value
    let tel = document.querySelector('#tel').value
    let email = document.querySelector('#email').value
    let bairro = document.querySelector('#bairro').value
    let cidade = document.querySelector('#cidade').value
    let rua = document.querySelector('#rua').value
    let ncasa = document.querySelector('#ncasa').value

    if(nome || sobrenome || idade || tel || email || user || cidade || bairro || rua || ncasa){

        cartao.innerHTML += `NOME COMPLETO: ${nome} ${sobrenome}<br>`
        cartao.innerHTML += `IDADE: ${idade}<br>`
        cartao.innerHTML += `Nº DE TELEFONE: ${tel}<br>`
        cartao.innerHTML += `E-MAIL: ${email} <br>`
        cartao.innerHTML += `ENDEREÇO: ${cidade}, ${bairro} - ${rua} ${ncasa}<br>`
        msgUser()

    } else {
        msgErro()
        msgUser()
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
        msgUser.innerHTML = 'idUser válido'
        cartao.innerHTML += `idUser: ${user} (Nº: #${n1})<br>` 
  
    }
    
   
}
function msgErro(){   
    let msg = document.createElement('div')
    cartao.insertAdjacentElement('beforeend', msg)
    msg.innerHTML = 'Nenhum campo pode estar vazio! <br>'
}




