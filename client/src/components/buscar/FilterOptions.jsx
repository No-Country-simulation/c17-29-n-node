import { Checkbox, CheckboxGroup, Divider } from '@nextui-org/react'
import React from 'react'

export const FilterOptions = () => {
    return (
        <article>
            <article className='flex flex-col gap-2 p-4'>
                <CheckboxGroup>
                    <Checkbox value="lowestPrice">Precio más bajo</Checkbox>
                    <Checkbox value="earliestTravel">Salida temprano</Checkbox>
                </CheckboxGroup>
            </article>
            <Divider />
            <article className='flex flex-col gap-2 p-4'>
                <CheckboxGroup label="Hora de salida">
                    <Checkbox value="earlyTravel">Antes de las 7:00</Checkbox>
                    <Checkbox value="lateTravel">Después de las 7:00</Checkbox>
                </CheckboxGroup>
            </article>
            <Divider />
            <article className='flex flex-col gap-2 p-4'>
                <CheckboxGroup label="Conductor">
                    <Checkbox value="verifiedProfiles">Perfil destacado</Checkbox>
                </CheckboxGroup>
            </article>
            <Divider />
            <article className='flex flex-col gap-2 p-4'>
                <CheckboxGroup label="Servicios">
                    <Checkbox value="twoBackSeats">2 asientos traseros</Checkbox>
                    <Checkbox value="bigLuggage">Equipaje grande</Checkbox>
                    <Checkbox value="petsAllowed">Se permiten mascotas</Checkbox>
                    <Checkbox value="smokeAllowed">Se permite fumar</Checkbox>
                    <Checkbox value="childrenAllowed">Se permite niños</Checkbox>
                </CheckboxGroup>
            </article>
        </article>
    )
}
