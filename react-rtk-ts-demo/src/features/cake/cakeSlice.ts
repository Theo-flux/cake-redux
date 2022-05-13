import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState: initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    }
})

const cakeActions = cakeSlice.actions

export default cakeSlice.reducer
export { cakeActions }

