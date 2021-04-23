"use strict";
import {
    CanvasEl
} from './CanvasEl.js'

export class Ball extends CanvasEl {
    constructor(x, y, heigth, width, color, flag) {
        super(x, y, heigth, width, color);
        this._flag = flag;
    }
    move() {
        if (this._flag) {
            this._x -= this.scale;

        } else if (!this._flag) {
            this._x += this.scale;
        }
    }
    hit(xPlayer1, yPlayer1, xPlayer2, yPlayer2, heightPlayer1, heightPlayer2) {
        if (this._x === xPlayer1) {
            if (this._y + this._height < yPlayer1)
                return;
            if (this._y >= yPlayer1 + heightPlayer1)
                return;
            this._flag = !this._flag;
            this.lastTouch = 1;
            this.changePosition();
        }
        if (this._x + this._width === xPlayer2) {
            if (this._y + this._height < yPlayer2)
                return;
            if (this._y >= yPlayer2 + heightPlayer2)
                return;
            this._flag = !this._flag;
            this.lastTouch = 2;
            this.changePosition();

        }
    }
    changePosition() {
        let used = false;
        if (used)
            clearInterval(interval);
        used = true;
        let randomInt = CanvasEl.getRandomInt(0, 2);

        const interval = setInterval(
            () => {
                switch (randomInt) {
                    case 0:
                        this._y++;

                        break;
                    case 1:
                        this._y--;

                        break;

                    default:
                        break;
                }
            }, 100);
    }
    leftCanvas() {
        const leftCanvasEvent = new CustomEvent('leftCanvasEvent', {
            detail: {
                lastTouch: this.lastTouch
            }
        });
        if (this._x < 0 || this._x > this.ctx.canvas.width || this.y < 0 || this.y > this.ctx.canvas.height) {
            this._x = this._initialX;
            this._y = this._initialY;
            this._flag = !this._flag;
            this.lastTouch = 0;
            window.dispatchEvent(leftCanvasEvent);
        }
    }
}