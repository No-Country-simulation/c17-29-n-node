"use client"
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Image } from '@nextui-org/react'
import React from 'react'
import { FaCalendarDays } from "react-icons/fa6";
import { FormHero } from './FormHero';


export const HeroComponent = () => {
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center gap-36 px-5 bg-[url('/hero.png')] bg-no-repeat bg-cover">
            <h1 className='text-5xl text-center'>Mejor acompañado que viajar solo</h1>
            <Card shadow className="flex flex-col w-full md:w-fit">
                <CardBody className='flex flex-row'>
                    <FormHero />
                </CardBody>
            </Card>
        </main>
    )
}
