import { api_url,get_token } from "../universal";
import axios from "axios";

export const  fetchingJobs = async ()=> {
    const token = get_token()
    const res = await axios.get(`${api_url}jobs/`,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    return res.data
}

export const  fetchingCompanyJobs = async ()=> {
    const token = get_token()
    const res = await axios.get(`${api_url}jobs/companyjobs`,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    return res.data
}


export const  addJob = async (obj)=> {
    const token = get_token()
    const res = await axios.post(`${api_url}jobs/companyjobs`,obj,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    return res.data
}


export const savingJobs = async () => {
    const token = get_token()   
    const res = await axios.post(`${api_url}jobs/saved`,obj,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    return res.data
}


export const savedJobs = async () => {
    const token = get_token()
    const res = await axios.post(`${api_url}jobs/saved`,obj,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    return res.data
}