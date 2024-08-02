import axios from 'axios'
import { Config } from '../../config'

const API_URL = Config.API_URL;

const getFundingHistoryByInvestorId = async (investorId) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user.access_token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + '/fundinghistory/user/' + investorId, config);
  if (response.data.data) return response.data.data
  else return response?.message
}

const investorService = {
  getFundingHistoryByInvestorId,
}

export default investorService