import mongoose from "mongoose";

const collection = "Travel";

const schema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  car: {
    type: String,
    required: true,
  },
  driver: {
    type: String,
    required: true,
  },
  passengers: {
    type: String,
    required: false,
  },
  numberSeatsAvailable: {
    type: Number,
    required: true,
  },
  numberSeatsOccupied: {
    type: Number,
    required: false,
  },
  date: {
    type: String,
    required: true,
  },
  tripDistance: {
    type: Number,
    required: true,
  },
  hometown: {
    type: String,
    required: true,
  },
  provinceOrigin: {
    type: String,
    required: true,
  },
  sourceAddress: {
    type: String,
    required: true,
  },
  departureTime: {
    type: String,
    required: true,
  },
  arrivalCity: {
    type: String,
    required: true,
  },
  provinceArrival: {
    type: String,
    required: true,
  },
  arrivalAddress: {
    type: String,
    required: true,
  },
  checkIn: {
    type: String,
    required: true,
  },
  seatsCost: {
    type: Number,
    required: false,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

const travelModel = mongoose.model(collection, schema);

export default travelModel;
