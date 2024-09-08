import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  // if the database is alredy connected, don't connect again

  if (connected) {
    console.log('MongoBD is connected');
    return;
  }

  // Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
