import axios from 'axios';
import { getApiUrl } from './config';

function SaveInfo(){

    const privateToken = localStorage.getItem("private_token")
    const info = localStorage.getItem("info")

    const data = {
        "private_token": privateToken,
        "info": info,
    }
    
    return axios
    .put(getApiUrl('save-info'), data)
}

export default SaveInfo