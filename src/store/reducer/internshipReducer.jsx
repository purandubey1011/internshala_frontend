import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  internship: null,
  isAuth: false
}

export const internshipSlice = createSlice({
  name: 'internship',
  initialState,
  reducers: {
  saveinternship:(state, action) =>{
    state.internship = action.payload;
    state.isAuth =  true;
  }},

  removeinternship:(state, action) =>{
    state.internship = null;
    state.isAuth = false;
  }}
   
)

// Action creators are generated for each case reducer function
export const {saveinternship ,removeinternship} = internshipSlice.actions

export default internshipSlice.reducer