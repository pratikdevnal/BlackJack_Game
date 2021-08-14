let player ={
    name:"Lion",
    chips:200
}

let cards=[0];
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";


let playerEl = document.getElementById("player-el");
playerEl.textContent=player.name+" :$"+player.chips;
let newcard = document.getElementById("newCard");
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");

let cardEl = document.getElementById("card-el");

function randomNumber()
{
    let randomNum = Math.floor(Math.random()*13)+1
    if(randomNum===1)
    {   
        console.log(randomNum);
        return 11;
    }
    else if(randomNum>10)
    {
        console.log(randomNum);
        return 10;
    }
    else
    {
        console.log(randomNum);
        return randomNum;

    }

    
    
}


function startGame()
{   
    
    isAlive = true;
  
    let firstCard =randomNumber();
    let seconCard =randomNumber();
    cards=[firstCard,seconCard];
    sum = firstCard+seconCard;
    cardEl.textContent="Cards: ";
    renderGame();
}

let i=0;
function renderGame()
{   
   
     for( i; i<cards.length; i++)
        {
            cardEl.textContent+=" "+cards[i]+" ";
            
           
        }
    
        sumEl.textContent="Sum: "+sum;


        if(sum<=20)
            {
                message="Do you want to Draw another Card?";
                
            }
        else if(sum===21)
            {   
                message="You've got Blackjack congratulation";
                
                player.chips=player.chips*2;
                playerEl.textContent=player.name+" :$"+player.chips;
                hasBlackJack = true;
                newcard.innerHTML="You Won";
            
            }
        else
            {
                message="You are Out of the Game";
               
                player.chips=0;
                playerEl.textContent=player.name+" :$"+player.chips;
                isAlive = false;
                newcard.innerHTML="Game Over";
            }



    if(hasBlackJack===true)
            {
                console.log("Take your money and fuck off")
            }

        
        
        messageEl.textContent=message;
        
}

function newCard()
{   
    if(isAlive===true && hasBlackJack===false)
    {
         let card = randomNumber();
    
 sum += card; 
    cards.push(card);
   
    
    renderGame();
    }
   
    
}

// let randomNumber = Math.floor(Math.random()*6);
// console.log(randomNumber+1);

// let some = {
//     name:"pratik",
//     age:22,
//     studying:true,
//     skills:["c","cpp","java","javascript"]
// }
// console.log(some.skills);
// console.log(some.age);
// console.log(some.name);
// console.log(some.studying);