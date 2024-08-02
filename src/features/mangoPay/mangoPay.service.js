import axios from 'axios'
import { Config } from '../../config'

const API_URL = Config.API_URL;

const getWalletByMangoPayId = async (id) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user.access_token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + '/mangopay/listWalletData/' + id, config);
  if (response.data.data) return response.data.data
  else return response?.message
}

const getCardDetailsByUserId = async (id) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user.access_token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + '/mangopay/card/' + id, config);
  if (response.data.data) return response.data.data
  else return response?.message
}

const getTransactionsByMangoPayId = async (id) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.access_token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await axios.get(API_URL + '/mangopay/transaction/' + id, config);
    if (response.data.data) return response.data.data
    else return response?.message
  }

const mangoPayService = {
    getWalletByMangoPayId,
    getCardDetailsByUserId,
    getTransactionsByMangoPayId
}

export default mangoPayService