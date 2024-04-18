import { Schema, model } from 'mongoose'

const ratingsSchema = new Schema({
    raterId: {
        type: String,
        required: true
    },
    rateeId: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})

export default model('ratings', ratingsSchema)