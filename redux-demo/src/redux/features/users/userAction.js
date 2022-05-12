import axios from "axios";

import { 
    FETCH_USERS_REQUEST, 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_ERROR 
} from "./userTypes";

const url = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
        info: "fetch request"
    }
}

export const fetchUsersSucces = (user) => {
    return {
        type: FETCH_USERS_SUCCESS,
        info: "fetch request successful",
        payload: user
    }
}

export const fetchUsersError = (error) => {
    return {
        type: FETCH_USERS_ERROR,
        info: "fetch request error",
        payload: error
    }
}

export const fetchUsers = () => {
   return ( dispatch ) => {
       dispatch(fetchUsersRequest())
        axios.get(url)
        .then( response => {
            const user = response.data
            dispatch(fetchUsersSucces(user))
        })
        .catch(error => {
            const errMsg = error.message
            dispatch(fetchUsersError(errMsg))
        })
             
   } 
}

