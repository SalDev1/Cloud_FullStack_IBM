import Shape from './shape.js';


// Rectangle is a Shape , is-a relationship.
export default class Triangle extends Shape{
    constructor(width,height){
        super(width,height)
    }

    // Overwriting --> Polymorphism , redefining the calculate area.
    calculateArea(){
        return 0.5 * this.width * this.height;
    }
}