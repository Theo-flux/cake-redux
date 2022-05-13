import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { InitialState, User } from './types'

const url: string = 'https://jsonplaceholder.typicode.com/users'

const initialState: InitialState = {
    loading: false,
    users: [],
    error: ''
}

// Generate pending, resolved or rejected actionTypes from promise
const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios.get(url)
            .then(response => response.data)
})


const userSlice =  createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })

        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
            state.loading = false
            state.users = action.payload
            state.error= ''
        })

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message || 'Something went wrong!'
        })
    }
})


export default userSlice.reducer
export {fetchUsers}
