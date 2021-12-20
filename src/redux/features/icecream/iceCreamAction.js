import BUY_ICECREAM from "./iceCreamTypes";

// create the action creator
function buyIceCream(){
    return {
        type: BUY_ICECREAM,
        info: "action creator to buy ice cream from the shop"
    }
}

export default buyIceCream

