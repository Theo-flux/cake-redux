import React from 'react'
import { connect } from 'react-redux'
import { isBroke } from '../redux'

function BrokeContainer({noMoney, isBroke}) {
  return(
        <div>
            <h1>Do you have money - {noMoney ? "true": "false"}</h1>
            <button onClick={isBroke}>Money ?</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        noMoney: state.brokeReducer.noMoney
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        isBroke: () => dispatch(isBroke())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps

)(BrokeContainer)