import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import mangoPayService from './mangoPay.service'

const initialState = {
    wallet: {},
    cards: [],
    transactions: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const getWalletByMangoPayId = createAsyncThunk(
    'mangopay/listWalletData',
    async (id, thunkAPI) => {
        try {
            return await mangoPayService.getWalletByMangoPayId(id)
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

export const getCardDetailsByUserId = createAsyncThunk(
    'mangopay/card',
    async (id, thunkAPI) => {
        try {
            return await mangoPayService.getCardDetailsByUserId(id)
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

export const getTransactionsByMangoPayId = createAsyncThunk(
    'mangopay/transaction',
    async (id, thunkAPI) => {
        try {
            return await mangoPayService.getTransactionsByMangoPayId(id)
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

export const mangoPaySlice = createSlice({
    name: 'mangoPay',
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
            .addCase(getWalletByMangoPayId.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getWalletByMangoPayId.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.wallet = action.payload
            })
            .addCase(getWalletByMangoPayId.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.wallet = null
            })
            .addCase(getCardDetailsByUserId.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCardDetailsByUserId.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.cards = action.payload
            })
            .addCase(getCardDetailsByUserId.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.cards = null
            })
            .addCase(getTransactionsByMangoPayId.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTransactionsByMangoPayId.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.transactions = action.payload
            })
            .addCase(getTransactionsByMangoPayId.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.transactions = null
            })
    },
})

export const { reset } = mangoPaySlice.actions
export default mangoPaySlice.reducer