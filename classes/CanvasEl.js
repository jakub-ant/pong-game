"use strict";
export class CanvasEl {
    canvas = document.querySelector('.canvas');
    ctx = this.canvas.getContext("2d");
    scale = 10;
    constructor(PlayerX, PlayerY, PlayerHeigth, PlayerWidth, PlayerColor) {
        this.x = PlayerX;
        this.y = PlayerY;
        this.height = PlayerHeigth;
        this.width = PlayerWidth;
        this.color = PlayerColor;
        this.initialX = PlayerX;
        this.initialY = PlayerY;
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}