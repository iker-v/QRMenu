import CategoryCard from "./CategoryCard";
import TabMenu from "./TabMenu";
import InfoMenu from "./InfoMenu";
import ShowQR from "./ShowQR";
import { useEditMenuContext } from "../../state/context"

function EditMenuIndex(){

    const { toggleState, publicUrl, setShowQR } = useEditMenuContext()

    return (
        <div className="flex gap-5 flex-col w-12/12 lg:w-7/12">
            <div className="flex items-center justify-between">
                <button onClick={() => setShowQR(true)} className="py-1.5 flex items-center gap-1 px-3 rounded-lg bg-neutral-700 hover:bg-neutral-600 text-sm text-white font-semibold">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z" clip-rule="evenodd"></path><path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"></path></svg>
                    Show QR
                </button>
                <div className="flex items-center">
                    <input disabled defaultValue={publicUrl} className="py-1 px-2 w-52 border-2 rounded-l-lg" />
                    <button onClick={() => navigator.clipboard.writeText(publicUrl)} className="flex gap-1 items-center py-1.5 px-3 rounded-r-lg border-2 border-neutral-500 bg-neutral-700 hover:bg-neutral-600 text-sm text-white font-semibold">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path><path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path></svg>
                            Copy
                    </button>
                </div>
            </div>
            <ShowQR/>
            <TabMenu/>
            { toggleState === 0 ? <CategoryCard/> : <InfoMenu/> }
        </div>
    )
}

export default EditMenuIndex