import axios from 'axios'
import { Config } from '../../config'

const API_URL = Config.API_URL

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + '/auth/login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data.data))
  }

  return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('user')
  }

const authService = {
    login,
    logout
  }
  
  export default authService