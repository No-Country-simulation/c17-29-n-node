import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Avatar, Button, Chip } from "@nextui-org/react";
import { FaRegStar, FaStar, FaStarHalfStroke, FaLocationDot, FaCircle } from "react-icons/fa6";


export const TravelCard = () => {
    return (
        <Card className="px-5 col-span-6 md:col-span-2">
            <CardBody>
                <article className='flex flex-col'>
                    <div className='h-fit w-fit [&>*>*]:mr-6'>
                        {/* black dot */}
                        <div className='flex flex-row w-full items-center justify-center'>
                            <FaCircle className='w-3 h-3' />
                            <h3>Neuquen</h3>
                        </div>
                        {/* black line */}
                        <div className='w-1 h-6 bg-neutral-50 ml-1'></div>
                        <div className='flex flex-row w-full items-center justify-center'>
                            <FaLocationDot className='w-3 h-4' />
                            <h3>Santa Fe</h3>
                        </div>
                    </div>
                    <article>
                        <span>Asientos libres</span>
                        <p>00/00/2024 | 00:00pm</p>
                        <Chip radius="sm">Ida y vuelta</Chip>
                    </article>
                </article>
            </CardBody>
            <CardHeader className="flex gap-3 justify-between">
                <section className="flex flex-col">
                    <h2 className="text-md">User User</h2>
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
