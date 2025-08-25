import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  email: String,
  password: String,
  city: String,
});

const User = mongoose.model("Users", userSchema);

export default User;
