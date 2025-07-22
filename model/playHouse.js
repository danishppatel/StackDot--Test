import mongoose from "mongoose";

const playHouseSchema = new mongoose.Schema({
    ageGroups: [{
        type: String,
        required: true,
    }]
});

export default playHouseSchema;