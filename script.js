const ball = document.querySelector('.ball');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let flag = false;

const ballParameters = {
    positionX: 0,
    positionY: 0,
    size: 50
}
const areaGame = {
    width: 1100,
    height: 550
}

const drawAreaGame = function () {
    canvas.width = areaGame.width;
    canvas.height = areaGame.height;
    ctx.fillStyle = '#2f3640';
    ctx.fillRect(0, 0, areaGame.width, areaGame.height);
}
drawAreaGame();




const drawBall = function (e) {
    ball.style.top = ballParameters.positionY + "px";
    ball.style.left = ballParameters.positionX + "px";
}
drawBall();

ball.addEventListener('mousedown', function (e) {
    flag = true;
})
ball.addEventListener('mouseup', function (e) {
    flag = false;
})
const move = function (e) {
    if (flag) {
        ballParameters.positionX = e.clientX - ballParameters.size / 2;
        ballParameters.positionY = e.clientY - ballParameters.size / 2;
        drawBall()
    }
}

ball.addEventListener('mousemove', move)