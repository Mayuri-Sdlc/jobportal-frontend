import axios from 'axios'
import { Config } from '../../config'

const API_URL = Config.API_URL;

const getAllFounders = async (options) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user.access_token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  let payload = { options };
  const response = await axios.post(API_URL + '/users/founders', payload, config);
  if (response.data.data) return response.data.data
  else return response?.message
}

const getFounderById = async (founderId) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user.access_token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + '/founder/profile/' + founderId, config);
  if (response.data.data) return response.data.data
  else return response?.message
}


const founderService = {
  getAllFounders,
  getFounderById
}

export default founderService