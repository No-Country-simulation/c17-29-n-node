import React, { useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import useValidation from '../hooks/useValidation'
import { useValidationContext } from '@/context/ValidationContext'

export const FilterBar = () => {
    // validation context
    const {
        quantityValue, setQuantityValue, isQuantityInvalid,
        originValue, setOriginValue, isOriginInvalid,
        destinationValue, setDestinationValue, isDestinationInvalid
    } = useValidationContext()

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


    return (
        <form action="" className='flex flex-col md:flex-row gap-2 md:py-4 md:gap-8 [&>*>input]:px-8 w-full md:[&>*]:w-fit [&_*]:placeholder:text-lg md:[&_*]:placeholder:text-tiny' onSubmit={handleSubmit}>
            <Input variant="underlined" type="text" label="Origen" placeholder='Rosario, Santa Fe' isRequired onChange={handleInputChange} name="origin" locationValidation={isOriginInvalid} color={isOriginInvalid ? "danger" : "success"} errorMessage={isOriginInvalid && "Entre 4 y 35 carácteres"} onValueChange={setOriginValue} isInvalid={isOriginInvalid} />
            <Input variant="underlined" type="text" label='Destino' placeholder='La Cumbrecita, Córdoba' isRequired onChange={handleInputChange} name="destination" locationValidation={isDestinationInvalid} color={isDestinationInvalid ? "danger" : "success"} errorMessage={isDestinationInvalid && "Entre 4 y 35 carácteres"} onValueChange={setDestinationValue} isInvalid={isDestinationInvalid} />
            <Input variant="underlined" type="date" label='Partida' isRequired name='departure' />
            <Input variant="underlined" type="number" min={1} label="Pasajeros" placeholder='4 Pasajeros' isRequired onChange={handleInputChange} name="passengers" quantityValidation={isQuantityInvalid} color={isQuantityInvalid ? "danger" : "success"} errorMessage={isQuantityInvalid ? "Debe ser entre 1 y 10 pasajeros" : ""} onValueChange={setQuantityValue} isInvalid={isQuantityInvalid} className={{
                errorMessage: [
                    "absolute",
                    "bottom-0",
                    "left-0",
                    "text-danger",
                    "text-xs"
                ]
            }} />
            <Button type='submit' size='md' className="min-w-full w-full md:min-w-fit md:w-fit h-14" isLoading={false} isDisabled={isQuantityInvalid ?? isOriginInvalid ?? isDestinationInvalid}
            >Buscar</Button>
        </form>
    )
}
