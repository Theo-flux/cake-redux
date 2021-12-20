import { combineReducers } from "redux";
import cakeReducer from "./features/cake/cakeReducer";
import iceCreamReducer from "./features/icecream/iceCreamReducer";

const rootReducer = combineReducers({
    cakeReducer,
    iceCreamReducer
})

export default rootReducer

