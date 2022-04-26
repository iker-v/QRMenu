import React from 'react'
import { useEditMenuContext } from '../../state/context'

const PreviewMenu = () => {
    
    const { publicUrl, refreshIframe } = useEditMenuContext()

    return (
        <div className="pl-8 flex gap-3 flex-col w-12/12 lg:w-5/12">
            <h2 className="text-3xl font-bold text-neutral-900">Preview</h2>
            <iframe
                title="iframe of public menu"
                key={refreshIframe}
                className="h-135 w-72 border-8 rounded-3xl border-neutral-700"
                src={publicUrl}
            ></iframe>
        </div>
    )
}

export default PreviewMenu