import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import { FiStar } from "react-icons/fi";


export const UserReviewCard = ({ name, timeAgo, description }) => {
    return (
        <Card className="max-w-[340px] col-span-3 h-full">
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h3 className="text-small font-semibold leading-none text-default-600">{name}</h3>
                        <span className="text-small tracking-tight text-default-400">hace {timeAgo}</span>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
                <p>
                    {description}
                </p>
            </CardBody>
            <CardFooter className="gap-3">
                {[...Array(5)].map((i) => (
                    <FiStar key={i} />
                ))}
            </CardFooter>
        </Card>
    )
}
