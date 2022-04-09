
import React from "react"
import { useEditMenuContext } from "../../state/context"

function TabMenu(){

    const { toggleState, toggleTab } = useEditMenuContext()
    return(
        <nav className="flex w-full items-center">
            <button
                className={toggleState === 0 ? "text-neutral-800 border-blue-400 px-4 py-2 font-semibold border-b-2 w-full" : "px-4 py-2 text-neutral-700 font-semibold border-b-2 w-full"}
                onClick={()=>{toggleTab(0)}}
            >
                Menu
            </button>
            <button
                className={toggleState === 1 ? "text-neutral-800 border-blue-400 px-4 py-2 font-semibold border-b-2 w-full" : "px-4 py-2 text-neutral-700 font-semibold border-b-2 w-full"}
                onClick={()=>{toggleTab(1)}}
            >
                Info
            </button>
        </nav>
    )
}

export default TabMenu