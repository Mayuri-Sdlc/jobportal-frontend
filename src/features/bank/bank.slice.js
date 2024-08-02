import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import bankService from './bank.service'

const initialState = {
    accounts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    companyBankAccount:[]
}

export const getAccountByUserId = createAsyncThunk(
    'bankAccount/bankAccount',
    async (id, thunkAPI) => {
        try {
            return await bankService.getAccountByUserId(id)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getAccountByCompanyId = createAsyncThunk(
    'bankAccount/companyBankAccount',
    async (id, thunkAPI) => {
        try {
            return await bankService.getAccountByCompanyId(id)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const bankSlice = createSlice({
    name: 'bank',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAccountByUserId.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAccountByUserId.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.accounts = action.payload
            })
            .addCase(getAccountByUserId.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.accounts = null
            })

            .addCase(getAccountByCompanyId.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAccountByCompanyId.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.companyBankAccount = action.payload
            })
            .addCase(getAccountByCompanyId.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.companyBankAccount = null
            })
    },
})

export const { reset } = bankSlice.actions
export default bankSlice.reducer