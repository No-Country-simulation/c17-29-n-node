import React from 'react'
import { PopularRoutesCard } from '../widgets/PopularRoutesCard'
import { Image } from '@nextui-org/react'

export const PopularRoutes = () => {
    return (
        <section className='flex flex-col gap-3 h-fit justify-center items-center w-full px-5'>
            <div className='text-center'>
                <h2 className='text-3xl'>Rutas Populares</h2>
            </div>
            <article className="grid grid-cols-6 max-w-3xl gap-3 h-fit justify-center items-center w-full px-5 py-8">
                <PopularRoutesCard origin={"Buenos Aires"} destination={"Mar del Plata"} img={"https://fotos.perfil.com//2019/05/16/900/0/0516-propuestas-cordoba-santa-fe-699543.jpg"} distance={414} />
                <PopularRoutesCard origin={"Sante Fe"} destination={"Cordoba"} img={"https://busbud.imgix.net/city-hires/1681397433681-Cordoba,Cordoba,Argentina.jpg?h=630&w=1200&auto=format%2Ccompress&fit=crop"} distance={369} />
                <PopularRoutesCard origin={"Zarate"} destination={"Gualeguaychú"} img={"https://infoner.com.ar/wp-content/uploads/2020/10/Turismo-Gchu-2020-21.jpg"} distance={148} />
                <PopularRoutesCard origin={"Tandil"} destination={"San Martín"} img={"https://media.airedesantafe.com.ar/p/eb44e0d174d356a6ea46d21c514a0ea7/adjuntos/268/imagenes/003/785/0003785915/1200x0/smart/intiyaco-2png.png"} distance={1337} />
                <PopularRoutesCard origin={"Rosario"} destination={"Paraná"} img={"https://www.ellitoral.com/images/2024/01/31/pmfNI-89L_1300x655__1.jpg"} distance={205} />
                <PopularRoutesCard origin={"Bahía Blanca"} destination={"La Plata"} img={"https://rosarioplus-assets.tadevel.xyz/6482279f2bfde5e9c35570cb/thumb.jpg"} distance={627} />
            </article>
            <Image src="/HowToSection.svg" alt=" " className='w-full md:w-1/2' />
        </section>
    )
}
