import { of , from, interval, fromEvent} from "../node_modules/rxjs/dist/types/index";

/*
  I have the capability to create observables on any 
  of the values.
*/

 const observable = of(1)    // Creating Observable for a unique single value.
// const observable = from([1,2,3])  // Creating Observable for an array of values.
// const observable = interval(100)   //  Produces a value , interval gets an array with given number of elements.

// const observable = fromEvent(document,'click')

// To subscribe to the feature we do this.
const subscription = observable.subscribe((value: number) => console.log(value), 
(error:any)=>console.log(error),()=>console.log('completed'))

subscription.unsubscribe()