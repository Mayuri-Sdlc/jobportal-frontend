import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import campaignReducer from '../features/campaign/campaignSlice'
import investorReducer from '../features/investor/investorSlice'
import userReducer from '../features/user/userSlice'
import founderReducer from '../features/founder/founderSlice'
import docsReducer from '../features/document/docSlice'
import fundingHistorySlice from '../features/fundingHistory/fundingHistorySlice'
import bankSlice from '../features/bank/bank.slice'
import mangoPaySlice from '../features/mangoPay/mangoPay.slice'
import companySlice from '../features/company/company.slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    campaign: campaignReducer,
    investor: investorReducer,
    user: userReducer,
    founder: founderReducer,
    docs:docsReducer,
    fundingHistory:fundingHistorySlice,
    bankAccount:bankSlice,
    mangoPay:mangoPaySlice,
    company:companySlice
    },
})
