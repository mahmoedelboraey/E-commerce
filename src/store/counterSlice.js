import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice(
  {
    name:"Counter",
    initialState:{count:10},
    reducers:{
      increse:(state) =>{
        state.count ++;
      },
      decres:(state) =>{
        state.count --;
      }
    }
  }
)
const counderRedux = counterSlice.reducer
export const{increse , decres} = counterSlice.actions
export default counderRedux 
