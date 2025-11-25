import mongoose from 'mongoose';
const connectToMongoDB = async () => {
  try {
    console.log("connecting...")
    const uri:string = process.env.MONGO_URI || "";
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}
export default connectToMongoDB;