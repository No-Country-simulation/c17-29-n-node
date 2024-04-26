import React from 'react'
import { UserReviewCard } from '../widgets/UserReviewCard'

export const UserReviews = () => {
    return (
        <section className='flex flex-col gap-3 h-fit justify-center items-center w-full px-5'>
            <h2 className='text-3xl'>¿Qué dicen nuestros Ruteros Dorados?</h2>
            <article className="flex flex-col gap-3 h-fit justify-center items-center w-full px-5 py-8">
                <UserReviewCard />
                <UserReviewCard />
                <UserReviewCard />
                <UserReviewCard />
            </article>
        </section>
    )
}
