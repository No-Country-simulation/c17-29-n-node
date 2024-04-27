"use client"
import React, { useEffect, useState } from 'react'
import { TravelCard } from '../widgets/TravelCard'
import { Button } from '@nextui-org/react'
import axios from 'axios'

export const ActiveTravels = () => {
    const [travels, setTravels] = useState([])

    const getAllTravels = async () => {
        try {
            const res = await axios.get('https://rutasdoradasback.vercel.app/api/travels', {
                headers: {
                    'Content-Type': 'application/json',
                    "apikey": 'R20D24AK000001'
                }
            }).then(res => res.data)
            const data = await res.data
            setTravels(data.travels)
            return data
        } catch (error) {
            console.log("Error when bringing travels", error)
        }
    }

    useEffect(() => {
        getAllTravels()
    }, [])
    return (
        <article className="flex flex-col gap-3 h-fit justify-center items-center w-full px-5 py-8">
            <h2 className='text-3xl'>Viajes Activos</h2>
            {/* article will have travel cards scrollable */}
            <article className="grid grid-cols-6 gap-8 max-w-4xl">
                {travels.map(travel => (
                    <TravelCard travel={travel} key={travel._id} />
                ))}
            </article>
            <Button variant='solid' className='bg-primary text-white rounded-md p-2'>Ver más</Button>
        </article>
    )
}
