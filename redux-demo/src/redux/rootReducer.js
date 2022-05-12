import { combineReducers } from "redux";
import cakeReducer from "./features/cake/cakeReducer";
import iceCreamReducer from "./features/icecream/iceCreamReducer";
import burgerReducer from "./features/burger/burgerReducer";
import brokeReducer from "./features/broke/brokeReducer"
import userReducer from "./features/users/userReducer";

const rootReducer = combineReducers({
    cakeReducer,
    iceCreamReducer,
    burgerReducer,
    brokeReducer,
    userReducer
})

export default rootReducer

