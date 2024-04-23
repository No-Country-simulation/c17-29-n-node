import React from 'react'
import { TravelCard } from '../widgets/TravelCard'
import { Button } from '@nextui-org/react'

export const ActiveTravels = () => {
    return (
        <article className="flex flex-col gap-3 h-fit justify-center items-center w-full px-5 py-8">
            <h2 className='text-3xl'>Viajes Activos</h2>
            {/* article will have travel cards scrollable */}
            <article className="flex flex-col gap-8">
                <TravelCard />
                <TravelCard />
                <TravelCard />
                <TravelCard />
                <TravelCard />
            </article>
            <Button variant='solid' className='bg-primary text-white rounded-md p-2'>Ver más</Button>
        </article>
    )
}
