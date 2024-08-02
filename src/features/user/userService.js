import axios from 'axios'
import { Config } from '../../config'

const API_URL = Config.API_URL;

const getAllUsers = async (options) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user.access_token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  let payload = { options };
  const response = await axios.post(API_URL + '/users/users', payload, config);
  if (response.data.data) return response.data.data
  else return response?.message
}

const getAllSystemUsers = async (options) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user.access_token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  let payload = { options };
  const response = await axios.post(API_URL + '/users/systemUsers', payload, config);
  if (response.data.data) return response.data.data
  else return response?.message
}


const userService = {
    getAllUsers,
    getAllSystemUsers
  }
  
  export default userService