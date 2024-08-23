//Variáveis
const $Buttons = document.querySelectorAll(".pagar");
const $Perfil = document.getElementById("perfil");
const $Sair = document.getElementById("Sair");


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
    location.href = "../Paginas_secundarias/perfil.html";
});

$Sair.addEventListener('click', function() {
    location.href = "../index.html";
});
