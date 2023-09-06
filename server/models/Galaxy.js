import mongoose from "mongoose"


export const GalaxySchema = new mongoose.Schema({
    name: { type: String, required: true, maxLength: 50 },
    size: { type: String, enum: ["small", "medium", "large"] },
    age: { type: Number }
})