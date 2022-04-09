import axios from 'axios';
import { getApiUrl } from "./config"

function UpLoadImage(value){

    let formData = new FormData()
    formData.append("image", value)

    return axios({
        method: 'post',
        url: getApiUrl('upload-image'),
        data: formData
    })

}

export default UpLoadImage