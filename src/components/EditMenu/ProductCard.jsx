import React, { useEffect } from 'react'
import { useEditMenuContext } from '../../state/context';
import { v4 as uuidv4 } from 'uuid';
import { EditText, EditTextarea } from 'react-edit-text';
import UpLoadImage from '../../api/UpLoadImage'; 
import SaveMenu from '../../api/SaveMenu';
import produce from 'immer'

function ProductCard({product, productIndex, categoryIndex}) {

    const {
        categoryList,
        setCategoryList,
        refreshIframe,
        setRefreshIframe
    } = useEditMenuContext()

    useEffect(() => {
        localStorage.setItem("menu", JSON.stringify(categoryList))
        SaveMenu(categoryList).then(() => setRefreshIframe(refreshIframe+1))
    }, [categoryList])

    const removeProduct = (categoryIndex, productIndex) => {
        const newList = [...categoryList]
        newList[categoryIndex].products.splice(productIndex, 1)
        setCategoryList(newList)
    }

    const saveValue = (categoryIndex, productIndex, target) => {
        const newList = [...categoryList]
        setCategoryList(produce(newList, draftList => {
            draftList[categoryIndex].products[productIndex][target.name] = target.value
            return draftList
        }))
    }

    return (
            <div key={product.id} className="flex w-full">
                <div className="flex w-3/12">
                    { product.image ? 
                    <div className="relative">
                        <img className="rounded-lg h-32 w-44 object-cover" src={product.image} alt="" />
                        <button onClick={() => saveValue(categoryIndex, productIndex, { value: '', name: 'image'})} className='top-1 left-1 absolute rounded-full h-5 w-5 flex items-center justify-center bg-gray-700'>
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div> : 
                    <label className="flex items-center justify-center h-32 w-full bg-gray-200 rounded-lg">
                        <input className="hidden" type="file" onChange={(e) => {
                                UpLoadImage(e.target.files[0])
                                .then(res => {
                                    if(res.status === 200){
                                        saveValue(categoryIndex, productIndex, { value: res.data.data.url, name: 'image'})
                                    }
                                })
                        }} />
                        <div className="flex items-center">
                            <svg class="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                            <div className="flex flex-col">
                                <p className="text-xs text-gray-600 font-semibold">Upload</p>
                                <p className="text-xs text-gray-600 font-semibold">Image</p>
                            </div>    
                        </div>
                    </label> }
                </div>
                <div className="flex px-2 flex-col w-9/12">
                    <EditText
                        id={product.id}
                        placeholder="Product name.."
                        name="name"
                        className="focus:rounded-lg focus:py-0.5 focus:px-1"
                        defaultValue={product.name}
                        onSave={(target) => saveValue(categoryIndex, productIndex, target)}
                    />
                    <EditTextarea 
                        name="desc"
                        placeholder="Product description.."
                        className="text-sm break-words overflow-hidden py-1 focus:rounded-lg focus:py-0.5 focus:px-1"
                        defaultValue={product.desc}
                        onSave={(target) => saveValue(categoryIndex, productIndex, target)}
                    />
                    <div className="flex items-center -mt-1 justify-between">
                        <p className="flex items-center gap-1 text-neutral-800">
                            <EditText
                                name="price"
                                placeholder="0"
                                className="min-w-fit focus:rounded-lg focus:py-0.5 focus:px-1"
                                defaultValue={product.price}
                                onSave={(target) => saveValue(categoryIndex, productIndex, target)}
                            />
                            <EditText
                                name="currency"
                                placeholder="€"
                                className="min-w-fit focus:rounded-lg focus:py-0.5 focus:px-1"
                                defaultValue={product.currency}
                                onSave={(target) => saveValue(categoryIndex, productIndex, target)}
                            />
                        </p>
                        <button onClick={() => removeProduct(categoryIndex, productIndex) } className="text-sm">
                            <svg className="w-5 h-5 text-red-500 hover:shadow-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default ProductCard
