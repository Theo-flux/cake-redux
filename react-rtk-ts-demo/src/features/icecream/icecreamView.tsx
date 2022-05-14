import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { icecreamActions } from './icecreamSlice'


function IcecreamView() {
  const [count, setCount] = useState(1)
  const numOfIceCreams = useAppSelector((state) => state.icecream.numOfIceCreams)
  const dispatch = useAppDispatch()
  const {ordered, restocked} = icecreamActions

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    setCount(parseInt(e.target.value))
  }

  return (
    <div>
        <h2>Number of ice creams - {numOfIceCreams}</h2>
        <input
          style={{
            padding: '.5em 1em',
            marginBottom: '20px'
          }}
          type= 'number'
          placeholder='Enter the number of icecreams you wish to buy'
          value={count}
          onChange={(event) => handleChange(event)}
        />
        <br/>
        <button 
          style={{marginRight:'15px'}}
          onClick={() => dispatch(ordered())}
        
        >order ice cream(s)</button>
        <button
          onClick={() => dispatch(restocked(count))}
        >restock ice cream</button>
    </div>
  )
}

export default IcecreamView