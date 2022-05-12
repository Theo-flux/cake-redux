const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')

const initialState = {
    loading: false,
    users: [],
    error: ''
}

// Generate pending, resolved or rejected actionTypes from promise
const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => response.data)
})


const userSlice =  createSlice({
    name: 'user',
    initialState: initialState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
        })

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.payload.error.message
        })
    }
})

module.exports = userSlice.reducer
// module.exports.userActions = userSlice.actions
module.exports.fetchUsers = fetchUsers