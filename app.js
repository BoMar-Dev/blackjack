// VARIABLES--------------------------------------
let firstBlackJackCard = Math.floor(Math.random() * 13) +1;
let secondBlackJackCard = Math.floor(Math.random() * 13) +1;
let cards = [firstBlackJackCard, secondBlackJackCard];
let sum = cards[0] + cards[1];


const playerField = document.querySelector(".player-field")

let player = {

  name : "Marcus",
  chips: 145
   
}

playerField.innerText += ` ${player.name} $ ${player.chips}`


hasBlackJack = false;
isAlive = true;


const dealerMsg = document.querySelector(".dealer-msg")
const cardsEl = document.querySelector(".cards")
const gameSum = document.querySelector(".sum")
const startBtn = document.querySelector(".start-btn")
const retryBtn = document.querySelector(".retry-btn")
const newCardBtn = document.querySelector(".new-card-btn")

//__________________________________________________


// ADDING ADVENTLISTNER-----------------------------
startBtn.addEventListener("click", function() {
    
  letsPlay()
  cardRange () 
 
     

  });


  retryBtn.addEventListener("click", function() {
      
    location. reload()
    

  });



  newCardBtn.addEventListener("click", function() {
     
    
    clearScreen()
    newCard();
  
  });

//__________________________________________________

let message = ""
// FUNCTIONS 
 
   // start game
  function letsPlay(){

    

    for ( let i = 0 ; i < cards.length; i ++){
      cardsEl.innerText += `  ${cards[i]}  - `;

      
    }

    
    
    gameSum.innerText = `Sum : ${sum}`;
   if(sum <=20){
    message = `you got ${sum}, do you want another card ?`
    }else if( sum ==21){
        message = `WOW,${sum}, you got Black!Jack.`
        hasBlackJack = true
    }else{
        message = `you got,${sum}, you have lost the game.`
        isAlive = false
    }

    dealerMsg.innerText += `  ${message}`;
  }
  

 
  


  // new card
   
  function newCard(){


    if( hasBlackJack === false && isAlive === true ){
      
      let anotherBlackJackCard = Math.floor(Math.random() * 11) +2;
      cards.push(anotherBlackJackCard)
  
      sum +=anotherBlackJackCard;
  
      for(let i = 0; i< cards.length; i ++){
        cardsEl.innerText += ` ${cards[i]} - `
      }
  
        gameSum.innerText = `Sum : ${sum}`;
  
      if(sum <=20){
        message = `you got ${sum}, do you want another card ?`
        }else if( sum ==21){
            message = `WOW,${sum}, you got Black!Jack.`
            hasBlackJack = true
        }else{
            message = `you got,${sum}, you have lost the game.`
            isAlive = false   
        }
        
        dealerMsg.innerText += `  ${message}`;
      
    }
    

  }
  
  // retry game 
  function clearScreen (){
    
    cardsEl.innerText =  "Cards : ";
    gameSum.innerText = "Sum :"
    dealerMsg.innerText ="Dealer says : "
    
    
  }


  // Making 1 ( ace ) to value 11 instead of 1 
  function cardRange (){

    if (cards[i] > 10){
      return 10
    }else if (cards[i] === 1 ) {
      return 11
    } else {
      return cards[i]
    }
  }




  //_________________________________________________________________