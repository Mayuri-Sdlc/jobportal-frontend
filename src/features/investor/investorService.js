import axios from 'axios'
import { Config } from '../../config'

const API_URL = Config.API_URL;

const getAllInvestors = async (options) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user.access_token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  let payload = { options };
  const response = await axios.post(API_URL + '/users/investors', payload, config);
  if (response.data.data) return response.data.data
  else return response?.message
}

const getInvestorById = async (investorId) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user.access_token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + '/investor/profile/user/' + investorId, config);
  if (response.data.data) return response.data.data
  else return response?.message
}

const getPreferencesByInvestorId = async (investorId) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user.access_token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + '/mypreferences/' + investorId, config);
  if (response.data.data) return response.data.data
  else return response?.message
}


const investorService = {
  getAllInvestors,
  getInvestorById,
  getPreferencesByInvestorId
}

export default investorService