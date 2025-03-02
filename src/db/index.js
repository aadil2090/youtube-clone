import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB Connected !! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.log("Mongo Db Connection Error: ", err);
    process.exit(1);
  }
};

export default connectDb;
