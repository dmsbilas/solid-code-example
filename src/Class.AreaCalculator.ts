import { Circle } from "./Class.Circle";
import { Rectangle } from "./Class.Rectangle";


export class AreaCalculator {

    circle : Circle = new Circle(0);

    async CalculateArea(Shape) {
        return new Promise(async (resolve, reject) => {
            if (Shape.radius) {
                resolve(Math.PI * Math.pow(Shape.radius, 2));
            } else if (Shape.width && Shape.height) {
                resolve(parseInt(Shape.width) * parseInt(Shape.height));
            }
        });
    }

    ShowCircleRadius(Shape){
        return new Promise((resolve, reject)=>{
            this.circle.setRadius(Shape.radius).then((done)=>{
                resolve(this.circle.getRadius());
            });
        });
    }

}