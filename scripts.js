let numberCards, selectedItemsCheck = [], flipBack=[], countClicks = 0;

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
    selectedItemsCheck.push(element);
}

function pairCheck() {
    if (selectedItemsCheck.length === 2) {
        if (selectedItemsCheck[0].getAttribute('id') === selectedItemsCheck[1].getAttribute('id')) {
            console.log('sao iguais');
        } else {
            flipBack.push(selectedItemsCheck[0],selectedItemsCheck[1]);
            setTimeout(removeFlip,2000);
        }

        selectedItemsCheck = [];
    }
}

function removeFlip() {
    for (let i = 0; i < 2; i++) {
        flipBack[0].classList.remove("flipped");
        flipBack[0].querySelector(".front-card").classList.remove("rotation_front-face");
        flipBack[0].querySelector(".back-card").classList.remove("rotation_back-face");
        flipBack.shift();
    }
}

startGame();
