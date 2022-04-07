import axios from 'axios';

function UpLoadImage(value){

    const API_KEY = process.env.IMAGE_API_KEY

    let formData = new FormData()
    formData.set("key", API_KEY)
    formData.append("image", value)

    return axios({
        method: 'post',
        url: 'https://api.imgbb.com/1/upload',
        data: formData
    })

}

export default UpLoadImage