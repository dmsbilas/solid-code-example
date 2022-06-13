"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaCalculator = void 0;
const Class_Circle_1 = require("./Class.Circle");
class AreaCalculator {
    constructor() {
        this.circle = new Class_Circle_1.Circle(0);
    }
    CalculateArea(Shape) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                if (Shape.radius) {
                    resolve(Math.PI * Math.pow(Shape.radius, 2));
                }
                else if (Shape.width && Shape.height) {
                    resolve(parseInt(Shape.width) * parseInt(Shape.height));
                }
            }));
        });
    }
    ShowCircleRadius(Shape) {
        return new Promise((resolve, reject) => {
            this.circle.setRadius(Shape.radius).then((done) => {
                resolve(this.circle.getRadius());
            });
        });
    }
}
exports.AreaCalculator = AreaCalculator;
//# sourceMappingURL=Class.AreaCalculator.js.map