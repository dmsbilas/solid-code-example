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
class AreaCalculator {
    CalculateArea(Shape) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                console.log(Shape);
                // if (typeof (Shape) === typeof (new Circle(0))) {
                //     resolve(await Shape.GetArea());
                // }
                // if (typeof (Shape) === typeof (new Rectangle(0, 0))) {
                //     resolve(await Shape.GetArea());
                // }
                resolve(Shape.GetArea());
            }));
        });
    }
}
exports.AreaCalculator = AreaCalculator;
//# sourceMappingURL=Class.AreaCalculator.js.map