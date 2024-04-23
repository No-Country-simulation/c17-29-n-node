import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import { FiStar } from "react-icons/fi";


export const UserReviewCard = () => {
    return (
        <Card className="max-w-[340px]">
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                        <span className="text-small tracking-tight text-default-400">hace X horas</span>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
                <p>
                    Lorem impsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
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
