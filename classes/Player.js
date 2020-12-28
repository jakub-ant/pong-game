"use strict";
class Player extends CanvasEl {
    move(e) {
        if (this._y == 200) {
            this._y -= scale * 2;

        } else if (this._y == 0) {
            this._y += scale * 2;
        }
        if (e) {
            this._y -= scale * 2;
        } else if (!e) {
            this._y += scale * 2;
        }
    }
    moveItself() {
        if (this._y === 0 || this._y === 200)
            this.flag = !this.flag;

        if (this.flag) {
            this._y -= scale * 2;

        } else if (!this.flag) {
            this._y += scale * 2;
        }
    }
}
