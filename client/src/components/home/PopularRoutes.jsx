import React from 'react'
import { PopularRoutesCard } from '../widgets/PopularRoutesCard'
import { Image } from '@nextui-org/react'

export const PopularRoutes = () => {
    return (
        <section className='flex flex-col gap-3 h-fit justify-center items-center w-full px-5'>
            <div className='text-center'>
                <h2 className='text-3xl'>Rutas Populares</h2>
            </div>
            <article className="flex flex-col gap-3 h-fit justify-center items-center w-full px-5 py-8">
                <PopularRoutesCard />
                <PopularRoutesCard />
                <PopularRoutesCard />
                <PopularRoutesCard />
            </article>
            <Image src="/HowToSection.svg" alt=" " className='w-full md:w-1/2' />
        </section>
    )
}
