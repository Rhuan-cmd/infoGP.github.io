//Variáveis
const $Buttons = document.querySelectorAll(".pagar");
const $ExcluirConta = document.getElementById("excluir");

let senha = localStorage.getItem("senha");



//Lógica de Click
$Buttons.forEach(button => { //Será aplicado para cada botão individualmente
    button.addEventListener('click', function() {
        button.classList.add("click");
    });
    button.addEventListener('animationend', function() {
        button.classList.remove("click");
    });
});


$ExcluirConta.addEventListener('click', function() {
    let confirmar_exclusao = prompt("Digite a sua senha para excluir a conta: ")

    if (confirmar_exclusao == senha) {
        localStorage.clear();
        alert("Conta excluida com sucesso!!");
        location.href = "../index.html";
    }else {
        alert("Senha incorreta!!");
    }
});
