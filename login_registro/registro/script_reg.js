const $Botao = document.getElementById("registrar");
const $Mensagem = document.getElementById("mensagem");

$Botao.addEventListener('click', function() {
    const $Usuario = document.getElementById("usuario").value;
    const $Senha = document.getElementById("senha1").value;
    const $SenhaConf = document.getElementById("senha2").value;

    //Verifica se as senhas digitadas sao inguais e salva localmente no navegador
    if ($Senha == "" && $SenhaConf == "" || $Usuario == "") {
     $Mensagem.textContent = "Preencha todos os espaços"
     $Mensagem.style.display = "block"

    }else if ($Senha == $SenhaConf) {
    localStorage.setItem('usuario', $Usuario);
    localStorage.setItem('senha', $Senha);
    location.href = '../../index.html';
    
   }else {
        $Mensagem.textContent = "As senhas devem ser iguais"
        $Mensagem.style.display = "block"
   }
   
});

