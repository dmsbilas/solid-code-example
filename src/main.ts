import { Circle } from "./Class.Circle";
import { Rectangle } from "./Class.Rectangle";
import { AreaCalculator } from "./Class.AreaCalculator";


let smallCircle = new Circle(3);
let smallRectangle = new Rectangle(4,4);


let areaCalculator = new AreaCalculator();



areaCalculator.CalculateArea(smallCircle).then((area)=>{
    console.log(area);
});
areaCalculator.CalculateArea(smallRectangle).then((area)=>{
    console.log(area);
});

areaCalculator.ShowCircleRadius(smallCircle).then((r)=>{
console.log(r);
});
