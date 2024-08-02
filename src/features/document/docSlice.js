import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import docServices from './docServices'

const initialState = {
    docs: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Get campaigns
export const getAllDocs = createAsyncThunk(
    'campaign/allDocs',
    async (payload, thunkAPI) => {
      try {
        return await docServices.getAllDocs(payload)
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

export const docSlice = createSlice({
    name: 'docs',
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
            .addCase(getAllDocs.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllDocs.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.docs = action.payload.data
            })
            .addCase(getAllDocs.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.campaigns = null
            })
    },
})

export const { reset } = docSlice.actions
export default docSlice.reducer