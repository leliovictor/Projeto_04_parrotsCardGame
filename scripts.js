let numberCards, selectedItemsCheck = [], countClicks = 0;

function startGame() {
  numberCards = prompt("Com quantas cartas deseja jogar? Insira um numero par, entre 4 e 14.");

  while (numberCards < 4 || numberCards > 14 || numberCards % 2 != 0) {
    alert("Número inválido, insira um número par entre 4 e 14.");
    numberCards = prompt("Com quantas cartas deseja jogar? Insira um numero par, entre 4 e 14.");
  }
}

function selected(element) {
    flipCard(element);

    registerCard(element);

}

function flipCard(element) {
  if (element.querySelector(".rotation_front-face") === null) {
    element.querySelector(".front-card").classList.add("rotation_front-face");
    element.querySelector(".back-card").classList.add("rotation_back-face");

    countClicks++;
  }
}

function registerCard(element) {

}


startGame();
