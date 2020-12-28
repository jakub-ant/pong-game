"use strict";
class Game {
    constructor(canvas, ctx, scale, playerColor) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.scale = scale;
        this.player1 = new Player(20, 100, 100, 30, playerColor);
        this.player2 = new Player(450, 100, 100, 30, playerColor);
        this.player2.flag = true;
        this.ball = new Ball(canvas.width / 2 - scale, canvas.height / 2 - scale, 20, 20, playerColor, CanvasEl.getRandomInt(0, 1) === 0 ? true : false);
        this.setEventListeners();
        this.setInterval();
    }
    setEventListeners() {
        window.addEventListener("leftCanvasEvent", (e) => {
            const resultPlayer1 = document.querySelector('#player1 span'),
                resultDraw = document.querySelector('#draw span'),
                resultPlayer2 = document.querySelector('#player2 span');
            const result = e.detail.lastTouch;
            if (result === 1) {
                resultPlayer1.textContent++;
            } else if (result === 2) {
                resultPlayer2.textContent++;
            } else {
                resultDraw.textContent++;
            }
        });
        window.addEventListener('keydown', (e) => {
            let key;
            if (e.key === "ArrowUp" || e.key === 'ArrowLeft') {
                key = true;
            } else if (e.key === "ArrowDown" || e.key === 'ArrowRight') {
                key = false;
            }
            this.player1.move(key);
        });
    }
    setInterval() {
        setInterval(() => {
            this.ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.player2.moveItself();
            this.player1.draw();
            this.player2.draw();
            this.ball.move();
            this.ball.draw();
            this.ball.hit(this.player1._x + this.player1._width, this.player1._y, this.player2._x, this.player2._y, this.player1._height, this.player2._height);
            this.ball.leftCanvas();
        }, 100);

    }

}
