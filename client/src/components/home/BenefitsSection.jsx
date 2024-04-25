import { Card } from '@nextui-org/react'
import React from 'react'
import { FiUsers, FiCalendar, FiShield } from "react-icons/fi";

export const BenefitsSection = () => {
    return (
        <section className='flex flex-col gap-3 h-fit justify-center items-center w-full px-5'>
            <div className='text-center'>
                <h2 className='text-3xl'>¿Por qué Rutas Doradas es tu mejor opción?</h2>
            </div>
            <article className="flex flex-col gap-3 h-fit justify-center items-center w-full px-5 py-8 [&>*]:p-4 [&_section]:flex [&_section]:gap-3 [&_section]:items-center [&_section]:pb-4 [&_h3]:text-xl [&_p]:text-sm">
                <Card shadow className='w-full md:w-1/2'>
                    <section>
                        <FiCalendar size={30} />
                        <h3>Reservas flexibles</h3>
                    </section>
                    <p>Elige, reserva y modifica tus viajes fácilmente cuando lo necesites.</p>
                </Card>
                <Card shadow className='w-full md:w-1/2'>
                    <section>
                        <FiUsers size={30} />
                        <h3>Comunida Activa</h3>
                    </section>
                    <p>Conecta con personas que comparten tu amor
                        por los viajes y la aventura</p>
                </Card>
                <Card shadow className='w-full md:w-1/2'>
                    <section>
                        <FiShield size={30} />
                        <h3>Seguridad</h3>
                    </section>
                    <p>Con el sistema de reseñas podras ver quien es tu conductor para que puedas viajar de forma segura.</p>
                </Card>
            </article>
        </section>
    )
}
