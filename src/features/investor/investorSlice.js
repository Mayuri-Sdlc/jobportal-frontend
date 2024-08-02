import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import investorService from './investorService'

const initialState = {
    investors: [],
    singleInvestor: {},
    preferences: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Get investors
export const getAllInvestors = createAsyncThunk(
    'users/investors',
    async (payload, thunkAPI) => {
      try {
        return await investorService.getAllInvestors(payload)
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

  export const getInvestorById = createAsyncThunk(
    'investor/profile/user',
    async (id, thunkAPI) => {
      try {
        return await investorService.getInvestorById(id)
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
  
  export const getPreferencesByInvestorId = createAsyncThunk(
    'investor/mypreferences',
    async (id, thunkAPI) => {
      try {
        return await investorService.getPreferencesByInvestorId(id)
        //console.log('thunk called from slice');
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

export const investorSlice = createSlice({
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
            .addCase(getAllInvestors.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllInvestors.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.investors = action.payload.data
            })
            .addCase(getAllInvestors.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.investors = null
            })
            .addCase(getInvestorById.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getInvestorById.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.singleInvestor = action.payload
            })
            .addCase(getInvestorById.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.singleInvestor = null
            })
            .addCase(getPreferencesByInvestorId.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPreferencesByInvestorId.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.preferences = action.payload
            })
            .addCase(getPreferencesByInvestorId.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.preferences = null
            })
    },
})

export const { reset } = investorSlice.actions
export default investorSlice.reducer