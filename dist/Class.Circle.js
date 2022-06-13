"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    GetArea() {
        return new Promise((resolve, reject) => {
            resolve(Math.PI * Math.pow(this.radius, 2));
        });
    }
}
exports.Circle = Circle;
//# sourceMappingURL=Class.Circle.js.map