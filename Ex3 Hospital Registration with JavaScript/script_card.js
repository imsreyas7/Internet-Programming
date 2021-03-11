//To select all memory card class objects
const cards = document.querySelectorAll(".memory-card");

//To check if user has clicked the first card or the second
let hasFlippedCard = false; 
let firstCard, secondCard;

//To lock the board once a flip has been done
let lockBoard = false;

//To maintain game state
let isGameFinished = false;
let score = 0;
let countdowns = [80, 60, 45];
let level = 1;
let count = countdowns[level - 1];

function flipCard(){
    //Flips a chosen card

    if(lockBoard){
        //If the board is locked, do not flip any more cards
        return;
    }

    if(this === firstCard){
        //If the same card is clicked again, don't disable its eventListener
        return;
    }

    this.classList.add("flip");

    if(!hasFlippedCard){
        //First Card clicked
        hasFlippedCard = true;
        firstCard = this;

        return;
    }
    
    //Second Card clicked
    secondCard = this;
        
    //console.log(firstCard, secondCard);

    //Check if card matches using data-framework attribute

    //console.log(firstCard.dataset.framework);
    //console.log(secondCard.dataset.framework);
    checkForMatch();
}

function checkForMatch(){
    //Checks if the two flipped cards match

    if(firstCard.dataset.framework === secondCard.dataset.framework){
        lockBoard = true;   //Do not allow to flip other cards before existing ones are removed
        setTimeout(disableCards, 450);
        updateScore();
    }
    else{
        unflipCards();
    }
}

function disableCards(){
    //Disables the chosen cards

    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    firstCard.style.setProperty("visibility", "hidden");
    secondCard.style.setProperty("visibility", "hidden");

    resetBoard();
}

function unflipCards(){
    //Unflips the chosen cards

    lockBoard = true; //Disable flipping during this operation

    //Flip within 1.5 seconds
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        
        resetBoard();
    }, 1200);
}

function resetBoard(){
    //Reset the current board status variables

    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function shuffleCards(){
    //Ordering by CSS order property

    cards.forEach(card => {
        //Random number between 0 - 11
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
}

function updateScore(){
    //Updates the score and takes care of level progress

    score++;
    document.getElementById("score").innerHTML = score;

    if(score == 6){
        isGameFinished = true;
        
        setTimeout(() => {  //Proceed to next level after 2 seconds
            proceedToNextLevel();
            shuffleCards();
        }, 2000);
    }
}

function proceedToNextLevel(){
    //Proceeds the user to the next level, if he passes the current one

    window.alert("You have cleared this level. Way to go!");
    level++;
    score = 0;

    //Update the parameters in the webpage
    document.getElementById("level").innerHTML = level;
    document.getElementById("score").innerHTML = score;

    count = countdowns[level - 1];

    //Enable the cards back and remove flip class, and make all cards visible
    cards.forEach(card => card.addEventListener("click", flipCard));
    cards.forEach(card => card.classList.remove("flip"));
    cards.forEach(card => card.style.setProperty("visibility", "visible"));

    if(level == 4){
        //No more levels, so reload the page
        window.alert("Congrats! You have completed the game!");
        location.reload();
    }
}

//Countdown
var counter = setInterval(runTimer, 1000);
    
function runTimer(){
    //Runs the timer based on current counter variable value
    count -= 1;

    if(count <= 0){
        clearInterval(counter);    //Stop the counter

        if(score < 6){
            //Reload the page after intimating the user
            window.alert(" So close, yet so far :( ");
            location.reload();
        }
    }

    //Display the time remaining
    document.getElementById("seconds").innerHTML = count;
}

//Add the eventListener for clicking in the beginning
cards.forEach(card => card.addEventListener("click", flipCard));

//Shuffle the cards for the initial level
shuffleCards();