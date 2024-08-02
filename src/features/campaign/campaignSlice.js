import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import campaignService from './campaignService'

const initialState = {
    campaigns: [],
    approvedCampaigns: [],
    pendingCampaigns: [],
    campaignsById: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Get campaigns
export const getAllCampaigns = createAsyncThunk(
    'campaign/all',
    async (payload, thunkAPI) => {
      try {
        return await campaignService.getAllCampaigns(payload)
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

export const getAllApprovedCampaigns = createAsyncThunk(
    'campaign/approved/all',
    async (payload, thunkAPI) => {
      try {
        return await campaignService.getAllApprovedCampaigns(payload)
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

export const getAllPendingCampaigns = createAsyncThunk(
    'campaign/pending',
    async (payload, thunkAPI) => {
      try {
        return await campaignService.getAllPendingCampaigns(payload)
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

export const getCampaignsById = createAsyncThunk(
    'campaigns',
    async (payload, thunkAPI) => {
      try {
        return await campaignService.getCampaignsById(payload)
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

export const campaignSlice = createSlice({
    name: 'campaign',
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
            .addCase(getAllCampaigns.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllCampaigns.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.campaigns = action.payload.data
            })
            .addCase(getAllCampaigns.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.campaigns = null
            })
            .addCase(getAllApprovedCampaigns.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllApprovedCampaigns.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.approvedCampaigns = action.payload.data
            })
            .addCase(getAllApprovedCampaigns.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.approvedCampaigns = null
            })
            .addCase(getAllPendingCampaigns.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllPendingCampaigns.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.pendingCampaigns = action.payload.data
            })
            .addCase(getAllPendingCampaigns.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.pendingCampaigns = null
            })
            .addCase(getCampaignsById.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCampaignsById.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.campaignsById = action.payload[0]
            })
            .addCase(getCampaignsById.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.campaignsById = null
            })
    },
})

export const { reset } = campaignSlice.actions
export default campaignSlice.reducer