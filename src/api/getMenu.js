import axios from "axios"
import { getApiUrl } from "./config"

export const generateMenu = () => {
    const apiUrl = getApiUrl('gen-qr-menu?format=json')
    return axios.get(apiUrl).then(res => res.data)
}

export const getMenu = token => {
    const apiUrl = getApiUrl(`get-qrmenu/${token}?format=json`)
    localStorage.removeItem("public_token")
    localStorage.removeItem("private_token")
    return axios.get(apiUrl).then(res => {
        console.log(res.data[0]);
        return res.data[0]}
    )
}