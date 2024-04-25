"use client"
import { FilterBar } from '@/components/buscar/FilterBar'
import { Card } from '@nextui-org/react'
import React from 'react'

export const BuscarMain = () => {
    return (
        <main className='flex flex-col gap-3 h-screen justify-center items-center w-full px-5'>
            <Card shadow className='w-full md:w-1/2'>
                <FilterBar />
            </Card>
        </main>
    )
}
