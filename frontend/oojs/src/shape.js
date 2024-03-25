export default class Shape {
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    calculateArea(){
        return 0.0;
    }
    toString(){
        return this.constructor.name;
    }
}