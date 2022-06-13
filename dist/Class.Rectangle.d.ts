import { IShape } from "./IShape";
export declare class Rectangle implements IShape {
    private width;
    private height;
    constructor(width: number, height: number);
    GetArea(): Promise<unknown>;
}
