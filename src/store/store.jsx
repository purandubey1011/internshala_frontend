import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducer/userReducer'
import employeReducer from './reducer/employeReducer'
import internshipReducer from './reducer/internshipReducer'
import jobReducer from './reducer/jobReducer'

export const store = configureStore({
    
  reducer: {
    user: userReducer,
    employe: employeReducer,
    internship:internshipReducer,
    job:jobReducer
  },
})