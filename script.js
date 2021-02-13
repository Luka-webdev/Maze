import {
    tracks
}
from './tracks.js';

const ball = document.querySelector('.ball');
const areaGame = document.querySelector('.areaGame');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let flag = false;



const ballParameters = {
    size: 50,
    startPositionX: parseInt(getComputedStyle(areaGame).marginLeft),
    startPositionY: tracks[0].startPoint2.y - tracks[0].startPoint1.y - 25 + parseInt(getComputedStyle(areaGame).marginTop),
}
const areaGameParameters = {
    width: 1100,
    height: 550
}

const drawAreaGame = function () {
    canvas.width = areaGameParameters.width;
    canvas.height = areaGameParameters.height;
    ctx.fillStyle = '#2f3640';
    ctx.fillRect(0, 0, areaGameParameters.width, areaGameParameters.height);
}
drawAreaGame();

const drawMaze = function () {
    const track = tracks[0];
    ctx.beginPath();
    ctx.moveTo(track.startPoint1.x, track.startPoint1.y);
    for (let i = 0; i < track.lines1.length; i++) {
        ctx.lineTo(track.lines1[i].x, track.lines1[i].y);
    }
    ctx.moveTo(track.startPoint2.x, track.startPoint2.y);
    for (let i = 0; i < track.lines2.length; i++) {
        ctx.lineTo(track.lines2[i].x, track.lines2[i].y);
    }
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.stroke();
}

drawMaze();

const drawBall = function (e) {
    ball.style.top = ballParameters.startPositionY + "px";
    ball.style.left = ballParameters.startPositionX + "px";
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
        ballParameters.startPositionX = e.clientX - ballParameters.size / 2;
        ballParameters.startPositionY = e.clientY - ballParameters.size / 2;
        drawBall()
    }
}

areaGame.addEventListener('mousemove', move);