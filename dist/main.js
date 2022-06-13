"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Class_Circle_1 = require("./Class.Circle");
const Class_Rectangle_1 = require("./Class.Rectangle");
const Class_AreaCalculator_1 = require("./Class.AreaCalculator");
let smallCircle = new Class_Circle_1.Circle(3);
let smallRectangle = new Class_Rectangle_1.Rectangle(4, 4);
let areaCalculator = new Class_AreaCalculator_1.AreaCalculator();
areaCalculator.CalculateArea(smallCircle).then((area) => {
    console.log(area);
});
areaCalculator.CalculateArea(smallRectangle).then((area) => {
    console.log(area);
});
//# sourceMappingURL=main.js.map