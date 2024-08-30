//Variáveis
const $Buttons = document.querySelectorAll(".pagar");
const $Perfil = document.getElementById("perfil");
const $Sair = document.getElementById("Sair");
const $PreviewSaldo = document.getElementById("saldo");

let saldo = localStorage.getItem("saldo")

if (saldo == null) {
   $PreviewSaldo.innerHTML = `0.00`
}else {
   $PreviewSaldo.innerHTML = `${saldo}.00`
}

//Lógica de Click
$Buttons.forEach(button => { //Será aplicado para cada botão individualmente
    button.addEventListener('click', function() {
        button.classList.add("click");
    });
    button.addEventListener('animationend', function() {
        button.classList.remove("click");
    });
});


$Perfil.addEventListener('click', function() {
    location.href = "../Paginas_secundarias/Perfil/perfil.html";
});

$Sair.addEventListener('click', function() {
    location.href = "../index.html";
});