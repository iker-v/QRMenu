import React from 'react'

export const ProductItem = ({product}) => {
  return (
    <div key={product.id} className="flex border rounded-lg">
        <div className="w-3/12 flex flex-col items-center justify-center rounded-l-lg bg-gray-200">
            { product.image ? <img className="object-cover h-32 rounded-l-lg" src={product.image}/> : <p className="text-xs">no image</p>  }
            
        </div>
        <div className="flex gap-0.5 flex-col py-2 px-2 w-9/12">
            <h4 className="font-semibold text-neutral-800 text-sm leading-none">{product.name}</h4>
            <p className="break-words text-xs text-neutral-800 leading-none">{product.desc}</p>
            <div className="flex items-center">
                <p className="text-sm text-neutral-700">{product.price}</p>
                <p className="text-sm text-neutral-700">{product.currency}</p>
            </div>
        </div>
    </div>
  )
}