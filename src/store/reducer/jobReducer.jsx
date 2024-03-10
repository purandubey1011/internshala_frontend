import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  job: null,
  isAuth: false
}

export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
  savejob:(state, action) =>{
    state.job = action.payload;
    state.isAuth =  true;
  }},

  removejob:(state, action) =>{
    state.job = null;
    state.isAuth = false;
  }}
   
)

// Action creators are generated for each case reducer function
export const {savejob ,removejob} = jobSlice.actions

export default jobSlice.reducer