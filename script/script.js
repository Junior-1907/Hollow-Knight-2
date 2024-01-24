const knight = document.querySelector('.knight');
const enemy = document.querySelector('.enemy')
     
document.addEventListener('keydown', (event) => {
    
    if(event.code == 'Space' || event.code == 'KeyW' || event.code == 'ArrowUp'){
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
    animation();
    if(enemyPos <= 345 && enemyPos >= 210 && knightPos < 100){ //verificação
         console.log("Game Over");
         enemy.style.animation="none";
         enemy.style.left=`${enemyPos}px`;
         knight.style.display="none";
         
         clearInterval(loop);
        }
} , 50)

// BACKGROUND
const canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d');
const canvaW = canvas.width = 800;
const canvaH = canvas.height = 600;

const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
const a5 = document.getElementById('a5');
const a6 = document.getElementById('a6');
const a7 = document.getElementById('a7');
const a8 = document.getElementById('a8');
const a9 = document.getElementById('a9');
const a10 = document.getElementById('a10');

let x = 0;

function animation(){
    ctx.clearRect(0, 0, canvaW, canvaH);
    x--
    ctx.drawImage(a4, 0, 0);
}


