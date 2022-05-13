import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { InitialState } from './types';

const initialState: InitialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState: initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCakes--
        },
        restocked: (state, action: PayloadAction<number>) => {
            state.numOfCakes += action.payload
        }
    }
})

const cakeActions = cakeSlice.actions

export default cakeSlice.reducer
export { cakeActions }

