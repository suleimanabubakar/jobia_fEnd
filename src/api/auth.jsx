import { api_url, get_token } from "../universal";
import axios from "axios";

export const loginUser = async (obj) => {
    const  res = await axios.post(`${api_url}auth/token/`,obj)
    return res.data
}
 


export const registerUser = async (obj) => {
    const  res = await axios.post(`${api_url}auth/register/`,obj)
    return res.data
}


export const activateUser = async (obj) => {
    const  res = await axios.post(`${api_url}auth/activate/`,obj)
    return res.data  
}

export const refresh_token = async (obj) => {
    const token = get_token()
    const res = await axios.get(`${api_url}accounts/my`,{
        headers: {
            Authorization: `Token ${token}`
        }
    })
    return res.data
}

export const resendCode = async (obj) => {
    const  res = await axios.post(`${api_url}auth/resend_activate/`,obj)
    return res.data  
}
