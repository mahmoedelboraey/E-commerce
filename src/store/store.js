import { configureStore } from '@reduxjs/toolkit'
import counderRedux from './counterSlice'


export const store =  configureStore({
    reducer:{
        counter:counderRedux
    }
})

