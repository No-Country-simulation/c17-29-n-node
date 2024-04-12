import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Avatar, Button } from "@nextui-org/react";
import { FaRegStar, FaStar, FaStarHalfStroke, FaLocationDot } from "react-icons/fa6";


export const TravelCard = () => {
    return (
        <Card className="px-5">
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
            <CardBody>
                <article className='flex flex-col'>
                    <div className='h-fit w-fit'>
                        {/* black dot */}
                        <svg className='w-3 h-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <circle cx="10" cy="10" r="10" />
                        </svg>
                        {/* black line */}
                        <svg className='w-1 h-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <rect height={"100%"} width={"100%"} x={0} y={0} preserveAspectRatio='none' />
                        </svg>
                        <FaLocationDot />
                    </div>
                    <div></div>
                </article>
            </CardBody>
            <Divider />
            <CardFooter className='items-center justify-center'>
                <Button color="primary" variant="flat">
                    <Link href="#">Ver Viajes</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
