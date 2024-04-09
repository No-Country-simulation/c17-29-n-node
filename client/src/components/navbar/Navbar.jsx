import React from 'react'
import { FaRegUser } from "react-icons/fa6";

export const Navbar = () => {
    return (
        <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm' role='navigation'>
            <article className='pl-8 w-1/3 [&>*]:mx-4 [&>*]:text-2xl'>
                <a href='/'>Logo</a>
                <a href='/'>Inicio</a>
                <a href='/'>Informacion</a>
            </article>
            <article className='pr-8 w-1/3 flex justify-end gap-4 [&>*]:w-11 [&>*]:h-11 [&>*]:rounded-full [&>*]:hover:cursor-pointer'>
                {/* user svg */}
                <svg xmlns="http://www.w3.org/2000/svg" className="border-[#834AA4] border-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                {/* person svg for user logo */}
                <FaRegUser className='bg-[#834AA4]' />
            </article>
        </nav>
    )
}
