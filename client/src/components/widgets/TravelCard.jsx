import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Avatar } from "@nextui-org/react";
import { FaRegStar, FaStar, FaStarHalfStroke } from "react-icons/fa6";


export const TravelCard = () => {
    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3 justify-between">
                <div className="flex flex-col">
                    <p className="text-md">User User</p>
                    <div className='flex gap-1 items-center'>
                        <span className='border-black-500 border-1 rounded text-center bg-black-500 text-white w-fit px-1'>5.0</span>
                        {/* 5 stars */}
                        {[...Array(5)].map((i) => (
                            <FaStar key={i} />
                        ))}
                    </div>
                </div>
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
                <p>Make beautiful websites regardless of your design experience.</p>
            </CardBody>
            <Divider />
            <CardFooter>
                <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/nextui-org/nextui"
                >
                    Visit source code on GitHub.
                </Link>
            </CardFooter>
        </Card>
    )
}
