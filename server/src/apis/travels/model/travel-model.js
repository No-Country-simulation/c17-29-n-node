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
        required: false
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

    checkIn: {
        type: Number,
        required: false
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
