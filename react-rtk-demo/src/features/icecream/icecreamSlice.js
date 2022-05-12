// import cakeActions  from '../cake/cakeSlice'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numOfIceCream: 54
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCream--
        },
        restocked: (state, action) => {
            state.numOfIceCream += action.payload
        }
    },
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIceCream--
    //     }
    // }
    
    // extraReducers: (builder) => {
    //     builder.addCase(cakeActions.ordered, state => {
    //         state.numOfIceCream--
    //     })
    // }
})

const icecreamActions = icecreamSlice.actions


export default icecreamSlice.reducer
export {icecreamActions}