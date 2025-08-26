import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
      trim: true,
      lowercase: true,
    },
    lastName: {
      type: String,
      required: false,
      minlength: 2,
      maxlength: 100,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
    },
    age: {
      type: Number,
      required: false,
      min: 18,
      max: 100,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: false,
      set: (val) => (typeof val === "string" ? val.trim().toLowerCase() : val),
    },
    city: {
      type: String,
      required: false,
      minlength: 2,
      maxlength: 100,
      trim: true,
      lowercase: true,
    },
    designation: {
      type: String,
      required: false,
      minlength: 2,
      maxlength: 100,
      trim: true,
      lowercase: true,
    },
    skills: {
      type: [String],
      required: false,
      set: (val) => {
        if (Array.isArray(val)) return val.map((s) => s.trim().toLowerCase());
        if (typeof val === "string") return [val.trim().toLowerCase()];
        return [];
      },
    },
    hobbies: {
      type: [String],
      required: false,
      set: (val) => {
        if (Array.isArray(val)) return val.map((s) => s.trim().toLowerCase());
        if (typeof val === "string") return [val.trim().toLowerCase()];
        return [];
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
