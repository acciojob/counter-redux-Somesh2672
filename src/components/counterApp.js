import React from 'react';
import {useSelector,useDispatch} from "react-redux";
// import { decrement, increment } from '../redux/action/counterAction';
import { decrease, increase, } from '../redux/actions/counterActions';

const CounterApp = () => {
    const count=useSelector(state=>state.count);
    const dispatch=useDispatch();
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(increase())}>increment</button>
            <button onClick={()=>dispatch(decrease())}>decrement</button>

        </div>
    );
}

export default CounterApp;


