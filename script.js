// Pular
const knight = document.querySelector('.knight');
let knightPosX = parseInt(knight.offsetLeft);
let knightPosY;
let isJumping = false;
document.addEventListener('keydown', (e) => {
        if (e.code == 'Space' || e.code == 'KeyW' || e.code == 'ArrowUp') {
                if (isJumping) {
                        return;
                }
                else if (isJumping == false) {
                        knight.classList.add('isjumping');
                        isJumping = true;
                        setTimeout(() => {
                                knight.classList.remove('isjumping');
                                isJumping = false;
                        }, 1300);
                } //else if (double jump == true) {}


        }
})

// Andar
const keys = {
        a: {
                pressed:false,
        },
        d: {
                pressed:false,
        },
}
document.addEventListener('keydown', (event) => {
        switch (event.key) {
                case 'a':
                        keys.a.pressed = true;
                        break;
                case 'd':
                        keys.d.pressed = true;
                        break;
        }
})
document.addEventListener('keyup', (event) => {
        switch (event.key) {
                case 'a':
                        keys.a.pressed = false;
                        break;
                case 'd':
                        keys.d.pressed = false;
                        break;
        }
});

setInterval(()=>{     
        if(keys.a.pressed == true){
                knightPosX -= 2.5;
                knight.style.left =`${knightPosX}px`
        }
        if(keys.d.pressed == true){
                knightPosX += 2;
                knight.style.left =`${knightPosX}px`
        }
        if(knightPosX <= 10){
                knight.style.left = "10px";
        }
        if(knightPosX >= 1800){
                knight.style.left = "1800px";
        }
}, 2.5);


// Morrer.
const enemy = document.querySelector('.enemy');

const KillLoop = setInterval(() => {
        let enemyKill = enemy.offsetLeft;
        knightPosY = window.getComputedStyle(knight).bottom.replace('px', '');

        if (enemyKill <= knightPosX + 75 && enemyKill >= knightPosX - 75 && knightPosY < 140) {
                knight.style.display = "none";
                enemy.style.animation = "none";
                enemy.style.left = `${enemyKill}px`;
                console.log("GAME OVER");
                
                clearInterval(KillLoop);
        }
}, 50)

//left: 375px
//bottom: 140px;

// Background
const canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
const canvaW = canvas.width = 1920;
const canvaH = canvas.height = 800;

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
let x2 = 1920;
let moveSpeed = 2;

class Layer {
        constructor(image, moveSpeed, y_position) {
                this.x = 0;
                this.y = y_position;
                this.width = 1920;
                this.height = 800;
                this.x2 = this.width;
                this.image = image;
                this.speedModifier = moveSpeed;
        }
        draw() {
                ctx.drawImage(this.image, this.x, this.y);
                ctx.drawImage(this.image, this.x2, this.y);
        }
        update() {
                if (this.x < -1920) {
                        this.x = 1920 - this.speedModifier + this.x2;
                } else {
                        this.x -= this.speedModifier;
                }

                if (this.x2 < -1920) {
                        this.x2 = 1920 - this.speedModifier + this.x;
                } else {
                        this.x2 -= this.speedModifier;
                }
        }
}

const a2Layer = new Layer(a2, 1, 0);
const a4Layer = new Layer(a4, 4, -150);
const a5Layer = new Layer(a5, 2.5, 0);
const a6Layer = new Layer(a6, 1.8, 0);
const a7Layer = new Layer(a7, 1.5, 0);
const a8Layer = new Layer(a8, 2, 0);
const a9Layer = new Layer(a9, 2, 0);
const a10Layer = new Layer(a10, 1, 0);

const gameObjects = [a10Layer, a9Layer, a8Layer, a7Layer, a6Layer, a5Layer, a4Layer, a2Layer];

function animation() {
        ctx.clearRect(0, 0, canvaW, canvaH);
        gameObjects.forEach(object => {
                object.draw();
                object.update();
        })

        requestAnimationFrame(animation);

        setInterval(createMonster, 1000)

}
animation();

// Inimigos Variados

 class enemyClass {
         constructor(imagem,enemyVelocity,width){
                 this.x = 1920;
                 this.width = width;     
                 this.image = imagem;
                 this.class = "enemy";
                 this.enemyVelocity =  enemyVelocity;
}
}
const enemy0 = new enemyClass("./images/enemys/enemy0.gif", "100px" , -5);

function createMonster(){
        let enemyArray = [];

        let spawnMonsterChance = Math.random();

        if(spawnMonsterChance > 0.8){
                
                enemyArray.push()
        }
        else if(spawnMonsterChance > 0.6){
                
        }
        else if(spawnMonsterChance > 0.5){
                
        }
}


//class enemys
// Atacar?
// Double Jump
// Dash
// Geo points
// Tela Inicial
// Shop
// Itens