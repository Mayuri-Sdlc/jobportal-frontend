import axios from 'axios'
import { Config } from '../../config'

const API_URL = Config.API_URL;

const getAllCampaigns = async (options) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user.access_token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  let payload = { options };
  const response = await axios.post(API_URL + '/campaign/all', payload, config);
  if (response.data.data) return response.data.data
  else return response?.message
}

const getAllApprovedCampaigns = async (options) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user.access_token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  let payload = { options };
  const response = await axios.post(API_URL + '/campaign/approved/all', payload, config);
  if (response.data.data) return response.data.data
  else return response?.message
}

const getAllPendingCampaigns = async (options) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user.access_token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  let payload = { options };
  const response = await axios.post(API_URL + '/campaign/pending', payload, config);
  if (response.data.data) return response.data.data
  else return response?.message
}

const getCampaignsById = async (campaignId) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user.access_token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + '/campaign/' + campaignId, config);
  if (response.data.data) return response.data.data
  else return response?.message
}


const campaignService = {
    getAllCampaigns,
    getAllApprovedCampaigns,
    getAllPendingCampaigns,
    getCampaignsById
  }
  
  export default campaignService