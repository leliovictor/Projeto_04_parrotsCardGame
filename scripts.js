let numberCards, selectedItemsCheck = [], countClicks = 0;

function startGame() {
  numberCards = prompt("Com quantas cartas deseja jogar? Insira um numero par, entre 4 e 14.");

  while (numberCards < 4 || numberCards > 14 || numberCards % 2 != 0) {
    alert("Número inválido, insira um número par entre 4 e 14.");
    numberCards = prompt("Com quantas cartas deseja jogar? Insira um numero par, entre 4 e 14.");
  }
}

function selected(element) {
    if (!element.classList.contains('flipped')) {

        flipCard(element);

        registerCard(element);
    
        pairCheck();

        countClicks++;
    }
}

function flipCard(element) {
    element.classList.add("flipped");
    element.querySelector(".front-card").classList.add("rotation_front-face");
    element.querySelector(".back-card").classList.add("rotation_back-face");
  }

function registerCard(element) {
    selectedItemsCheck.push(element.getAttribute("id"));
}

function pairCheck() {
    if (selectedItemsCheck.length === 2) {
        console.log("ok");
        
        selectedItemsCheck = [];
    }
}

startGame();
