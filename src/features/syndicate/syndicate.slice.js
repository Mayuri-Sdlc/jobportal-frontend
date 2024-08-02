import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import syndicateService from './syndicate.service'

const initialState = {
    syndicates: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const getMySyndicates = createAsyncThunk(
    'syndicate/mysyndicate/list',
    async (_, thunkAPI) => {
        try {
            return await syndicateService.getMySyndicates()
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

export const syndicateSlice = createSlice({
    name: 'syndicate',
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
            .addCase(getMySyndicates.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMySyndicates.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.syndicates = action.payload
            })
            .addCase(getMySyndicates.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.syndicates = null
            })
    },
})

export const { reset } = mangoPaySlice.actions
export default mangoPaySlice.reducer