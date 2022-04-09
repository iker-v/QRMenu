import { useEffect } from "react";
import { generateMenu } from "../api/getMenu";

export const HomePage = () => {

    useEffect(()=> {
        generateMenu().then(data => {

            localStorage.setItem("private_token", data["edit_uuid"])
            localStorage.setItem("public_token", data["public_uuid"])

            window.location.href = `/edit/${data["edit_uuid"]}`
        })
        .catch(error => console.log(error))

    }, [])

    return <div className="flex justify-center py-16 font-semibold text-gray-800 text-lg">Loading..</div>
}
