import React from 'react'
import { UserReviewCard } from '../widgets/UserReviewCard'

export const UserReviews = () => {
    return (
        <section className='flex flex-col gap-3 h-fit justify-center items-center w-full px-5'>
            <h2 className='text-3xl'>¿Qué dicen nuestros Ruteros Dorados?</h2>
            <article className="grid grid-cols-6 gap-3 h-fit justify-center items-center w-full px-5 py-8 max-w-3xl">
                <UserReviewCard name={"Maria Angela"} description={"Soy conductor habitual en Rutas Doradas y me encanta. Es una forma fácil de ganar dinero extra y conocer gente nueva. La app es muy segura y me da mucha tranquilidad saber que puedo ver el perfil de los pasajeros antes de aceptarlos."} />
                <UserReviewCard name={"Pedro Fernandez"} description={"Fue la mejor decisión que pude tomar. Es una forma muy económica de viajar y conoces a gente de todo el mundo"} timeAgo={"5 días"} />
                <UserReviewCard name={"Ana Perez"} description={"Para ir al trabajo todos los días y me ha ahorrado mucho dinero en gasolina y peajes. Además, es mucho más ecológico que ir en coche solo. La app es muy puntual y los conductores siempre han sido muy amables."} timeAgo={"2 semanas"} />
                <UserReviewCard name={"Paul James"} description={"Soy estudiante y utilizo Rutas Doradas para todos mis viajes. Es una forma muy barata y cómoda de viajar. La web  es muy segura y me da mucha tranquilidad saber que puedo compartir mi viaje con mi familia y amigos"} timeAgo={"2 horas"} />
            </article>
        </section>
    )
}
