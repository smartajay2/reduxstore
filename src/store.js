import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";


const initialState={
  count:0
}


const counterSlice = createSlice(
  {
    name:"counter",
    initialState,
    reducers:{
      increment:function(state){
      state.count=state.count+1
      },
       decrement: function(state) {
      state.count = state.count - 1;
    }
    }
    
  }
)


const store = configureStore({
  reducer:{
    counter : counterSlice.reducer
  }
})


//de structure

const {increment, decrement} = counterSlice.actions

export default store 
export {increment, decrement}