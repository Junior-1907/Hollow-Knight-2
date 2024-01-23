const knight = document.querySelector('.knight');
const enemy = document.querySelector('.enemy')
const enemykill = knight.offsetLeft + 45;
     

//função jump 
const jump = () => {
knight.classList.add('jump'); //adiciona a classe jump
    setTimeout( function () { 
        knight.classList.remove('jump');
    }, 1300 ); // remove a classe jump  daqui 1.3 segundos
}
document.addEventListener('keypress', jump); //adiciona um evento ao apertar uma tecla (função)

setInterval( () => { // cria um loop de verificação 
    const enemyPos = enemy.offsetLeft;
    const knightPos = window.getComputedStyle(knight).bottom.replace('px',''); // Tem que ser assim
    if(enemyPos <= 345 && enemyPos >= 210 && knightPos < 100){ //verificação
         console.log("Game Over");
         enemy.style.animation="none";
         enemy.style.left=`${enemyPos}px`;
         knight.style.display="none";
        }
} , 50)

