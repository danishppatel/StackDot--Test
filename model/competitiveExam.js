import mongoose from "mongoose";

const competitiveExamSchema = new mongoose.Schema({
    examType: {
        type: String,
        required: true,
        enum: ['JEE', 'NEET', 'GATE', 'CATE']
    }
});

export default competitiveExamSchema;