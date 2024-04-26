import React from 'react'

export const FilterResults = () => {
    return (
        <article className='flex flex-col gap-4'>
            <article className='flex flex-col gap-4'>
                <article className='flex flex-col gap-2'>
                    <h3 className='text-lg'>Viaje a Córdoba</h3>
                    <p>Salida: 08:00hs</p>
                    <p>Conductor: Juan Pérez</p>
                    <p>Valor: $2000</p>
                </article>
                <article className='flex flex-col gap-2'>
                    <h3 className='text-lg'>Viaje a Buenos Aires</h3>
                    <p>Salida: 09:00hs</p>
                    <p>Conductor: María Rodríguez</p>
                    <p>Valor: $1500</p>
                </article>
                <article className='flex flex-col gap-2'>
                    <h3 className='text-lg'>Viaje a Rosario</h3>
                    <p>Salida: 10:00hs</p>
                    <p>Conductor: José Gómez</p>
                    <p>Valor: $1000</p>
                </article>
            </article>
        </article>
    )
}
