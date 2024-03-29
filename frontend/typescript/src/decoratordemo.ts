
// A constructor function.
function simpleDecorator(constructor:Function) {
    console.log('MyDecorator called')
}

function propertyDecorator(target:any,propertyKey:string) {
    console.log(`target: ${target}`)
    // console.log(`target.constructor: ${target.constructor}`)
    console.log(`property name : ${propertyKey}`)
}

// Adding method decorator function.
// descriptor --> describes the properties of the method.
function methodDecorator(target: any, methodName:string, descriptor?: PropertyDescriptor) {
    console.log(`method decorator : ${methodName} called`)
}
// A class.
// class level --> property decorator --> method decorator. 
// method --> property --> class (Order of execution).
@simpleDecorator
class WithDecorator {

    @propertyDecorator
    productId: number = 1

    constructor() {
        console.log('inside constructor')
    }

    @methodDecorator
    print() {
        console.log('printing')
    }
}
// Defining the object of the class WithDecorator. 

/*
  When you defined the object , 
  1] firstly invokes the simpledecorator and after processing it , it moves 
  to the constructor function.

  To invoke the typescript file , here are the commands --> 
  1) npx tsc src/decoratordemo.ts
*/
const inst1 = new WithDecorator()
inst1.productId = 20
const inst2 = new WithDecorator()
inst1.print();

