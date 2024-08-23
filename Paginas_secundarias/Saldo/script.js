// Aqui rhuan ele vai setar o saldo pra 1000 no local storage
let saldo = localStorage.getItem('saldo'); 
if (saldo === null) {
    saldo = 1000; // Eu só coloquei 1000 pq sla eu quis fazer um bgl pra ver se o let e const n bugava, mas pode ser 0
    localStorage.setItem('saldo', saldo);
} else {
    saldo = parseInt(saldo);
}

document.getElementById('saldo').innerText = saldo;

// Contador de cliques do gay do rhuan
let clickCount = 0; 
const totalClicks = 10;

document.getElementById('clickBox').addEventListener('click', () => { 
    clickCount++;
    
    // Barra de progresso
    const progressBar = document.getElementById('progressBar'); 
    const progress = (clickCount / totalClicks) * 100; 
    progressBar.style.width = progress + '%'; 

    const clicksLeft = totalClicks - clickCount; 
    document.getElementById('clicksLeft').innerText = `${clicksLeft} cliques restantes`; 

    if (clickCount === totalClicks) {
        saldo += 2; 
        localStorage.setItem('saldo', saldo);  // Atualiza o saldo no localStorage pra gozar bem gostoso
        document.getElementById('saldo').innerText = saldo;  

        // "+2" Reais que se tu quiser rhuan ou felipe pode colocar Python coins
        const plusTwo = document.getElementById('plusTwo'); 
        plusTwo.classList.add('active'); 
        setTimeout(() => { 
            plusTwo.classList.remove('active'); 
        }, 1000);

        clickCount = 0;  // Reseta o contador de cliques
        progressBar.style.width = '0%';  // Reseta a barra de progresso
        document.getElementById('clicksLeft').innerText = `${totalClicks} cliques restantes`;  // Reseta o texto de cliques restantes
    }
});