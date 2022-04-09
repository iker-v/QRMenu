import UpLoadImage from "../../api/UpLoadImage"
import { useEditMenuContext } from "../../state/context"
import SaveChanges from "../../api/SaveChanges"

function InfoMenu(){

    const {
        refreshIframe,
        setRefreshIframe,
        info,
        setInfo,
    } = useEditMenuContext()

    const changeValue = (e) => {
        setInfo((prev) => ({...prev,  [e.target.name] : e.target.value}))
    }

    const saveForm = () => {
        localStorage.setItem("info", JSON.stringify(info))
        SaveChanges()
        setRefreshIframe(refreshIframe+1)
    }

    return (
        <div className="flex gap-3 flex-col">
            <div className="flex flex-col">
                <label>Image</label>
                {info?.image ?
                <div className="relative">
                    <img alt="Menu header" className="object-cover h-64 rounded-lg" src={info?.image} />
                    <button onClick={() => changeValue({ target: { value: '', name: 'image' }})} className='top-1 left-1 absolute rounded-full h-5 w-5 flex items-center justify-center bg-gray-700'>
                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>

                :
                <label className="h-24 bg-gray-200 flex items-center justify-center rounded-lg">
                    <p className="text-sm text-neutral-700 font-semibold">Upload image</p>
                    <input type="file" className="hidden" onChange={(e) => {
                            UpLoadImage(e.target.files[0])
                            .then(res => {
                            if(res.status === 200){
                                console.log(res)
                                changeValue({ target: { value: res.data.data.url, name: 'image' }})
                            }
                        })
                    }} />
                </label>
                }
            </div>
            <div className="flex flex-col">
                <label>Name</label>
                <input name="name" value={info?.name} onChange={(e) => changeValue(e)} className="py-1 px-2 rounded-lg border" />
            </div>
            <div className="flex flex-col">
                <label>Address</label>
                <input name="address" value={info?.address} onChange={(e) => changeValue(e)} className="py-1 px-2 rounded-lg border" />
            </div>
            <div className="flex flex-col">
                <label>Phone</label>
                <input name="phone" value={info?.phone} onChange={(e) => changeValue(e)} className="py-1 px-2 rounded-lg border" />
            </div>
            <button onClick={() => saveForm()} className="bg-blue-500 rounded-lg py-1 px-2 text-white font-semibold">Save changes</button>    
        </div>
    )
}

export default InfoMenu