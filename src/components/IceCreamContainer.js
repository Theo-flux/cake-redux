import { connect } from "react-redux"
import { buyIceCream } from "../redux"

function IceCreamContainer({numOfIceCream, buyIceCream}){
    return(
        <div>
            <h1>Number of Ice Cream - {numOfIceCream}</h1>
            <button onClick={buyIceCream}>Buy Ice Cream</button>
        </div>
    )
}


// create function to make available the ice cream state as props in the iceCreamContainer component
const mapStateToprops = state => {
    return{
        numOfIceCream: state.iceCreamReducer.numOfIceCream
    }
}

// create function to make available the ice cream dispatch as props in the iceCreamContainer component
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToprops,mapDispatchToProps)(IceCreamContainer)

