import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import fundingHistoryService from './fundingHistory.service'

const initialState = {
    history: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const getFundingHistoryByInvestorId = createAsyncThunk(
    'fundinghistory/user',
    async (id, thunkAPI) => {
        try {
            return await fundingHistoryService.getFundingHistoryByInvestorId(id)
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

export const fundingHistorySlice = createSlice({
    name: 'fundingHistory',
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
            .addCase(getFundingHistoryByInvestorId.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getFundingHistoryByInvestorId.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.history = action.payload
            })
            .addCase(getFundingHistoryByInvestorId.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.history = null
            })
    },
})

export const { reset } = fundingHistorySlice.actions
export default fundingHistorySlice.reducer