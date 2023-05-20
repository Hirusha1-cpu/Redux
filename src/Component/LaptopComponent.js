import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLaptop, laptopSliceSelector } from "../store/reducers/laptopSlice2";



const LaptopComponent = () => {
  const laptop = useSelector(laptopSliceSelector);
  const setState = useDispatch();
  const price = useRef();
  const cpu = useRef();
  const gen = useRef();
  const ram = useRef();
  const hdd = useRef();
  const addLaptopHandle = () => {
    setState(addLaptop(
        price.current.value,
        cpu.current.value,
        gen.current.value,
        ram.current.value,
        hdd.current.value) 
        );
  };
  return (
    <div>
      <div>
        <h4>Add Laptop</h4>
        <input ref={price} type="text" placeholder="enter price" />
        <input ref={cpu} type="text" placeholder="enter cpu" />
        <input ref={gen} type="text" placeholder="enter gen" />
        <input ref={ram} type="text" placeholder="enter ram" />
        <input ref={hdd} type="text" placeholder="enter hdd" />

        <button onClick={addLaptopHandle}> add laptop</button>
      </div>
      {laptop.map((ele) => (
        <p key={ele.id}>
          {ele.price} | {ele.spec.cpu} | {ele.spec.gen} | {ele.spec.hdd} |{" "}
          {ele.spec.ram}
        </p>
      ))}
    </div>
  );
};

export default LaptopComponent;
