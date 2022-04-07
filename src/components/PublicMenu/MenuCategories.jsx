import React from 'react'

export const MenuCategories = ({menuList}) => {
  return (
    <div className="flex items-center gap-3 px-1 overflow-x-auto">
        {menuList.map((list) => {
            return(
                <a href={`#${list.id}`} className="border flex w-full py-1.5 font-semibold text-neutral-800 px-3 rounded-lg text-sm" key={list.id}>
                    {list.name}
                </a>
            )
        })}
    </div>
  )
}
