const $Botao = document.getElementById("botao");
const $Mensagem = document.getElementById("mensagem");
//So pega os itens salvos no bagulho la do registro
let salvo_uso = localStorage.getItem("usuario");
let salvo_senh = localStorage.getItem("senha");



$Botao.addEventListener('click', function() {

    const $Usuario = document.getElementById("usuario").value;
    const $Senha = document.getElementById("senha").value;

    if ($Senha == "" || $Usuario == "") {
     $Mensagem.textContent = "Preencha todos os espaços"
     $Mensagem.style.display = "block"
        
    }else if ($Usuario == salvo_uso && $Senha == salvo_senh) {
        location.href = 'Programas/index_prog.html';
        
    }else {
        $Mensagem.textContent = "Usuário não cadastrado<br>Tente outro usuário ou crie uma conta!"
        $Mensagem.style.display = 'block';
    }


});
