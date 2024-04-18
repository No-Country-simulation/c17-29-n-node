import { Image } from '@nextui-org/react'
import React from 'react'

export const HowToSection = () => {
    return (
        <article className="flex flex-col gap-3 w-full h-screen">
            <h2>¿Cómo funciona?</h2>
            <ol>
                <li>Llená el registro</li>
                <li>Buscá tu viaje</li>
                <li>Conectá con el conductor que elegiste</li>
                <li>Llamá directamente e informale los detalles de tu viaje</li>
                <li>Viajá a tu destino</li>
            </ol>
            <Image src="/" alt="" />
        </article>
    )
}
