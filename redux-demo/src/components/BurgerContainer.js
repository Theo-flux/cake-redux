import React from 'react'
import { connect } from 'react-redux'
import { buyBurger } from '../redux'

function BurgerContainer({numOfBurger, buyBurger}) {
  return(
        <div>
            <h1>Number of burgers - {numOfBurger}</h1>
            <button onClick={buyBurger}>Buy Burger</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfBurger: state.burgerReducer.numOfBurger
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyBurger: () => dispatch(buyBurger())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BurgerContainer);
