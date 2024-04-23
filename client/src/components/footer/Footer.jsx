import { Image } from '@nextui-org/react'
import React from 'react'
import { FiInstagram, FiPhone, FiFacebook } from "react-icons/fi";


export const Footer = () => {
    return (
        <footer className='flex flex-col gap-3 h-fit justify-center items-center w-full px-5'>
            <Image src="/logo.svg" alt=" " className='w-full md:w-1/2' />
            <ul>
                <li>Preguntas Frecuentes</li>
                <li>Seguridad</li>
                <li>Contacto</li>
            </ul>
            <ul className='flex gap-3'>
                <li><FiFacebook size={32} /></li>
                <li><FiPhone size={32} /></li>
                <li><FiInstagram size={32} /></li>
            </ul>
            <p>© {new Date().getFullYear()} Rutas Doradas</p>
        </footer>
    )
}
