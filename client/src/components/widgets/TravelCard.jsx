"use client"
import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Avatar, Button, Chip } from "@nextui-org/react";
import { FaRegStar, FaStar, FaStarHalfStroke, FaLocationDot, FaCircle } from "react-icons/fa6";
import axios from 'axios';


export const TravelCard = (travel) => {
    const [driverName, setDriverName] = useState('driverUser')
    const { _id, user, car, driver, date, tripDistance, sourceAddress, hometown, provinceOrigin, provinceArrival, numberSeatsAvailable, isActive, departureTime, checkIn, arrivalCity, arrivalAddress } = travel.travel

    const getName = async (driverID) => {
        try {
            const res = await axios.get(`https://rutasdoradasback.vercel.app/api/users/${driverID}`, {
                headers: {
                    'Content-Type': 'application/json',
                    "apikey": 'R20D24AK000001'
                }
            }).then(res => res.data)
            const data = await res.data
            setDriverName(data.user)
            console.log(data)
            return data
        } catch (error) {
            console.log("Error when bringing driver", error)
        }
    }

    useEffect(() => {
        getName(driver)
    }, [])

    return (
        <Card className="px-5 col-span-6 md:col-span-2">
            <CardBody>
                <article className='flex flex-col'>
                    <div className='h-fit w-fit [&>*>*]:mr-6'>
                        {/* black dot */}
                        <div className='flex flex-row w-full items-center'>
                            <FaCircle className='w-3 h-3' />
                            <h3>{provinceOrigin}</h3>
                        </div>
                        {/* black line */}
                        <div className='w-1 h-6 bg-black ml-1'></div>
                        <div className='flex flex-row w-full items-center'>
                            <FaLocationDot className='w-3 h-4' />
                            <h3>{provinceArrival}</h3>
                        </div>
                    </div>
                    <article>
                        <span>{numberSeatsAvailable} Asientos libres</span>
                        <p>{date} | 00:00pm</p>
                        <Chip radius="sm">Ida y vuelta</Chip>
                    </article>
                </article>
            </CardBody>
            <CardHeader className="flex gap-3 justify-between">
                <section className="flex flex-col">
                    <h2 className="text-md">{driverName.name ? driverName.name : "user Driver"}</h2>
                    <div className='flex gap-1 items-center'>
                        <span className='border-black-500 border-1 rounded text-center bg-black-500 text-white w-fit px-1'>5.0</span>
                        {/* 5 stars */}
                        {[...Array(5)].map((i) => (
                            <FaStar key={i} />
                        ))}
                    </div>
                </section>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Jason Hughes"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
            </CardHeader>
            <Divider />
            <CardFooter className='items-center justify-center'>
                <Button color="primary" variant="flat">
                    <Link href="#">Ver Viajes</Link>
                </Button>
            </CardFooter>
        </Card >
    )
}
