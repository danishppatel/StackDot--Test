import mongoose from "mongoose";
import schoolDetailsSchema from "../model/SchoolDetails.js";
import competitiveExamSchema from "../model/competitiveExam.js";
import playHouseSchema from "../model/playHouse.js";
import collegeSchmema from "../model/college.js";

const instituteSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['Playhouse','School','College','Competitive Exam Center']
    },
    location : String,
    schoolDetails: {
        type: schoolDetailsSchema
    },
    competitiveExamDetails: {
        type: competitiveExamSchema
    },
    playHouseDetails: {
        type: playHouseSchema
    },
    collegeDetails: {
        type: collegeSchmema
    }
}, {timestamps: true});

export const Institute = mongoose.model("Institute", instituteSchema); 