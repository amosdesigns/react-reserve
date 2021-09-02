import mongoose from "mongoose";

const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    console.log("****** Using existing Connection ******");
    return;
  }
  const db = await mongoose.connect(process.env.MONGO_SRV, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("***Connected to mongo: DB Connected***");
  connection.isConnected = db.connections[0].readyState;
}
export default connectDb;
