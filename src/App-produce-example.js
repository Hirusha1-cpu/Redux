 import {produce} from 'immer'
 import { useState } from 'react';
const obj = {
  name: 'amila',
  city: 'tangalle',
  position: 'web developer',
  address: {
    add1: '34',
    add2: 'pugoda'
  }
}

const objCopy = produce(obj,(copy)=>{ // wenas karanna one thana witarak spread nokara wenas kragnna puluwan
  copy.address.add2 ='sagittaire'
})

const App2 = () => {
  const [test, setTest]= useState({...obj})
  const clickHandle= () => {
    setTest(produce((copy)=>{
      copy.address.add2 = 'Hirusha'
    })) // mekedi usestate ekak use karama obj copy ekeki wage produce ekata denna one na immer eken ara gnnawa 1st parameter eka
  }

  console.log('test', test);
  return (
    <div>
      <button onClick={clickHandle}>Click me</button>
    </div>
  );
};

export default App2;
