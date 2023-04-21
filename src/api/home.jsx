import { api_url,get_token } from "../universal";
import axios from "axios";


export const  fetchingBlogs = async ()=> {
    const token = get_token()
    const res = await axios.get(`${api_url}guides/`,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    return res.data
}
