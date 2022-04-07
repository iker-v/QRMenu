import axios from "axios"
import { getApiUrl } from "./config"

export const generateMenu = () => {
    const apiUrl = getApiUrl('gen-qr-menu?format=json')
    return axios.get(apiUrl).then(res => res.data)
}

export const getMenuEdit = token => {
    const apiUrl = getApiUrl(`get-qrmenu-edit/${token}?format=json`)
    return axios.get(apiUrl).then(res => res.data[0])
}

export const getMenuPublic = token => {
    const apiUrl = getApiUrl(`get-qrmenu-public/${token}?format=json`)
    return axios.get(apiUrl).then(res => res.data[0])
}

export const getEditToken = () => {
    const apiUrl = getApiUrl('gen-qr-menu?format=json')
    return axios.get(apiUrl).then(res => res.data)
}