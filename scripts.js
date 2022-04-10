let numberCards, selectedItemsCheck=[], flipBack=[], countClicks = 0;
const cardStyle = ["bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif","metalparrot.gif","revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"];


function startGame() {
  numberCards = parseInt(prompt("Com quantas cartas deseja jogar? Insira um numero par, entre 4 e 14."));

  while (numberCards < 4 || numberCards > 14 || numberCards % 2 !== 0) {
    alert("Número inválido, insira um número par entre 4 e 14.");
    numberCards = parseInt(prompt("Com quantas cartas deseja jogar? Insira um numero par, entre 4 e 14."));
  }

  deal(numberCards);

}

function shuffleCardStyle() {} /*Implementar para misturar a array inicial para imagens diferentes a cada jogo*/

function deal(amount) {
    let cardsGame = cardStyle.slice(0,amount/2);
    cardsGame.push(...cardsGame);
    cardsGame = cardsGame.sort(comparador);

    const section = document.querySelector(".cards");
    for (let i = 0; i < amount; i++) {
        section.innerHTML += `
        <div class="card" onclick="selected(this)">
            <div class="front-card">
              <img src="./images/front.png" />
            </div>
            <div class="back-card">
              <img src="./images/${cardsGame[i]}" />
            </div>
          </div>
        `;
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
        if (selectedItemsCheck[0].querySelector(".back-card img").getAttribute('src') === selectedItemsCheck[1].querySelector(".back-card img").getAttribute('src')) {
        } else {
            flipBack.push(selectedItemsCheck[0],selectedItemsCheck[1]);
            setTimeout(removeFlip,1000);
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




function comparador() { 
	return Math.random() - 0.5; 
}

startGame();
