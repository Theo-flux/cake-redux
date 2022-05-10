import { combineReducers } from "redux";
import cakeReducer from "./features/cake/cakeReducer";
import iceCreamReducer from "./features/icecream/iceCreamReducer";
import burgerReducer from "./features/burger/burgerReducer";
import brokeReducer from "./features/broke/brokeReducer"

const rootReducer = combineReducers({
    cakeReducer,
    iceCreamReducer,
    burgerReducer,
    brokeReducer
})

export default rootReducer

