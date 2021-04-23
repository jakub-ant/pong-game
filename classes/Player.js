"use strict";
import {CanvasEl} from './CanvasEl.js'
export class Player extends CanvasEl {
    move(e) {
        if (this.y == 200) {
            this.y -= this.scale * 2;

        } else if (this.y == 0) {
            this.y += this.scale * 2;
        }
        if (e) {
            this.y -= this.scale * 2;
        } else if (!e) {
            this.y += this.scale * 2;
        }
    }
    moveItself() {
        if (this.y === 0 || this.y === 200)
            this.flag = !this.flag;

        if (this.flag) {
            this.y -= this.scale * 2;

        } else if (!this.flag) {
            this.y += this.scale * 2;
        }
    }
}
