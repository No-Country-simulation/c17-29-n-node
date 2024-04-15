"use client"
import { Card, CardHeader, CardBody, CardFooter, Input, Button } from '@nextui-org/react'
import React from 'react'
import { FaCalendarDays } from "react-icons/fa6";
import { FormHero } from './FormHero';


export const HeroComponent = () => {
    return (
        <main className="h-screen w-full flex justify-center items-center">
            <Card shadow className="flex flex-col">
                <CardHeader>Hero Component</CardHeader>
                <CardBody className='flex flex-row gap-3'>
                    <FormHero />
                </CardBody>
            </Card>
        </main>
    )
}
