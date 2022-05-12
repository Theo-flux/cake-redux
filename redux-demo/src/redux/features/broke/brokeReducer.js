import { IS_BROKE } from "./brokeTypes";

const initialState = {
    noMoney: false
}

const brokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_BROKE: return {
            ...state,
            noMoney: !state.noMoney
        }

        default: return state
    }    
}

export default brokeReducer;