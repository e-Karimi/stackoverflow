import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    }
    await mongoose.connect("mongodb://127.0.0.1:27017/devflow");
    console.log("db Connected!");
  } catch (error) {
    console.log("Error in connection => Error!", error);
  }
};

export default connectToDb;
