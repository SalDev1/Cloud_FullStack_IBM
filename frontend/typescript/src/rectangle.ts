import Shape from "./shape"

export default class Rectangle extends Shape{
    constructor(width:number,height:number){
        super(width,height)
    }

    calculateArea(){
        return this.width*this.height
    }
}