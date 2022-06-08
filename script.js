const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump');

    setTimeout (() => {
        mario.classList.remove('jump');
    }, 500 );};

    const loop = setInterval(() => {
        const pipeposition =  pipe.offsetLeft;
        const marioposition = +window.getComputedStyle(mario).bottom.replace('px','');

        if (pipeposition <= 120 && marioposition < 80 && pipeposition > 0) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipeposition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioposition}px`;

            mario.src = 'https://cdn.discordapp.com/attachments/947910673470480397/984168294397411428/game-over.png'
            mario.style.width = '75px'
            mario.style.marginLeft = '50px'

            clearInterval(loop);
        }
    }, 10)

document.addEventListener('keydown', jump);

//https://c.tenor.com/se0KvlrxCucAAAAj/fnf-sonic.gif