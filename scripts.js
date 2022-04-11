let numberCards, selectedItemsCheck=[], flipBack=[], countClicks = 0, timer = 0, idInterval;
const cardStyle = ["bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif","metalparrot.gif","revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"];

function startGame() {
  numberCards = parseInt(prompt("Com quantas cartas deseja jogar? Insira um numero par, entre 4 e 14."));

  while (numberCards < 4 || numberCards > 14 || numberCards % 2 !== 0) {
    alert("Número inválido, insira um número par entre 4 e 14.");
    numberCards = parseInt(prompt("Com quantas cartas deseja jogar? Insira um numero par, entre 4 e 14."));
  }

  shuffleCardStyle();

  deal(numberCards);
  
  organizeLayout(numberCards);

  idInterval = setInterval(countTime,1000);
  
}

function shuffleCardStyle() {
    cardStyle.sort(shuffle);
}

function deal(amount) {
    let cardsGame = cardStyle.slice(0,amount/2);
    cardsGame.push(...cardsGame);
    cardsGame = cardsGame.sort(shuffle);

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
        selectedItemsCheck[0].classList.add("found");
        selectedItemsCheck[1].classList.add("found");
        } else {
            flipBack.push(selectedItemsCheck[0],selectedItemsCheck[1]);
            setTimeout(removeFlip,1000);
        }

        endGameCheck();

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

function endGameCheck() {
    let cardsFound = document.querySelectorAll(".found");
    if (cardsFound.length === numberCards) {
        setTimeout(callWin,200);
    }
}

function callWin() {
    alert(`Parabéns, você ganhou em ${countClicks} jogadas! O jogo durou ${timer} segundos.`);
    
    clearInterval(idInterval);
    
    playAgain();
    
}

function countTime() {
    timer++;
    document.querySelector(".timer").innerHTML = timer;
}

function playAgain() {
    let playAgain = prompt("Gostaria de jogar novamente? Responda: 'sim' ou 'não'.").toLowerCase();
    
    if (playAgain === "sim") {
        countClicks = 0;
        document.querySelector(".timer").innerHTML = 0;
        timer = 0;
        document.querySelectorAll('.card').forEach((card) => card.remove());

        startGame();
    }
}

function shuffle() { 
	return Math.random() - 0.5; 
}

function organizeLayout(cardAmount) {
    let cubicRegression = (-0.0347)*cardAmount**3+1.3393*cardAmount**2+58.1746*cardAmount+148.5714
    document.querySelector(".cards").style.maxWidth=`${Math.round(cubicRegression)}px`;
}

startGame();

