import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  points: Number,
  email: String,
  password: String,
});

export default mongoose.model('User', userSchema);
