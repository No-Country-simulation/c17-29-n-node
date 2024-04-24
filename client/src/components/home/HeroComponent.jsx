"use client"
import { Card, CardHeader, CardBody, CardFooter, Input, Button } from '@nextui-org/react'
import React from 'react'
import { FaCalendarDays } from "react-icons/fa6";
import { FormHero } from './FormHero';


export const HeroComponent = () => {
    return (
        <main className="h-screen w-full flex flex-col justify-end items-center gap-24 px-5">
            <h1 className='text-5xl text-center'>Mejor acompañado que viajar solo</h1>
            <Card shadow className="flex flex-col w-full md:w-fit">
                <CardBody className='flex flex-row'>
                    <FormHero />
                </CardBody>
            </Card>
        </main>
    )
}
