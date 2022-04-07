import { useState, useContext } from "react"
import ProductEdit from "./ProductEdit";
import { AppContext } from "../../../../context"
import { v4 as uuidv4 } from 'uuid';
import { EditText } from 'react-edit-text'
import SaveChanges from "../../../../api/SaveChanges";

function CategoryEdit(){

    const {
        categoryList,
        setCategoryList, 
        loading, 
        refreshIframe, 
        setRefreshIframe
    } = useContext(AppContext)

    const addCategory = () => {
        console.log(categoryList)
        setCategoryList([...categoryList, 
            {id: uuidv4(), name: 'Category',
            products: [
                {
                    id: uuidv4(),
                    name: 'Product',
                    desc: 'desc',
                    price: '7',
                    currency: '€',
                    quantity: '1 cup'
                }
            ]
        }])
    }

    const removeCategory = id => {
        const list = [...categoryList]
        list.splice(list.findIndex(value => value.id === id), 1)
        localStorage.setItem("menu", JSON.stringify(list))

        SaveChanges()
        setRefreshIframe(refreshIframe+1)
        setCategoryList(list)

    }

    const saveValue = (e, id) => {
        const newList = [...categoryList]
        const categoryIndex = newList.findIndex(category => category.id === id)

        newList[categoryIndex]['name'] = e.value
        setCategoryList(newList)

        localStorage.setItem("menu", JSON.stringify(newList))
        SaveChanges()

        setRefreshIframe(refreshIframe+1)
    }

    if (loading){
        return (
            <div>
                <p>Loading</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-2 justify-center items-start">
            { categoryList.map(category => {
                return (
                    <div key={category.id} className="flex flex-col w-full border rounded-xl">
                        <div className="flex items-center justify-between bg-gray-200 rounded-t-xl border-b py-2 px-4">
                            <EditText
                                id={category.id}
                                name="name"
                                defaultValue={category.name}
                                onSave={(e) => saveValue(e, category.id)}
                            />
                            <button onClick={removeCategory}>
                                <svg className="w-5 h-5 text-red-500 hover:shadow-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <ProductEdit
                            products={category.products}
                            categoryid={category.id}
                        />

                    </div>
                )

             }) 
            }

            <button onClick={addCategory} className="py-1.5 self-start mt-5 flex items-center gap-1 px-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold" type="button">Add category</button>
        </div>
    )
}

export default CategoryEdit