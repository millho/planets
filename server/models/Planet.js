import mongoose, { Schema } from "mongoose";


export const PlanetSchema = new mongoose.Schema({
    name: { type: String, required: true, maxLength: 50 },
    inhabited: { type: Boolean },
    galaxyId: { type: Schema.Types.ObjectId, ref: 'Galaxy' }
},
    { toJSON: { virtuals: true } }
)

PlanetSchema.virtual('galaxy', {
    localField: 'galaxyId',
    ref: 'Galaxy',
    foreignField: '_id',
    justOne: true
})