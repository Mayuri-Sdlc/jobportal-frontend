import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import userReducer from '../features/user/userSlice'
import companySlice from '../features/company/company.slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    company: companySlice
  },
})
