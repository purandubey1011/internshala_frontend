import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employe: null,
  isAuth: false
}

export const employeSlice = createSlice({
  name: 'employe',
  initialState,
  reducers: {
  saveemploye:(state, action) =>{
    state.employe = action.payload;
    state.isAuth =  true;
  }},

  removeemploye:(state, action) =>{
    state.employe = null;
    state.isAuth = false;
  }}
   
)

// Action creators are generated for each case reducer function
export const {saveemploye ,removeemploye} = employeSlice.actions

export default employeSlice.reducer