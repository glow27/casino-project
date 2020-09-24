import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  points: Number,
  email: String,
  password: String,
  vkID: String,
  yandID: String,
});

export default mongoose.model('User', userSchema);
