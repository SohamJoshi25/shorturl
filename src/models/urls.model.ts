import mongoose, { Schema, Document, Model } from "mongoose";

export interface URLInterface{
    key: string;
    value: string;
}

const URLSchema: Schema<URLInterface> = new Schema({
    key: {
        type: String,
        required: true,
        unique: true,
    },
    value: {
        type: String,
        required: true
    }, 
},{ timestamps: true });
URLSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60*60*24*3 });

const URLModel: Model<URLInterface> = mongoose.models.URL as Model<URLInterface> || mongoose.model<URLInterface>("URL", URLSchema);

export default URLModel;
