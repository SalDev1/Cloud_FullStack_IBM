import Shape from './shape.js';


// Rectangle is a Shape , is-a relationship.
export default class Rectangle extends Shape{
    constructor(width,height){
        super(width,height)
    }

    // Overwriting --> Polymorphism , redefining the calculate area.
    calculateArea(){
        return this.width * this.height;
    }
}