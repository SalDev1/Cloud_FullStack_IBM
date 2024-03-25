export default abstract class Shape {
    constructor(public width:number,public height:number){
    }
    abstract calculateArea(): number
    toString(){
        return this.constructor.name
    }
}