let cartao = document.querySelector('.cartao') 
function enviar(){

    if(nomeCompleto() || idade() || numTel() || msgUser()|| validateEmail()|| endereco()){

        nomeCompleto() 
        idade()
        numTel()
        msgUser()
        validateEmail()
        endereco()
    }else{
        nomeCompleto() 
        idade()
        numTel()
        msgUser()
        validateEmail()
        endereco()
    }
 
}
/*------------------------------------------------------------*/
function nomeCompleto(){
    let nome = document.querySelector('#nome').value
    let no = document.querySelector('.msg-error-no')
    let msgNome = document.createElement('p')
    no.insertAdjacentElement('beforeend', msgNome)
/* 
#
*/ 
    if(nome.length == 0){
        msgNome.innerHTML += `Não pode estar vazio! <br>`
        no.replaceChildren(msgNome,  )
    }else if(!nome.match(/^[a-zA-Z]+$/g)){  
        msgNome.innerHTML += `Não pode conter número!`   
        no.replaceChildren(msgNome,  )
    } else{
        no.remove()
        cartao.innerHTML += `NOME COMPLETO: ${nome}<br>`
    }   
}
/*------------------------------------------------------------*/
function idade(){  
    let idade = document.querySelector('#idade').value
    let ida = document.querySelector('.msg-error-idade')
    let msgIdade = document.createElement('p')
    ida.insertAdjacentElement('beforeend', msgIdade)
/* 
#
*/   
    if(idade == 0 || idade.length == 0 || idade >= 110){
        msgIdade.innerHTML = 'Idade inválida!'
        ida.replaceChildren(msgIdade, )
    }else{
        ida.remove()
        cartao.innerHTML += `IDADE: ${idade}<br>`
    }
}
/*------------------------------------------------------------*/
function numTel(){
    let tel = document.querySelector('#tel').value
    let nt = document.querySelector('.msg-error-tel')
    let msgTel = document.createElement('p')
    nt.insertAdjacentElement('beforeend', msgTel)
/* 
#
*/ 
    if(tel.length !== 11){
        msgTel.innerHTML = 'Seu número precisa conter 11 caractere!'
        nt.replaceChildren(msgTel, )
    } else{
        nt.remove()
        cartao.innerHTML += `Nº DE TELEFONE: ${tel}<br>`
    }
}
/*------------------------------------------------------------*/
function validateEmail(email) {
    let eMail = document.querySelector('#email').value
    let em = document.querySelector('.msg-error-email')
    let msgEmail = document.createElement('p')
    em.insertAdjacentElement('beforeend', msgEmail)
/* 
#
*/ 
    let re = /\S+@\S+\.\S+/;
    if(!eMail.match(/\S+@\S+\.\S+/)){
        msgEmail.innerHTML = 'E-mail invalido!'
        em.replaceChildren(msgEmail, )
    }else{
        cartao.innerHTML += `E-MAIL: ${eMail}<br>`
        em.remove()
        return re.test(email);
    }  
}
/*------------------------------------------------------------*/
function msgUser(){
    let user = document.querySelector('#user').value
    let mu = document.querySelector('.msg-error-us')
    let msgUser = document.createElement('p')
    let n1 = Math.round(Math.random() * (0 + 1000) + 1)
    mu.insertAdjacentElement('beforeend', msgUser)
/* 
#
*/ 
    if(user.length < 3 || user.length > 10){
        msgUser.innerHTML = 'O idUser precisa conter entre 3 a 10 caractere!'
        mu.replaceChildren(msgUser, )
    }else{
        mu.remove()
        cartao.innerHTML += `idUser: ${user} (Nº: #${n1})<br>` 
    }   
}
/*------------------------------------------------------------*/
function endereco(){
    let bairro = document.querySelector('#bairro').value
    let ba = document.querySelector('.msg-error-bairro')
    let msgBairo = document.createElement('p')
    ba.insertAdjacentElement('beforeend', msgBairo)
/* 
#
*/ 
    let cidade = document.querySelector('#cidade').value
    let ci = document.querySelector('.msg-error-cidade')
    let msgCidadde = document.createElement('p')
    ci.insertAdjacentElement('beforeend', msgCidadde)
/* 
#
*/ 
    let rua = document.querySelector('#rua').value
    let ru = document.querySelector('.msg-error-rua')
    let msgRua = document.createElement('p')
    ru.insertAdjacentElement('beforeend', msgRua)
/* 
#
*/ 
    let ncasa = document.querySelector('#ncasa').value
    let nc = document.querySelector('.msg-error-ncasa')
    let msgNCasa = document.createElement('p')
    nc.insertAdjacentElement('beforeend', msgNCasa)
/* 
#
*/ 
    if(!bairro.match(/^[a-zA-Z]+$/g) || !cidade.match(/^[a-zA-Z]+$/g) || !rua.match(/^[a-zA-Z]+$/g)){
        msgBairo.innerHTML += `Não pode conter números!`
        msgCidadde.innerHTML += `Não pode conter números!`
        msgRua.innerHTML += `Não pode conter números!`
        ba.replaceChildren(msgBairo, )
        ci.replaceChildren(msgCidadde, )
        ru.replaceChildren(msgRua, )
    } else{
        cartao.innerHTML += `ENDEREÇO: ${cidade}, ${bairro} - ${rua}`
        ba.remove()
        ci.remove()
        ru.remove()
            if(ncasa.length == 0){
                cartao.innerHTML += ` Nº: S/Nº<br> `
       
            } else{
                cartao.innerHTML += ` Nº: ${ncasa}<br> `
        
            }
    }  
}
