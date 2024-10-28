import mongoose from "mongoose";

export const  connectDBConnection = async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${connect.connection.host}`);
      } catch (error) {
        console.error(`Error in Mongo db connection ${error}`);
        throw new Error(error);
      }
}