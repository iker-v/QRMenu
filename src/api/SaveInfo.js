import axios from 'axios';
import { getApiUrl } from './config';

function SaveInfo(){

    const privateToken = localStorage.getItem("private_token")
    console.log(privateToken)
    const info = localStorage.getItem("info")

    const data = {
        "private_token": privateToken,
        "info": info,
    }
    
    axios
    .put(getApiUrl('save-info'), data)
}

export default SaveInfo