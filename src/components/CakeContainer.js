import React from 'react'
import {buyCake}  from '../redux'
import { connect } from 'react-redux'

function CakeContainer({numOfCakes, buyCake}){
    return(
        <div>
            <h1>Number of cakes - {numOfCakes}</h1>
            <button onClick={buyCake}>Buy Cake</button>
        </div>
    )
}

// create a function to map the app states to the cakeContainer props
const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cakeReducer.numOfCakes
    }
}

// create a function to map the app dispatch to the cakeContainer Props
const mapDispatchToProps = (dispatch) => {
    return{
        buyCake: () => {dispatch(buyCake())}
    }
}

// connect the map function to the cakeContainer component
export default 
    connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
