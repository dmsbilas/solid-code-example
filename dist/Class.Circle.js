"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    setRadius(radius) {
        return new Promise((resolve, reject) => {
            resolve(this.radius = radius);
        });
    }
    getRadius() {
        return new Promise((resolve, reject) => {
            resolve(this.radius);
        });
    }
}
exports.Circle = Circle;
//# sourceMappingURL=Class.Circle.js.map