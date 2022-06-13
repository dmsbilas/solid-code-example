export class Rectangle{
    private width : number;
    private height : number;

    constructor(width:number, height:number){
        this.width = width;
        this.height = height;
    }

    GetArea(){
        return new Promise((resolve, reject)=>{
            resolve(this.width*this.height);
        });
    }

}