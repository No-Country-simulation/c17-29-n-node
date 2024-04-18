import mongoose from 'mongoose';

const collection = "Travel";

const schema = new mongoose.Schema({
   
    origin: {
        type: String,
        required: true
    },
    originAddress:{
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    destinationAddress: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    passengers: {
        type: Array,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    hour: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    departureTime: {
        type: TimeRanges,
        required: true
    }
});

const travelModel = mongoose.model(collection, schema);

export default travelModel;
