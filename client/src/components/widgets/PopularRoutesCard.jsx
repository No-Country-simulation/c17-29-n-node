"use client"
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import React from 'react'

export const PopularRoutesCard = ({ origin, destination, distance, img }) => {
    return (
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className='col-span-6 md:col-span-2'>
            <CardBody className="overflow-visible p-0">
                <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt="{item.title}"
                    className="w-full object-cover h-[140px]"
                    src={img}
                />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <b>{origin} a {destination}</b>
                <p className="pl-2 text-default-500">{distance}km</p>
            </CardFooter>
        </Card>
    )
}
