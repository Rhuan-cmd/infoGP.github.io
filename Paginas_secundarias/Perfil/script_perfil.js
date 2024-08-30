const $ExclusãoDeConta = document.getElementById("excluir");
const $NomeUsuario = document.getElementById("nome");
const $Voltar = document.getElementById("voltar");

let senha = localStorage.getItem("senha");
let usuario = localStorage.getItem("usuario");

$NomeUsuario.innerHTML = usuario;

$ExclusãoDeConta.addEventListener('click', function() {
    let confirmar_exclusao = prompt("Digite a sua senha para excluir a conta: ")

    if (confirmar_exclusao == senha) {
        localStorage.clear();
        alert("Conta excluida com sucesso!!");
        location.href = "../../index.html";
    }else {
        alert("Senha incorreta!!");
    }
})

$Voltar.addEventListener('click', function() {
    location.href = "../../Programas/index_prog.html"
})



//---------------------Mudar Foto de Perfil---------------------

const $File = document.getElementById("file");
const $Mural = document.querySelector(".Mural-Perfil");

//Converte essa bagaça em base64 sla
function converterimagem(file, conversao) {
    const ler = new FileReader();
    ler.onload = function(e) {
        conversao(e.target.result);
    };
    ler.readAsDataURL(file);
}

$File.addEventListener('change', function() {
    if ($File.files.length > 0){
        
        const tipo = $File.files[0].type
        const formatos = ["image/jpeg", "image/png", "image/jpg"]

        if (!formatos.includes(tipo)){
            alert("Formato invalido");
            return;
        }


        if (document.querySelector(".Foto")) {
            $Mural.removeChild(document.querySelector(".Foto"));
        }

        converterimagem($File.files[0], function(base64) {

            localStorage.setItem("Fotos", base64);
            
            const img = document.createElement("img");
            
            img.className = "Foto";
            img.src = base64;
            
            $Mural.appendChild(img);
        }) 
        
    }
});

function carregarfotos() {
    let foto = localStorage.getItem("Fotos");

    if (foto) {

        const img = document.createElement("img");
        
        img.className = "Foto";
        
        img.src = foto;
        
        $Mural.appendChild(img);
    }
}

document.addEventListener('DOMContentLoaded', carregarfotos);