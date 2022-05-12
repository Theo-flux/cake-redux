import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    numOfCake: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState: initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCake--
        },
        restocked: (state, action) => {
            state.numOfCake += action.payload
        }
    }
})

const cakeActions = cakeSlice.actions

export default cakeSlice.reducer
export { cakeActions }

