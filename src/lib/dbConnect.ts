import mongoose from "mongoose";

type connectionObject = {
    isConnected?:number;
}

const connection : connectionObject = {};

async function dbConnect() : Promise<void> {
    if(connection.isConnected){
        console.log("Database Already Connected");
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGO_URI as string,{});
        connection.isConnected = db.connections[0].readyState;
        console.log("Database Successfully Connected"+db);

    } catch (error) {
        console.error("Error Occured while connecting to database : " + error);
        process.exit(1);
    }
}
export default dbConnect;
