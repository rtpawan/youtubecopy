//let firstCard = getRandomCard();
//let secondCard = getRandomCard();

let cards = []//[firstCard,secondCard]
let sum = 0;     //firstCard +  secondCard;
let hasBlackJack = false;
let isAlive  = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let player = {
  name:"Pawan",
  chip: 145
}
let playerEl = document.getElementById("player-el");
  playerEl.textContent = player.name + ': $'+ player.chip;
//console.log(sum);
 function getRandomCard(){
  let randomCard = Math.floor(Math.random()*13) + 1;
  if(randomCard > 10){
    return 10;
  }
  else if(randomCard ===1){
    return 11;
  }
  else{
    return randomCard
  }
  //return randomCard;
  //return 5;
 }
function startgame(){
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
function renderGame(){
  cardsEl.textContent = "Cards:";

  for ( let i =0; i<=cards.length; i++){
    cardsEl.textContent += cards[i] + ' ';
  }
  sumEl.textContent = "Sum:" + sum;

  if(sum <= 20){
    message = "Do you want to draw a new card 😊";
    
  }
  else if(sum === 21){
    message = "wohoo! you have got BlackJack!😂";
    hasBlackJack = true;
  }
  else{
    message = "you are out of game!😢";
    isAlive = false;
  }
  
  messageEl.textContent = message;
  //console.log(hasBlackJack);
  //console.log(isAlive);
  //console.log(message);

}
function newCard(){
//console.log("Drawing a new card");
 //let card = 6;
 if(sum <=21 && sum !=21){
  let card = getRandomCard();
  sum += card;
   cards.push(card)
   console.log(cards)
 
  renderGame();

 }

}



