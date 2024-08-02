import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from './userService'

const initialState = {
  users: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get campaigns
export const getAllUsers = createAsyncThunk(
  'users/users',
  async (payload, thunkAPI) => {
    try {
      return await userService.getAllUsers(payload)
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

export const getAllSystemUsers = createAsyncThunk(
  'users/systemUsers',
  async (payload, thunkAPI) => {
    try {
      return await userService.getAllSystemUsers(payload)
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

export const userSlice = createSlice({
  name: 'user',
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
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.users = action.payload.data
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.campaigns = null
      })
      .addCase(getAllSystemUsers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllSystemUsers.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.users = action.payload.data
      })
      .addCase(getAllSystemUsers.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.campaigns = null
      })
  },
})

export const { reset } = userSlice.actions
export default userSlice.reducer