// Seleção de elementos do DOM\\

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const grass = document.querySelector('.grass');
const textStart = document.querySelector('text-start');
const audioStart = new Audio('./audio/theme.mp3');
const audioGameOver = new Audio('./audio/gameover.mp3');
const floor1 = document.querySelector('.floor-1');
const floor2 = document.querySelector('.floor-2');
const floor3 = document.querySelector('.floor-3');

// Adicionando animação e áudio ao iniciar o jogo \\

const start = () => {
    textStart.style.color = "rgb(236, 236, 236)";
    pipe.classList.add('pipe-animation');
    mario.src = './img/mario.gif';
    mario.style.width = '150px';
    mario.style.marginLeft = '50px';

    setInterval(() => {
        grass.classList.add('grass-animation');
    }, 8000);

    setInterval(() => {
        floor1.classList.add('floor-animation-1');
    }, 0);

    setInterval(() => {
        floor2.classList.add('floor-animation-2');
    }, 0);

    setInterval(() => {
        floor3.classList.add('floor-animation-3');
    }, 3100);

    audioStart.play();
}

document.addEventListener('keydown', start);
document.addEventListener("click", start);

// Adicionando animação de pulo do Mario \\

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 1500); 
}

document.addEventListener('keydown', jump);
document.addEventListener("click", jump);