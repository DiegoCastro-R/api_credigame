import mongoose from "mongoose";

const URL = "mongodb://localhost:27017/credigame_db";

mongoose.connect(URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("has been successfully connected");
});

const mongodb = mongoose;

export default mongodb;
