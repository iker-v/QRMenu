
import React from "react"
import { useEditMenuContext } from "../../state/context"

function TabMenu(){

    const { toggleState, toggleTab } = useEditMenuContext()
    return(
        <nav className="flex items-center w-full gap-2 bg-neutral-200 py-1.5 px-2 rounded-lg">
            <button
                className={toggleState === 0 ? "flex items-center justify-center gap-0.5 text-white px-3 py-1 bg-blue-500 rounded-lg font-semibold w-full" : "flex items-center justify-center gap-0.5 text-gray-800 px-3 py-1 bg-white rounded-lg font-semibold w-full"}
                onClick={()=>{toggleTab(0)}}
            >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                Menu
            </button>
            <button
                className={toggleState === 1 ? "flex items-center justify-center gap-1 text-white px-3 py-1 bg-blue-500 rounded-lg font-semibold w-full" : "flex items-center justify-center gap-1 text-gray-800 px-3 py-1 bg-white rounded-lg font-semibold w-full"}
                onClick={()=>{toggleTab(1)}}
            >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
                Info
            </button>
        </nav>
    )
}

export default TabMenu