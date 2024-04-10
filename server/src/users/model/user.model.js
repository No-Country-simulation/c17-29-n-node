import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'this field is required']
  },
  email: {
    type: String,
    required: [true, 'this field is required'],
    unique: true,
  },
  password: {
    type: String,
    required: true
  },

  age: {
    type: Number,
    required: [true, 'this field is required']
  },

  phoneNumber: {
    type: Number,
    required: [true, 'this field is required']
  },

  role: {
    type: String,
    required: [true, "this field is required"],
    enum: ["user", "admin"],
    default: "user"
  },

  disabled: {
    type: Boolean,
    default: false
  }
}, { timestamps: true }
);

export const userModel = model('users', userSchema);