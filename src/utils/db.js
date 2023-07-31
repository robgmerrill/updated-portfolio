import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    // await mongoose.connect('mongodb+srv://robgmerrill:Giants11!!@cluster0.s0cpm1w.mongodb.net/test?retryWrites=true&w=majority');

  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;