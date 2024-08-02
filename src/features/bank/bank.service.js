import axios from 'axios'
import { Config } from '../../config'

const API_URL = Config.API_URL;

const getAccountByUserId = async (id) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user.access_token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + '/bankAccount/bankAccount/' + id, config);
  if (response.data.data) return response.data.data
  else return response?.message
}


const getAccountByCompanyId = async (id) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user.access_token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + '/bankAccount/companyBankAccount/' + id, config);
  if (response.data.data) return response.data.data
  else return response?.message
}



const bankService = {
    getAccountByUserId,
    getAccountByCompanyId
}

export default bankService