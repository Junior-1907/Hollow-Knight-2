const knight = document.querySelectorAll('.knight');
const enemy = document.querySelectorAll('.enemy')

function jump(){
    knight.classList.add('jump');
}

document.addEventListener('onkeydown', jump());