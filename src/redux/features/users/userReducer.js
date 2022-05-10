import { 
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR
} from "./userTypes";

const initialState = {
    loading: true,
    users: [],
    error: ""
}


const userReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case FETCH_USERS_REQUEST: return {
            ...state,
            loading: true
        }

        case FETCH_USERS_SUCCESS: return {
            loading: false,
            users: payload,
            error: ""
        }

        case FETCH_USERS_ERROR: return {
            loading: false,
            users: [],
            error: payload
        }
        default: return state
    }
}

export default userReducer