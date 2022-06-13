import { Circle } from "./Class.Circle";
import { Rectangle } from "./Class.Rectangle";


export class AreaCalculator {

    async CalculateArea(Shape) {
        return new Promise(async (resolve, reject) => {
            console.log(Shape);

            // if (typeof (Shape) === typeof (new Circle(0))) {
            //     resolve(await Shape.GetArea());
            // }

            // if (typeof (Shape) === typeof (new Rectangle(0, 0))) {
            //     resolve(await Shape.GetArea());
            // }

            resolve(Shape.GetArea());

        });



    }

}