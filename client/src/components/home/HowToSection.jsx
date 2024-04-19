import { Image } from '@nextui-org/react'
import React from 'react'

export const HowToSection = () => {
    return (
        <article className="flex flex-col gap-3 h-fit justify-center items-center w-full px-5">
            <Image src="HowToSection.svg" alt=" " className='w-full md:w-1/2' />
            <h2>¿Cómo funciona?</h2>
            <ol className='list-decimal'>
                {/* numbers before each list */}
                <li>Llená el registro</li>
                <li>Buscá tu viaje</li>
                <li>Conectá con el conductor que elegiste</li>
                <li>Llamá directamente e informale los detalles de tu viaje</li>
                <li>Viajá a tu destino</li>
            </ol>
        </article>
    )
}
