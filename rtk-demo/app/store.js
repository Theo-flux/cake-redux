const configureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require('redux-logger').createLogger()
const { getDefaultMiddleware } = require('@reduxjs/toolkit')
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')


const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger)
})

module.exports = store

