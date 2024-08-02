import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import companyService from './company.service'

const initialState = {
    companies: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const getCompaniesByUserId = createAsyncThunk(
    'syndicate/mysyndicate/list',
    async (payload, thunkAPI) => {
        try {
            return await companyService.getCompaniesByUserId(payload)
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

export const companySlice = createSlice({
    name: 'company',
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
            .addCase(getCompaniesByUserId.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCompaniesByUserId.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.companies = action.payload
            })
            .addCase(getCompaniesByUserId.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.companies = null
            })
    },
})

export const { reset } = companySlice.actions
export default companySlice.reducer