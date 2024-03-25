import Rectangle from "./rectangle.js"
import Triangle from "./triangle.js"

class Main{
    static display(shape) {
        console.log(`Area of ${shape.toString()} is ${shape.calculateArea()}`)
    }
}

// Polymorphic Behaviors.
const rectangle = new Rectangle(23.4,34.5,"rectangle")
const traingle = new Triangle(23.4,34.5,"triangle")

Main.display(rectangle)
Main.display(traingle)