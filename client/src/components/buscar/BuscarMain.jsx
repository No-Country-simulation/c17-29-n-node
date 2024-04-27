"use client"
import { FilterBar } from '@/components/buscar/FilterBar'
import { Card } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { FilterOptions } from './FilterOptions'
import { FilterResults } from './FilterResults'
import axios from 'axios'
import { FilterCard } from '../widgets/FilterCard'

export const BuscarMain = () => {
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

    // date logic
    const currentDate = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = currentDate.toLocaleDateString('es-ES', options);

    return (
        <main className='flex flex-col gap-3 h-fit justify-center items-center w-full px-5'>
            <Card shadow className='w-full md:w-1/2 mt-8'>
                <FilterBar />
            </Card>
            <article className='flex w-full gap-12 pt-8 px-4'>
                <Card shadow className='w-full h-fit py-8 md:w-1/3'>
                    <h2 className='text-center text-2xl'>Filtros</h2>
                    <FilterOptions />
                </Card>
                <article className='w-full md:w-2/3 gap-4'>
                    <h1 className='text-4xl'>{formattedDate}</h1>
                    <span>viajes Disponibles:</span>
                    <FilterResults />
                    {travels.map(travel => (
                        <FilterCard travel={travel} key={travel._id} />
                    ))}
                </article>
            </article>
        </main>
    )
}
