let res = document.querySelector('.res')
let cartao = document.querySelector('.cartao') 

function enviar(){
    let nome = document.querySelector('#nome').value
    let sobrenome = document.querySelector('#sobrenome').value
    let idade = document.querySelector('#idade').value
    let tel = document.querySelector('#tel').value
    let email = document.querySelector('#email').value
    let user = document.querySelector('#user').value
    let bairro = document.querySelector('#bairro').value
    let cidade = document.querySelector('#cidade').value
    let rua = document.querySelector('#rua').value
    let ncasa = document.querySelector('#ncasa').value


    
    if(user.length < 3 || user.length > 10){
        res.innerHTML = 'O idUser precisa conter entre 3 a 10 caractere'
    }else{
        res.innerHTML = 'idUser válido'
    }






    if(nome || sobrenome || idade || tel || email || user || cidade || bairro || rua || ncasa){

        cartao.innerHTML += `NOME COMPLETO: ${nome} ${sobrenome}<br>`
        cartao.innerHTML += `IDADE: ${idade}<br>`
        cartao.innerHTML += `Nº DE TELEFONE: ${tel}<br>`
        cartao.innerHTML += `E-MAIL: ${email} <br>`
        cartao.innerHTML += `idUser: ${user}<br>`
        cartao.innerHTML += `ENDEREÇO: ${cidade}, ${bairro} - ${rua} ${ncasa}<br>`
    } else {
        return msgErro()
    }

    
    
    

}


function msgErro(){

    let merror = document.querySelectorAll('.msg-error');
    merror.innerHTML= 'dawdaw'
    merror.insertAdjacentElement('afterend', 'div'); 

}
