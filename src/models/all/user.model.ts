const mongoose = require("mongoose");
import { model, models} from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["author", "admin"], default: "author" },
  reputation: { type: Number, default: 0 },
});

export const userModel = models['user'] || model('user', UserSchema);
