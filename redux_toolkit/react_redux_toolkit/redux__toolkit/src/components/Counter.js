import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  const counter = useSelector((state)=>state.counter);
  const showCounter = useSelector((state)=>state.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({
      type:"toggle", 
    })
  };

  const counterIncrement=()=>{
    dispatch({
      type:"increment"
    })
  }

  const counterDecrement=()=>{
    dispatch({
      type:"decrement"
    })
  }

  const IncreaseBy5 = ()=>{
    dispatch({
      type:"increase", value: 5
    })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{showCounter && counter}</div>
      <div>
        <button onClick={counterIncrement}>
          Increment
        </button>
        <button onClick={IncreaseBy5}>
          Increase By 5
        </button>
        <button onClick={counterDecrement}>
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
