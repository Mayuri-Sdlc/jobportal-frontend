import axios from "axios"
import { store } from "../app/store"
import { Config } from "../config"

const token = ''

const baseUrl = Config.API_URL

// const getAccessToken = () => store.getState().user.tokens?.access.token
const getAccessToken = () => store.getState().auth.user?.jwtToken ?? JSON.parse(localStorage.getItem("user")).access_token

const axiosApi = axios.create({
  baseURL: Config.API_URL,
})

axiosApi.defaults.headers.common["Authorization"] = token

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export async function apiGET(url, config = {}) {
  let accessToken = getAccessToken()
  axiosApi.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
  return await axiosApi.get(url, { ...config }).then(response => response).catch(error => error.response)
}

export async function apiPOST(url, data, config = {}) {
  let accessToken = getAccessToken()
  axiosApi.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => response).catch((error) => error.response)
}

export async function apiPUT(url, data, config = {}) {
  let accessToken = getAccessToken()
  console.log("accessToken" , accessToken)
  axiosApi.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response).catch((error) => error.response)
}

export async function apiDELETE(url, config = {}) {
  let accessToken = getAccessToken()
  axiosApi.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response).catch((error) => error.response)
}