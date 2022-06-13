import { IShape } from "./IShape";
export declare class Circle implements IShape {
    private radius;
    constructor(radius: number);
    setRadius(radius: any): Promise<unknown>;
    getRadius(): Promise<unknown>;
    GetArea(): Promise<unknown>;
}
