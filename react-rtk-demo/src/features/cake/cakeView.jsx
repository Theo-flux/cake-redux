import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {cakeActions} from './cakeSlice'

function CakeView() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  const {ordered, restocked} = cakeActions
  const dispatch = useDispatch()

  return (
    <div>
        <h2>Number of cakes - {numOfCakes}</h2>
        <button 
          style={{marginRight:'15px'}}
          onClick={() => dispatch(ordered())}  
        >
          order cake
        </button>
        <button
          onClick={() => dispatch(restocked(3))}
        >
          restock cake
        </button>
    </div>
  )
}

export default CakeView