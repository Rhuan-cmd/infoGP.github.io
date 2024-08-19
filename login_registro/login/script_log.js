const $Botao = document.getElementById("botao");
const $Mensagem = document.getElementById("mensagem");
//So pega os itens salvos no bagulho la do registro
let salvo_uso = localStorage.getItem("usuario");
let salvo_senh = localStorage.getItem("senha");



$Botao.addEventListener('click', function() {

    const $Usuario = document.getElementById("usuario").value;
    const $Senha = document.getElementById("senha").value;

    
    if ($Usuario == salvo_uso && $Senha == salvo_senh) {
        location.href = 'Programas/index_prog.html';
    }else {
        $Mensagem.style.display = 'block';
    }


});
