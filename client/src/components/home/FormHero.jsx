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
    const ageRegex = /^(100|[1-9]?\d)$/
    // const ageValidation = handleValidation(ageRegex);
    const [ageValue, setAgeValue, isAgeInvalid] = useValidation(ageRegex);
    // validate name
    const nameRegex = /^[a-zA-Z0-9\s]{3,20}$/
    const [nameValue, setNameValue, isNameInvalid] = useValidation(nameRegex);

    // validate breed
    const breedRegex = /^[a-zA-Z0-9\s]{3,20}$/
    const [breedValue, setBreedValue, isBreedInvalid] = useValidation(breedRegex);

    // validate health status
    const healthStatusRegex = /^[a-zA-Z0-9\s]{3,20}$/
    const [healthStatusValue, setHealthStatusValue, isHealthStatusInvalid] = useValidation(healthStatusRegex);

    // validate behavior
    const behaviorRegex = /^[a-zA-Z0-9\s]{3,20}$/
    const [behaviorValue, setBehaviorValue, isBehaviorInvalid] = useValidation(behaviorRegex);

    // validate location
    const locationRegex = /^[a-zA-Z0-9\s,.'":;¡!?¿-]{3,35}$/
    const [locationValue, setLocationValue, isLocationInvalid] = useValidation(locationRegex);


    const router = useRouter()
    return (
        <form action="" className='flex flex-row gap-3 [&>*]:w-fit' onSubmit={handleSubmit}>
            <Input variant="underlined" type="text" label="Origen" placeholder='Rosario, Santa Fe' isRequired onChange={handleInputChange} name="Origen" locationValidation={isLocationInvalid} color={isLocationInvalid ? "danger" : "success"} errorMessage={isLocationInvalid ? "Location must be between 3 and 35 characters" : ""} onValueChange={setLocationValue} isInvalid={isLocationInvalid} className={{
                errorMessage: [
                    "absolute",
                    "bottom-0",
                    "left-0",
                    "text-danger",
                    "text-xs"
                ]
            }} />
            <Input type="text" label='Destino' placeholder='La Cumbrecita, Córdoba' isRequired />
            <Input type="date" label='Partida' isRequired />
            <Input type="number" min={1} label="Pasajeros" placeholder='4 Pasajeros' isRequired />
            <Button type='submit' size='md' className="min-w-fit w-fit h-14" isLoading={false}>Buscar</Button>
        </form>
    )
}
