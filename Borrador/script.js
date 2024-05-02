const deckUrl = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
const hitButton = document.querySelector(".hit-button");
const standButton = document.querySelector(".stand-button");
const shuffleButton = document.querySelector(".shuffle-button");
const newDeckButton = document.querySelector(".new-deck-button");
const cardsContainer = document.querySelector(".cards");
const main = document.querySelector("main");
const message = document.querySelector(".message");
let deckId;
let total = 0;
let isGameOver = false;

async function getDeck(){
  const response = await fetch(deckUrl);
  const deckDetails = await response.json();
  deckId = deckDetails.deck_id;
  isGameOver = false;
}

getDeck();

hitButton.onclick = async function(){
  if(isGameOver){
    return;
  }

  const cardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
  const response = await fetch(cardUrl);
  const card = await response.json();
  const cardDetails = card.cards[0];
  cardsContainer.innerHTML += `<img src="${cardDetails.image}" alt="${cardDetails.value} of ${cardDetails.suit}">`
  if(cardDetails.value === "QUEEN" || cardDetails.value === "KING" || cardDetails.value === "JACK" ){
    total += 10;
  }
  else if(cardDetails.value === "ACE" && (total + 11) <= 21){
    total += 11;
  }
  else if(cardDetails.value === "ACE"){
    total += 1;
  }
  else {
    total += parseInt(cardDetails.value);
  }
  
  if(total > 21){
    main.style.filter = "blur(4px)";
    message.textContent = "¡Te has pasado de 21! Has perdido.";
    message.style.display = "block";
    isGameOver = true;
  }
  console.log(total);
}

standButton.onclick = function(){
  if(isGameOver){
    return;
  }

  while(total < 17){
    hitButton.click();
  }

  if(total > 21){
    main.style.filter = "blur(4px)";
    message.textContent = "¡Te has pasado de 21! Has perdido.";
    message.style.display = "block";
  }
  else{
    main.style.filter = "blur(4px)";
    message.textContent = "¡Has ganado! ¡Tienes " + total + " puntos!";
    message.style.display = "block";
  }

  isGameOver = true;
}

shuffleButton.onclick = function(){
  getDeck();
  total = 0;
  cardsContainer.innerHTML = "";
  main.style.filter = "blur(0px)";
  message.style.display = "none";
}

newDeckButton.onclick = function(){
  deckUrl = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
  shuffleButton.click();
}

let houseTotal = 0;
let houseCards = [];

function showHouseCard(cardDetails) {
  houseCards.push(cardDetails);
  if (houseCards.length === 1) {
    cardsContainer.innerHTML += `<img src="https://deckofcardsapi.com/static/img/card-back.png" alt="Card Back">`;
  } else {
    cardsContainer.innerHTML += `<img src="${cardDetails.image}" alt="${cardDetails.value} of ${cardDetails.suit}">`
  }
}

function updateHouseTotal() {
  houseTotal = 0;
  let hasAce = false;
  for (const card of houseCards) {
    if (card.value === "QUEEN" || card.value === "KING" || card.value === "JACK") {
      houseTotal += 10;
    } else if (card.value === "ACE") {
      hasAce = true;
      houseTotal += 11;
    } else {
      houseTotal += parseInt(card.value);
    }
  }

  if (hasAce && houseTotal > 21) {
    houseTotal -= 10;
  }
}

async function playHouseTurn() {
  while (houseTotal < 17) {
    const cardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
    const response = await fetch(cardUrl);
    const card = await response.json();
    const cardDetails = card.cards[0];
    showHouseCard(cardDetails);
    updateHouseTotal();
  }
}

standButton.onclick = function(){
  if(isGameOver){
    return;
  }

  while(total < 17){
    hitButton.click();
  }

  if(total > 21){
    main.style.filter = "blur(4px)";
    message.textContent = "¡Te has pasado de 21! Has perdido.";
    message.style.display = "block";
  }
  else{
    playHouseTurn().then(() => {
      main.style.filter = "blur(4px)";
      if (houseTotal > 21 || total > houseTotal) {
        message.textContent = "¡Has ganado! ¡Tienes " + total + " puntos!";
      } else if (total < houseTotal) {
        message.textContent = "¡Has perdido! La casa tiene " + houseTotal + " puntos.";
      } else {
        message.textContent = "¡Es un empate! Vuelve a intentarlo.";
      }
      message.style.display = "block";
    });
  }

  isGameOver = true;
}
