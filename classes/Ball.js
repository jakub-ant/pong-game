"use strict";
import {
    CanvasEl
} from './CanvasEl.js'

export class Ball extends CanvasEl {
    constructor(x, y, heigth, width, color, flag) {
        super(x, y, heigth, width, color);
        this.flag = flag;
    }
    move() {
        if (this.flag) {
            this.x -= this.scale;

        } else if (!this.flag) {
            this.x += this.scale;
        }
    }
    hit(xPlayer1, yPlayer1, xPlayer2, yPlayer2, heightPlayer1, heightPlayer2) {
        if (this.x === xPlayer1) {
            if (this.y + this.height < yPlayer1)
                return;
            if (this.y >= yPlayer1 + heightPlayer1)
                return;
            this.flag = !this.flag;
            this.lastTouch = 1;
            this.changePosition();
        }
        if (this.x + this.width === xPlayer2) {
            if (this.y + this.height < yPlayer2)
                return;
            if (this.y >= yPlayer2 + heightPlayer2)
                return;
            this.flag = !this.flag;
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
                        this.y++;

                        break;
                    case 1:
                        this.y--;

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
        if (this.x < 0 || this.x > this.ctx.canvas.width || this.y < 0 || this.y > this.ctx.canvas.height) {
            this.x = this.initialX;
            this.y = this.initialY;
            this.flag = !this.flag;
            this.lastTouch = 0;
            window.dispatchEvent(leftCanvasEvent);
        }
    }
}