import React, { createContext, useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { domain } from "../api/config";
import { getMenu } from "../api/getMenu";

const EditMenuContext = createContext();

export const EditMenuContextProvider = ({ children }) => {
    const [toggleState, setToggleState] = useState(0)
    const [loading, setLoading] = useState(false)
    const [info, setInfo] = useState('')
    const [refreshIframe, setRefreshIframe] = useState(0)
    const [publicUrl, setPublicUrl] = useState("")
    const [showQR, setShowQR] = useState(false)
    const [categoryList, setCategoryList] = useState([])
    const { edittoken } = useParams()

    useEffect(()=> {
        setLoading(true)

        getMenu(`${edittoken}`).then((data) => {
            localStorage.setItem("public_token", data.public_token)
            localStorage.setItem("private_token", data.edit_token)

            const publicToken = localStorage.getItem("public_token")
            setPublicUrl(`${domain}/public/${publicToken}`)    

            setInfo(JSON.parse(data.restaurant_info))
            setCategoryList(JSON.parse(data.menu))
        }).catch(error => {
            console.log(error)
        }).finally(() => setLoading(false))

    }, [] )

    const toggleTab = index => {
        setToggleState(index)
    }

    return (
        <EditMenuContext.Provider value={{
            toggleState,
            toggleTab,
            categoryList,
            setCategoryList,
            loading, 
            showQR, 
            setShowQR, 
            publicUrl, 
            setPublicUrl,
            refreshIframe,
            setRefreshIframe,
            info,
            setInfo,
            edittoken,
        }}>
            {children}
        </EditMenuContext.Provider>
    )
}

export const useEditMenuContext = () => useContext(EditMenuContext)