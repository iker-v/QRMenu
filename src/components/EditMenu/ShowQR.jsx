import { useContext } from "react"
import { AppContext } from "../../context"

function ShowQR(){

    const { showQR, setShowQR, publicUrl } = useContext(AppContext)

    return (
        <>
        { showQR ? 
            <div className="flex justify-center bg-black bg-opacity-70 items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative opacity-100 w-auto my-6 mx-auto max-w-2xl">
                    <div className="border-0 p-5 rounded-lg shadow relative flex flex-col  w-full bg-white outline-none focus:outline-none">
                        <img src={`http://api.qrserver.com/v1/create-qr-code/?data=${publicUrl}&size=300x300`} />
                        <div className="flex gap-1 px-3 mt-5 items-center justify-between">
                            <a download="qr.png" href={`http://api.qrserver.com/v1/create-qr-code/?data=${publicUrl}&size=300x300`} className="bg-blue-500 hover:bg-blue-600 hover:shadow py-2 px-4 rounded-lg text-white text-sm font-semibold">Download</a>
                            <button onClick={()=> setShowQR(false)} className="border py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-800 text-sm font-semibold hover:shadow">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            : ''}
        </>
    )
}

export default ShowQR