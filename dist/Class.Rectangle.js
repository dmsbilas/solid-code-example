"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    GetArea() {
        return new Promise((resolve, reject) => {
            resolve(this.width * this.height);
        });
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=Class.Rectangle.js.map