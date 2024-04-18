"use client"
import { Input, Button } from '@nextui-org/react'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import useValidation from '../hooks/useValidation'


export const FormHero = () => {
    const [inputInfo, setInputInfo] = useState("");
    const [searchInfo, setSearchInfo] = useState({
        origin: "",
        destination: "",
        departure: "",
        passengers: 0
    });

    const handleInputChange = (e) => {
        const name = e.target.name;
        setSearchInfo({
            ...searchInfo,
            [name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push('/search')
    }

    // validations

    // validate age
    const quantityRegex = /^([1-9]?)$/
    // const ageValidation = handleValidation(ageRegex);
    const [quantityValue, setQuantityValue, isQuantityInvalid] = useValidation(quantityRegex);

    // validate location
    const locationRegex = /^[a-zA-Z0-9\s,.'":;¡!?¿-]{4,35}$/
    const [originValue, setOriginValue, isOriginInvalid] = useValidation(locationRegex);
    const [destinationValue, setDestinationValue, isDestinationInvalid] = useValidation(locationRegex);

    const router = useRouter()
    return (
        <form action="" className='flex flex-row gap-3 [&>*]:w-fit' onSubmit={handleSubmit}>
            <Input variant="underlined" type="text" label="Origen" placeholder='Rosario, Santa Fe' isRequired onChange={handleInputChange} name="Origen" locationValidation={isOriginInvalid} color={isOriginInvalid ? "danger" : "success"} errorMessage={isOriginInvalid && "Entre 4 y 35 carácteres"} onValueChange={setOriginValue} isInvalid={isOriginInvalid} className={{
                errorMessage: [
                    "absolute",
                    "bottom-0",
                    "left-0",
                    "text-danger",
                    "text-xs"
                ]
            }} />
            <Input variant="underlined" type="text" label='Destino' placeholder='La Cumbrecita, Córdoba' isRequired locationValidation={isDestinationInvalid} color={isDestinationInvalid ? "danger" : "success"} errorMessage={isDestinationInvalid && "Entre 4 y 35 carácteres"} onValueChange={setDestinationValue} isInvalid={isDestinationInvalid} className={{
                errorMessage: [
                    "absolute",
                    "bottom-0",
                    "left-0",
                    "text-danger",
                    "text-xs"
                ]
            }} />
            <Input type="date" label='Partida' isRequired />
            <Input type="number" min={1} label="Pasajeros" placeholder='4 Pasajeros' isRequired onChange={handleInputChange} name="Pasajeros" quantityValidation={isQuantityInvalid} color={isQuantityInvalid ? "danger" : "success"} errorMessage={isQuantityInvalid ? "Debe ser entre 1 y 10 pasajeros" : ""} onValueChange={setQuantityValue} isInvalid={isQuantityInvalid} className={{
                errorMessage: [
                    "absolute",
                    "bottom-0",
                    "left-0",
                    "text-danger",
                    "text-xs"
                ]
            }} />
            <Button type='submit' size='md' className="min-w-fit w-fit h-14" isLoading={false}>Buscar</Button>
        </form>
    )
}
