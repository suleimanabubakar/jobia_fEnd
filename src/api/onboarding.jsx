import { api_url,get_token } from "../universal";
import axios from "axios";


export const  addingSeeker = async (obj)=> {
    const token = get_token()
    const res = await axios.post(`${api_url}accounts/seeker`,obj,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    return res.data
}



export const  addingCompany = async (obj)=> {
    const token = get_token()
    const res = await axios.post(`${api_url}accounts/company`,obj,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    return res.data
}

