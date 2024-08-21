import mongoose from "mongoose";

const MONGO_URI='mongodb+srv://kaushikkodarapu10:LOkxw0GNlhB3TNWj@cluster1.gjdudq3.mongodb.net/hms?retryWrites=true&w=majority&appName=Cluster1'

export const dbConnection = () => {
  mongoose
    .connect(MONGO_URI, {
      // dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
      dbName: "hms",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
