import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 13,
    max: 100,
  },
  profession: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    min: 1,
    required: true,
  },
  password: {
    type: String,
    min: 6,
  },
  cpassword: {
    type: String,
    min: 6,
  },
});

export default model("Users", userSchema);
