import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootType } from "../redux/store"
import { setDecrement, setIncrement, setIncrementBy10 } from "../redux/counterSlice"

const Home = () => {
    const {counter} = useSelector((state:RootType) => ({counter : state.counter.counter}))
    const dispatch = useDispatch<AppDispatch>();

    const incrementHandler = () => {
        dispatch(setIncrement(1))
    }

    const decrementHandler = () => {
        dispatch(setDecrement(1))
    }

    const incrementBy10Handler = () => {
        dispatch(setIncrementBy10(10));
    }

    return (
        <>
          <h1>{counter}</h1>
          <div>
            <button className="increment_button" style={{padding:10,margin:5}} onClick={incrementHandler}>Increment</button>
            <button className="increase_by_10_button" style={{padding:10,margin:5}} onClick={incrementBy10Handler}>Increase by 10</button>
            <button className="decrement_button" style={{padding:10 , margin:5}} onClick={decrementHandler}>Decrement</button>
          </div>
        </>
    )
}

export default Home