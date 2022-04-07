
import { useState, useEffect } from "react";
import CategoryEdit from "../components/EditMenu/CategoryEdit";
import { AppContext } from "../context"
import TabMenu from "../components/EditMenu/TabMenu";
import { domain } from "../api/config";
import InfoMenu from "../components/EditMenu/InfoMenu";
import ShowQR from "../components/EditMenu/ShowQR";
import PreviewMenu from "../components/EditMenu/PreviewMenu";
import { getMenuEdit } from "../api/getMenu";

function EditMenu(){
    const [toggleState, setToggleState] = useState(0)
    const [loading, setLoading] = useState(false)
    const [info, setInfo] = useState('')
    const [refreshIframe, setRefreshIframe] = useState(0)
    const [publicUrl, setPublicUrl] = useState("")
    const [showQR, setShowQR] = useState(false)
    const [categoryList, setCategoryList] = useState([])

    useEffect(()=> {
        setLoading(true)
        const token = localStorage.getItem("private_token")

        getMenuEdit(`${token}`).then((data) => {
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
    return(
        <div className="flex flex-col py-12 mx-auto max-w-4xl">

            <div className="flex items-start justify-start">
                <AppContext.Provider value={{
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
                }}>
                    <div className="flex gap-5 flex-col w-12/12 lg:w-6/12">
                        <button onClick={() => setShowQR(true)} className="py-1.5 self-start mt-5 flex items-center gap-1 px-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z" clip-rule="evenodd"></path><path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"></path></svg>
                            Show QR
                        </button>
                        <ShowQR/>
                        <TabMenu/>
                        { toggleState === 0 ? <CategoryEdit/> : <InfoMenu/> }
                    </div>
                    <PreviewMenu publicUrl={publicUrl} />
                </AppContext.Provider>		
            </div>

	    </div>
    )
}

export default EditMenu