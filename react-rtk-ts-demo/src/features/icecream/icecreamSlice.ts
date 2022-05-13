// import cakeActions  from '../cake/cakeSlice'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InitialState } from './types'

const initialState: InitialState = {
    numOfIceCreams: 54
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCreams--
        },
        restocked: (state, action: PayloadAction<number>) => {
            state.numOfIceCreams += action.payload
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