import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { icecreamActions } from './icecreamSlice'


function IcecreamView() {
  const numOfIceCreams = useSelector((state) => state.icecream.numOfIceCreams)
  const dispatch = useDispatch()
  const {ordered, restocked} = icecreamActions

  return (
    <div>
        <h2>Number of ice creams - {numOfIceCreams}</h2>
        <button 
          style={{marginRight:'15px'}}
          onClick={() => dispatch(ordered())}
        
        >order ice cream</button>
        <button
          onClick={() => dispatch(restocked(3))}
        >restock ice cream</button>
    </div>
  )
}

export default IcecreamView