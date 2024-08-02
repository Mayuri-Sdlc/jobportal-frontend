import axios from 'axios'
import { Config } from '../../config'

const API_URL = Config.API_URL;

const getCompaniesByUserId = async (payload) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user.access_token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL + '/company/user/', payload, config);
  if (response.data.data) return response.data.data
  else return response?.message
}

const companyService = {
    getCompaniesByUserId
}

export default companyService