import mongoose from "mongoose";

const schoolDetailsSchema = new mongoose.Schema({
    board: {
        type: String,
        required: true,
        enum:['GSAB', 'CBSE']
    },
    medium: {
        type: String,
        required: true,
        enum:['English', 'Hindi', 'Gujarati']
    },
    classCategory: {
        type: String,
        required: true,
        enum:['Pre-primary', 'Primary', 'Secondary', 'Higher Secondary']
    },
    standard: {
        type: String,
        required: true,
    },
    subjects: [{
        type: String,
        required: true
    }],
})

export default schoolDetailsSchema;