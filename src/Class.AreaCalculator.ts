import { Circle } from "./Class.Circle";
import { Rectangle } from "./Class.Rectangle";


export class AreaCalculator {

    circle : Circle = new Circle(0);

    async CalculateArea(Shape) {
        return new Promise(async (resolve, reject) => {
           resolve(Shape.GetArea());
        });
    }

}