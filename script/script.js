const knight = document.querySelector('.knight');
const enemy = document.querySelector('.enemy')
const enemykill = knight.offsetLeft + 45;
     

//função jump 

// const jump = () => {

//     if(knight.classList.contains('jump')){ return } // retorna caso ja tenha pulado anteriormente

// knight.classList.add('jump'); //adiciona a classe jump
//     setTimeout( function () { 
//         knight.classList.remove('jump');
//     }, 1300 ); // remove a classe jump  daqui 1.3 segundos
// }
document.addEventListener('keydown', (event) => {
    
    if(event.code == 'Space'){
        if(knight.classList.contains('jump')){ 
            return;
     } // retorna caso ja tenha pulado anteriormente

        knight.classList.add('jump'); //adiciona a classe jump
        
        setTimeout( function () { 
            knight.classList.remove('jump');
        }, 1300 ); // remove a classe jump  daqui 1.3 segundos
    }
})
// document.addEventListener('keypress', jump); //adiciona um evento ao apertar uma tecla (função)

var loop = setInterval( () => { // cria um loop de verificação 
    const enemyPos = enemy.offsetLeft;
    const knightPos = window.getComputedStyle(knight).bottom.replace('px',''); // Tem que ser assim
    if(enemyPos <= 345 && enemyPos >= 210 && knightPos < 100){ //verificação
         console.log("Game Over");
         enemy.style.animation="none";
         enemy.style.left=`${enemyPos}px`;
         knight.style.display="none";

         clearInterval(loop);
        }
} , 50)

// BACKGROUND
var gameBoard = document.getElementsByClassName('game-board');
var background = gameBoard.getContext('2d');
var bgImage = new Image();
bgImage.src = "images/background.png";

var bg1 = {
    width:1300,
    height:600,
    x:0,
    y:0,
}
var bg2 = {
    width:1300,
    height:600,
    x:1300,
    y:0,
}
var bg3 = {
    width:1300,
    height:600,
    x:2600,
    y:0,
}
var bgInterval = setInterval(function (){
    bg1.x -= 15;
    bg2.x -= 15;
    bg3.x -= 15;
    if(bg1.x + bg1.width <= 0){
        bg1.x = bg3.x + bg3.width;
    }
    if(bg2.x + bg2.width <= 0){
        bg2.x = bg1.x + bg1.width;
    }
    if(bg3.x + bg3.width <= 0){
        bg3.x = bg2.x + bg2.width;
    }
    background.drawImage(bgImage, bg1.x , bg1.y);
},50);