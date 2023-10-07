import { createSlice } from '@reduxjs/toolkit'


export const states = createSlice({
  name: 'states',
  initialState:{
    loginModal : false,
    num :1
  },
  reducers: {
   handleChange:(state, action)=>{
    state[action.payload.type] = action.payload.value
   }
  },
})

export const { handleChange } = states.actions

export default states.reducer