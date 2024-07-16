import mongoose , {Schema} from "mongoose";

export interface URLInterface{
    key:string;
    value:string;
    expiryDate:Date;
}


export const URLSchema : Schema<URLInterface> = new Schema({
    key:{
        type:String,
        required:true
    },
    value:{
        type:String,
        required:true
    },
    expiryDate:{
        type:Date,
        default:() => Date.now() + 24*60*60*1000,
        required:true
    }
});

const URLModel = (mongoose.models.URL as mongoose.Model<URLInterface> || mongoose.model<URLInterface>("URL" ,URLSchema ))
export default URLModel;