import mongoose from 'mongoose';

const collection = "Travel";

const schema = new mongoose.Schema({
    origen:{
        type: String,
        required: true
    },
    destino:{
        type: String,
        required: true
    },
    capacidad: {
        type: Number,
        required: true
    },
    dia:{
        type: String,
        required: true
    },
    horario:{
        type: Number,
        required: true
    }
});

const travelModel = mongoose.model(collection, schema);

export default travelModel;