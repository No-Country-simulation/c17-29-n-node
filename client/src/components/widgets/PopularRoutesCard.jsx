"use client"
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import React from 'react'

export const PopularRoutesCard = () => {
    return (
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
                <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt="{item.title}"
                    className="w-full object-cover h-[140px]"
                    src="{item.img}"
                />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <b>Buenos Aires</b>
                <p className="pl-2 text-default-500">500km</p>
            </CardFooter>
        </Card>
    )
}
