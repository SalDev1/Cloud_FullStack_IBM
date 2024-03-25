import Shape from "./shape"

export default class Triangle extends Shape{
    constructor(width:number,height:number){
        super(width,height)
    }

    calculateArea(){
        return 0.5*this.width*this.height
    }
}