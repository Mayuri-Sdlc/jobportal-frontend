import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import investorService from './founderService'

const initialState = {
    founders: [],
    founderById: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Get investors
export const getAllFounders = createAsyncThunk(
    'users/founders',
    async (payload, thunkAPI) => {
      try {
        return await investorService.getAllFounders(payload)
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

export const getFounderById = createAsyncThunk(
  'founder/profile',
  async (payload, thunkAPI) => {
    try {
      return await investorService.getFounderById(payload)
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

export const founderSlice = createSlice({
    name: 'investor',
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
            .addCase(getAllFounders.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllFounders.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.founders = action.payload.data
            })
            .addCase(getAllFounders.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.founders = null
            })
            .addCase(getFounderById.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getFounderById.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.founderById = action.payload
            })
            .addCase(getFounderById.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.founderById = null
            })
    },
})

export const { reset } = founderSlice.actions
export default founderSlice.reducer