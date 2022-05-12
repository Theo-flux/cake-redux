import React from 'react'
import { useSelector } from 'react-redux'


function CakeView() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes)

  return (
    <div>
        <h2>Number of cakes - {numOfCakes}</h2>
        <button style={{marginRight:'15px'}}>order cake</button>
        <button>restock cake</button>
    </div>
  )
}

export default CakeView