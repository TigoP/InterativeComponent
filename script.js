let selectedNumber = 0; //criada função que receberá os numeros 
const botao = document.querySelector('#botao'); //chmando o id botao do HTML
const container = document.querySelector('.container'); //chamando a classe container do HTML
const main = document.querySelector('.main'); //chamando a classe main do HTML


// Função que é chamada quando o usuário clica em uma das opções numéricas
function selectNumber(num) { //foi criada uma função que receberá a variavel num
  selectedNumber = num; // por enquanto a variavel num que vale 0 é inserido a função
}

// Função que é chamada quando o usuário clica no botão "SUBMIT"
botao.addEventListener('click', () => { // um escutador do click do submit
   submitRating(); // função que receberá a mensagem e trocará de tela
})

function submitRating() {
  if (selectedNumber !== 0) {
    container.style.display = 'none'; //se clicar num num some a tela atual
    main.style.display = 'block'; //se clicar num num aparece esta tela
    const messageDiv = document.querySelector(".message"); //captura a classe massenge do HTML
    messageDiv.innerText = `O número clicado foi ${selectedNumber} de 5.`;
  } else {
    alert("Por favor, selecione uma opção antes de enviar.");
  }
}

// Adiciona um event listener para cada número clicável
const numbers = document.querySelectorAll(".num"); // chamando a classe num do HTML
numbers.forEach((number) => { 
  number.addEventListener("click", () => { //escuta o click de num
    selectNumber(parseInt(number.innerText)); //aqui ele pega o texto dentro da div e o transforma em um numero inteiro
    
  });
});