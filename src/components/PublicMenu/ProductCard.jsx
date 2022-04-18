import React from 'react'
import { ProductItem } from './ProductItem'

export const ProductCard = ({menuList}) => {
  return (
    <>
        {menuList.map((list) => (
                <div id={list.id} className="flex gap-1 flex-col px-1" key={list.id}>
                    <h3 className="lg:text-lg font-bold text-neutral-900">{list.name}</h3>
                    { list.products.map((product) => (
                        <ProductItem product={product} />
                    )) }
                </div>
            )
        )}
    </>
  )
}
