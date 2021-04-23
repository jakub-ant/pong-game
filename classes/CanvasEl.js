"use strict";
export class CanvasEl {
    canvas = document.querySelector('.canvas');
    ctx = this.canvas.getContext("2d");
    scale = 10;
    constructor(x, y, heigth, width, color) {
        this._x = x;
        this._y = y;
        this._height = heigth;
        this._width = width;
        this._color = color;
        this._initialX = x;
        this._initialY = y;
    }
    draw() {
        this.ctx.fillStyle = this._color;
        this.ctx.fillRect(this._x, this._y, this._width, this._height);
    }
    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}