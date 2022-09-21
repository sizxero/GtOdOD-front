import axios from 'axios';
import { getCookie, setCookie, removeCookie } from '../Cookie';

const BASE_URL = '/'

const axiosAPI = (url, options) => {
    const instance = axios.create({ baseURL: url, ...options })
    return instance
}

const axiosAuthAPI = (url, options) => {
    const instance = axios.create({
        baseURL: url,
        headers: {
            Authorization: `Bearer ${getCookie("token")}`
        },
        ...options,
    })
    return instance
}
const saveToken = (res) => {
    removeCookie('user')
    removeCookie('token')
    localStorage.setItem('token', res.data.id);
    localStorage.setItem("token", res.data.token);
    setCookie('user', res.data.id);
    setCookie("token", res.data.token);
}

export const defaultInstance = axiosAPI(BASE_URL)
export const authInstance = axiosAuthAPI(BASE_URL)
export default saveToken