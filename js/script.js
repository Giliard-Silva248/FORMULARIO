class ValidaFormulario {
    constructor() {
      this.formulario = document.querySelector('.formulario');
      this.btn = document.querySelector('.btn')
      this.eventos();
    }
  
    eventos() {
        this.btn.addEventListener('click', e => {
        this.enviado(e);//esse método vai capturar quando o form for enviado
      });
    }
  
    enviado(e) {
      e.preventDefault();
      const camposValidos = this.camposVa();
      const senhasValidas = this.vaSenha();
  
      if(camposValidos && senhasValidas) {
        //alert('Formulário enviado.');//avisa quando o form for enviado com todos os campos validoS
        this.formulario.submit();
      }
    }
  
    //VALIDAÇÃO DA SENHAS
    vaSenha() {
      let valid = true;
  
      const senha = this.formulario.querySelector('.senha');
      
      if(senha.value.length < 6 || senha.value.length > 12) {
        valid = false;
        this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
      }
  
      return valid;
    }
  

    //VALIDAÇÃO DOS VALORES DOS CAMPOS
    camposVa() {
      let valid = true;
  
      for(let errorText of this.formulario.querySelectorAll('.error-text')) {
        errorText.remove();//IMPEDE QUE AS MENSAGENS DE ERRO SEJAM ADD MAIS DE UMA VEZ
      }
  
      for(let campo of this.formulario.querySelectorAll('.validar')) {
        const label = campo.previousElementSibling.innerText;//SELECIONA O ELEMENTO FILHO ANTERIOR
  
        if(!campo.value) {
          this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
          valid = false;
        }
  
        if(campo.classList.contains('cpf')) {
          if(!this.validaCPF(campo)) valid = false;
        }
  
        if(campo.classList.contains('usuario')) {
          if(!this.validaUsuario(campo)) valid = false;
        }
  
      }
  
      return valid;
    }
    

    //VALIDAÇÃO DO USUÁRIO
    validaUsuario(campo) {
      const usuario = campo.value;
      let valid = true;
  
      if(usuario.length < 3 || usuario.length > 12) {
        this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
        valid = false;
      }
  
      if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
        this.criaErro(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
        valid = false;
      }
  
      return valid;
    }
  
    //MENSAGEM DE ERRO
    criaErro(campo, msg) {
      const div = document.createElement('div');
      div.innerHTML = msg;
      div.classList.add('error-text');
      campo.insertAdjacentElement('afterend', div);
    }
  }
  
  const valida = new ValidaFormulario();
  
