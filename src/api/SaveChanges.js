import axios from 'axios';

function SaveChanges(){

    const privateToken = localStorage.getItem("private_token")
    const menu = localStorage.getItem("menu")
    const info = localStorage.getItem("info")

    const data = {
        "private_token": privateToken,
        "menu": menu,
        "info": info,
    }
    
    axios
    .put("https://api.qrmenu.bar/api/save-menu", data)
}

export default SaveChanges