import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useEditMenuContext } from "../../state/context";
import { v4 as uuidv4 } from 'uuid';
import { EditText } from 'react-edit-text'
import SaveMenu from "../../api/SaveMenu";
import produce from 'immer';

function CategoryCard({category, categoryIndex}){

    const {
        categoryList,
        setCategoryList, 
        loading, 
        refreshIframe, 
        setRefreshIframe
    } = useEditMenuContext()

    useEffect(() => {
        localStorage.setItem("menu", JSON.stringify(categoryList))
        SaveMenu(categoryList).then(() => setRefreshIframe(refreshIframe+1))
    }, [categoryList])

    const addProduct = categoryIndex => {
        const newList = [...categoryList]
        const product = {
            id: uuidv4(),
            image: '',
            name: '',
            desc: '',
            price: '',
            currency: '',
            quantity: '1 cup'
        }

        setCategoryList(produce(newList, draftList => {
            draftList[categoryIndex].products.push(product)
            return draftList
        }))
    }

    const removeCategory = categoryIndex => {
        const newList = [...categoryList]
        newList.splice(categoryIndex, 1)
        setCategoryList(newList)
    }

    const saveValue = (categoryIndex, target) => {
        const newList = [...categoryList]
        setCategoryList(produce(newList, draftList => {
            draftList[categoryIndex][target.name] = target.value
            return draftList
        }))
    }

    if (loading){<p>Loading</p>}

    return (
        <div key={category.id} className="flex flex-col w-full border rounded-xl">
            <div className="flex items-center justify-between bg-gray-200 rounded-t-xl border-b py-2 px-4">
                <EditText
                    id={category.id}
                    name="name"
                    defaultValue={category.name}
                    className="bg-gray-200 focus:rounded-lg focus:py-0.5 focus:px-1"
                    onSave={(e) => saveValue(categoryIndex)}
                />
                <button onClick={removeCategory}>
                    <svg className="w-5 h-5 text-red-500 hover:shadow-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div className="flex flex-col gap-3 items-start bg-white rounded-b-xl p-2">
                { category.products.map((product, productIndex) => {
                    return <ProductCard
                                product={product}
                                productIndex={productIndex}
                                categoryIndex={categoryIndex}
                    />
                })}
                <button 
                    onClick={() => addProduct(categoryIndex)}
                    className="flex items-center gap-1 py-1.5 px-3 rounded-lg font-semibold text-gray-700 focus:outline-none text-xs hover:text-gray-900" type="button">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
                    Add product
                </button>
            </div>
        </div>
    )
}

export default CategoryCard