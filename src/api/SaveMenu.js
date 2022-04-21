import axios from 'axios';
import { getApiUrl } from './config';

function SaveChanges(){

    const privateToken = localStorage.getItem("private_token")
    const menu = localStorage.getItem("menu")

    const data = {
        "private_token": privateToken,
        "menu": menu,
    }
    
    return axios
    .put(getApiUrl('save-menu'), data)
}

export default SaveChanges