const startContainer=document.querySelector('.start');
const gameContainer=document.querySelector('.game');
const scoreContainer=document.querySelector('.score');

 let previousRenderedTime=0;

function playGame(milliseconds)
{
   console.log(milliseconds);
 //  previousRenderedTime=milliseconds;
   window.requestAnimationFrame(playGame);   //we can create a animation loop
};


function startGame(){

     // hide the start container

     startContainer.classList.add('hide');

     //create car

     const car=document.createElement('div');
    car.setAttribute('class','car');

     //add it inside game container

     gameContainer.appendChild(car); 
     var top=0;
    

     //create lines

     for(var i=0;i<4;i++)
     {
        const line=document.createElement('div');
        line.classList.add('line');
        line.style.top=top+'px';
        gameContainer.appendChild(line);
        top+=150;
     }
     //add them in game container
}

window.requestAnimationFrame(playGame);

startContainer.addEventListener('click',startGame);
