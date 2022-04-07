import React from 'react'

export const MenuHeader = ({info}) => {
  return (
    <div className="flex flex-col gap-2.5 items-center justify-center py-5 bg-gray-100">
        { info.name ? <h1 className="text-2xl text-gray-800 leading-none font-semibold">{info.name}</h1> : '' }
        { info.image ? <img className="object-contain h-24" src={info.image} /> : '' }
        <div className="flex flex-wrap gap-5 items-center">
            { info.phone ?
                <p className="flex items-center gap-1 font-semibold text-sm text-gray-700">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                    {info.phone}
                </p>
            : '' }
            { info.address ?
                <p className="flex items-center gap-1 font-semibold text-sm text-gray-700">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                    {info.address}
                </p>
            : '' }
        </div>
    </div>
  )
}
