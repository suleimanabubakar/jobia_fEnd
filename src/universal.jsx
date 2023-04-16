export const api_url = import.meta.env.VITE_API_URL
export const get_token = () => {
    return localStorage.getItem('jobai_auth_token')
    // return import.meta.env.VITE_DEFAULT_TOKEN
}

