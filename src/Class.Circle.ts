export class Circle{
    private radius : number ;

    constructor(radius : number ){
        this.radius = radius;
    }

    GetArea(){
        return new Promise((resolve, reject)=>{
            resolve(Math.PI * Math.pow( this.radius , 2));
        });
    }

}