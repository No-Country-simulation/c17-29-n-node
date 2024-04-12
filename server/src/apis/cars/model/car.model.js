import { Schema, model } from 'mongoose'

const carsSchema = new Schema({
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  seats: {
    type: Number,
    required: true
  },
  plateCode: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
})

export default model('cars', carsSchema)