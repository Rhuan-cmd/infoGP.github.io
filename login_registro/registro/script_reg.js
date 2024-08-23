const $Botao = document.getElementById("registrar");
const $Mensagem = document.getElementById("mensagem");


$Botao.addEventListener('click', function() {
    const $Usuario = document.getElementById("usuario").value;
    const $Senha = document.getElementById("senha1").value;
    const $SenhaConf = document.getElementById("senha2").value;
    const $Email = document.getElementById("email").value;


    //Verifica se as senhas digitadas sao inguais e salva localmente no navegador
    if ($Senha == "" && $SenhaConf == "" || $Usuario == "") {
          $Mensagem.innerHTML = "Preencha todos os espaços"
          $Mensagem.style.display = "block"

    }else if ($Senha == $SenhaConf) {
          if (validarEmail($Email) == true) {
               localStorage.setItem('usuario', $Usuario);
               localStorage.setItem('senha', $Senha);
               localStorage.setItem('email', $Email);
               location.href = '../../index.html';
          }else {
               $Mensagem.innerHTML = "Digite em email valido"
               $Mensagem.style.display = "block"
          }
    
   }else {
          $Mensagem.innerHTML = "As senhas devem ser iguais"
          $Mensagem.style.display = "block"
   }
   
});


function validarEmail(email) {
     
     const validar = /^[^\s@]+@gmail\.com$/; //Essa bomba verifica a estrutura do email
     return validar.test(email);

}