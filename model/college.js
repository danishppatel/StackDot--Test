import mongoose from "mongoose";

const  collegeSchmema= new mongoose.Schema({
    departments: [{
        type: String,
        required: true
    }],
    courses: [{
        type: String,
        required: true
    }],
})

export default collegeSchmema;