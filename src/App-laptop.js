import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "./store/store1";
import { decrement, increment, numberSliceSelector } from "./store/reducers/numberSlice";
import LaptopComponent from "./Component/LaptopComponent";

//import { addLaptop, laptopSliceSelector, remLaptop } from "./store/reducers/laptopSlice";

const App1 = () => {
  //const number = useSelector((store) => store.numberSlice.number);
  const number = useSelector(numberSliceSelector);
 // const count = useSelector((store) => store.laptopSlice.count);
 //const laptop = useSelector(laptopSliceSelector);
 const setState = useDispatch();


  return (
    <div>
      <div >
        <h1>Number Count : {number} </h1>
        <div>
          <button onClick={() => setState(increment(3))}>increment</button>
          <button onClick={() => setState(decrement(3))}>decrement</button>
        </div>
      </div>

      <div>
        <h1>Laptop </h1>
        <div>
          {/* <button onClick={() => setState(addLaptop(3))}>increment</button> */}
          {/* <button onClick={() => setState(remLaptop(3))}>decrement</button> */}
          <LaptopComponent/>
        </div>
      </div>
    </div>
  );
};

export default App1;
