import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Avatar, Button, Chip } from "@nextui-org/react";
import axios from "axios";
import React, { useEffect, useState } from 'react'
import { FiDisc, FiMapPin, FiStar } from "react-icons/fi";

export const FilterCard = (travel) => {
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
        <Card className="px-5 col-span-6 md:col-span-2 my-6">
            <CardHeader className="flex gap-5 w-fit pt-4">
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Jason Hughes"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
                <section className="flex flex-col">
                    <h2 className="text-md">{driverName.name ? driverName.name : "user Driver"}</h2>
                    <div className='flex gap-1 items-center'>
                        <span className='border-black-500 border-1 rounded text-center bg-black-500 text-white w-fit px-1'>5.0</span>
                        <FiStar fill="black" />
                    </div>
                </section>
            </CardHeader>
            <CardBody>
                <article className='flex flex-col'>
                    <div className='flex h-fit w-fit [&>*>*]:mr-4 pb-6'>
                        {/* black dot */}
                        <article className="flex">
                            <div className="flex flex-col w-fit h-full justify-between">
                                <time>{departureTime}</time>
                                <time>{checkIn}</time>
                            </div>
                            <article className="flex flex-col">
                                <section className='flex flex-row w-full items-center'>
                                    <FiDisc size={20} className="pr-1" />
                                    <h3 className="mr-2">{provinceOrigin}</h3>
                                    <span>{hometown}</span>
                                </section>
                                {/* black line */}
                                <div className='w-[1px] h-6 bg-black ml-2 justify-center items-center'></div>
                                <section className='flex flex-row w-full items-center'>
                                    <FiMapPin size={20} className="pr-1" />
                                    <h3 className="mr-2">{provinceArrival}</h3>
                                    <span>{arrivalCity}</span>
                                </section>
                            </article>
                        </article>
                    </div>
                    <article>
                        <span>Asientos libres</span>
                        <p>00/00/2024 | 00:00pm</p>
                        <Chip radius="sm">Ida y vuelta</Chip>
                    </article>
                </article>
            </CardBody>

            <Divider />
            <CardFooter className='items-center justify-center'>
                <Button color="primary" variant="flat">
                    <Link href="#">Ver Viajes</Link>
                </Button>
            </CardFooter>
        </Card >
    )
}
