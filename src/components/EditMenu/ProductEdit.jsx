import React from 'react'
import { useEditMenuContext } from '../../state/context';
import { v4 as uuidv4 } from 'uuid';
import { EditText, EditTextarea } from 'react-edit-text';
import UpLoadImage from '../../api/UpLoadImage'; 
import SaveChanges from '../../api/SaveChanges';

function ProductEdit({products, categoryid}) {

    const {
        categoryList,
        setCategoryList,
        refreshIframe,
        setRefreshIframe
    } = useEditMenuContext()

    const addProduct = () => {
        const categoryIndex = categoryList.findIndex(category => category.id === categoryid)
        const newProduct = [...categoryList]
        newProduct[categoryIndex]['products'].push({
            id: uuidv4(),
            image: 'https://cdn.bioguia.com/embed/6970cbfd82002e1c4b30a57820e5c185a1579879446/plato-comida.jpg',
            name: 'Product',
            desc: 'desc',
            price: '7',
            currency: '€',
            quantity: '1 cup'
        })
        setCategoryList(newProduct)
    }

    const removeProduct = (value) => {
        const list = [...categoryList]
        const categoryIndex = list.findIndex(category => category.id === categoryid)
        list[categoryIndex]['products'].splice(list[categoryIndex]['products'].findIndex(val => val.id === value ))
        localStorage.setItem("menu", JSON.stringify(list))

        setCategoryList(list) 
        SaveChanges()
        setRefreshIframe(refreshIframe+1)
    }

    const saveValue = (id, e) => {
        console.log(e)
        const newList = [...categoryList]
        const categoryIndex = newList.findIndex(category => category.id === categoryid)
        const productIndex = newList[categoryIndex]['products'].findIndex(product => product.id === id)
        newList[categoryIndex]['products'][productIndex][e.name] = e.value


        localStorage.setItem("menu", JSON.stringify(newList))
        SaveChanges()
        setRefreshIframe(refreshIframe+1)
    }

    return (
        <div className="flex flex-col gap-3 items-start bg-white rounded-b-xl p-2">
            
            { products.map((product) => (
                    <div key={product.id} className="flex w-full">

                        <div className="flex w-3/12">
                            { product.image ? 
                                <div className="relative">
                                    <img className="rounded-lg h-32 w-44 object-cover" src={product.image} alt="" />
                                    <button onClick={() => saveValue(product.id, { value: '', name: 'image'})} className='top-1 left-1 absolute rounded-full h-5 w-5 flex items-center justify-center bg-gray-700'>
                                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div> : 
                                <label className="flex items-center justify-center h-32 w-full bg-gray-200 rounded-lg">
                                    <input className="hidden" type="file" onChange={(e) => {
                                            UpLoadImage(e.target.files[0])
                                            .then(res => {
                                            if(res.status === 200){
                                                saveValue(product.id, { value: res.data.data.url, name: 'image'})
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
                                </label>
                            }
                        </div>
                        <div className="flex px-2 flex-col w-9/12">
                            <EditText
                                id={product.id}
                                name="name"
                                className="focus:rounded-lg focus:py-0.5 focus:px-1"
                                defaultValue={product.name}
                                onSave={(e) => saveValue(product.id, e)}
                            />
                            <EditTextarea 
                                name="desc"
                                className="text-sm break-words overflow-hidden py-1 focus:rounded-lg focus:py-0.5 focus:px-1"
                                defaultValue={product.desc}
                                onSave={(e) => saveValue(product.id, e)}
                            />
                            <div className="flex items-center -mt-1 justify-between">
                                <p className="flex items-center gap-1 text-neutral-800">
                                    <EditText
                                        name="price"
                                        className="min-w-fit focus:rounded-lg focus:py-0.5 focus:px-1"
                                        defaultValue={product.price}
                                        onSave={(e) => saveValue(product.id, e)}
                                    />
                                    <EditText
                                        name="currency"
                                        className="min-w-fit focus:rounded-lg focus:py-0.5 focus:px-1"
                                        defaultValue={product.currency}
                                        onSave={(e) => saveValue(product.id, e)}
                                    />
                                </p>
                                <button onClick={() => {removeProduct({value: product.id})}} className="text-sm">
                                    <svg className="w-5 h-5 text-red-500 hover:shadow-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                            
                        </div>
                    </div>
                )
            ) }

            <button onClick={addProduct} className="bg-gray-400 hover:bg-neutral-500 w-full py-1.5 px-3 rounded-lg font-semibold text-white transition ease-in duration-200 focus:outline-none text-xs focus:shadow-lg" type="button">Add product</button>
        </div>
    )
}

export default ProductEdit
