import React from 'react'
import { useEditMenuContext } from '../../state/context'

const PreviewMenu = () => {
    
    const { publicUrl, refreshIframe } = useEditMenuContext()

    return (
        <div className="pl-8 flex gap-3 flex-col w-12/12 lg:w-6/12">
            <div className="flex flex-col">
                <label className="text-sm font-semibold text-neutral-700">Menu url</label>
                <div className="flex items-center">
                    <input disabled defaultValue={publicUrl} className="py-1 px-2 w-64 border-2 rounded-l-lg" />
                    <button onClick={() => navigator.clipboard.writeText(publicUrl)} className="flex gap-1 items-center py-1.5 px-3 rounded-r-lg border-2 border-blue-500 bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path><path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path></svg>
                        Copy
                    </button>
                </div>
            </div>
            <h2 className="text-3xl font-bold text-neutral-900">Preview</h2>
            <iframe title="iframe of public menu" key={refreshIframe} className="h-135 w-72 border-8 rounded-3xl border-neutral-700" src={publicUrl}></iframe>
        </div>
    )
}

export default PreviewMenu