import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Avatar, Button, Chip } from "@nextui-org/react";
import React from 'react'
import { FaCircle, FaLocationDot, FaStar } from "react-icons/fa6";

export const FilterCard = () => {
    return (
        <Card className="px-5 col-span-6 md:col-span-2">
            <CardHeader className="flex gap-5 w-fit">
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
                    <h2 className="text-md">User User</h2>
                    <div className='flex gap-1 items-center'>
                        <span className='border-black-500 border-1 rounded text-center bg-black-500 text-white w-fit px-1'>5.0</span>
                        <FaStar />
                    </div>
                </section>
            </CardHeader>
            <CardBody>
                <article className='flex flex-col'>
                    <div className='flex h-fit w-fit [&>*>*]:mr-6'>
                        {/* black dot */}
                        <article className="flex flex-col">
                            <div className="flex flex-col w-fit">
                                <time>00:00 hs</time>
                                <time>00:00 hs</time>

                            </div>
                            <div className='flex flex-row w-full items-center justify-center'>
                                <FaCircle className='w-3 h-3' />
                                <h3>Neuquen</h3>
                            </div>
                            {/* black line */}
                            <div className='w-1 h-6 bg-black ml-1 justify-center items-center'></div>
                            <div className='flex flex-row w-full items-center justify-center'>
                                <FaLocationDot className='w-3 h-4' />
                                <h3>Santa Fe</h3>
                            </div>
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
