import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const number = useSelector(store=> store.number)
  const setState = useDispatch()

  return (
    <div>{number}
    <div>
      <button onClick={()=>{
        setState({
          type: 'increament',
          payload: 6
        })
      }}>Increament</button>
      <button onClick={()=>{
        setState({
          type: 'decreament',
          payload:3
        })
      }}>Decrement</button>
    </div>
    </div>
    
  )
}

export default App