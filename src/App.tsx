// import {useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/features/counter/counterSlice";
// import type { RootState } from "./redux/store";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();
 
  // const {count} = useSelector((state: RootState) => state.counter)
  const {count} = useAppSelector((state) => state.counter)
  
  // const handleIncrement = () =>{
  //   dispatch(increment());
  // };

  const handleIncrement = (amount: number) =>{
    dispatch(increment(amount));
  };

  const handleDecrement = () =>{
    dispatch(decrement());
  }

  return (
    <div>
      <h1>Counter with Redux</h1>
      {/* <button onClick={handleIncrement}>Increment</button> */}
      <button onClick={() =>handleIncrement(1)}>Increment</button>
      <button onClick={() =>handleIncrement(5)}>Increment by 5</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default App
