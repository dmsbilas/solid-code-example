import { IShape } from "./IShape";

export class Circle implements IShape{
    private radius : number ;

    constructor(radius : number ){
        this.radius = radius;
    }

    setRadius(radius){
        return new Promise((resolve, reject)=>{
            resolve(this.radius = radius);
        });
    }

    getRadius(){
        return new Promise((resolve, reject)=>{
            resolve(this.radius);
        });
    }

    GetArea(){
        return new Promise((resolve, reject)=>{
            resolve(Math.PI * Math.pow( this.radius , 2));
        });
    }

}