import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    phoneno: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const user = mongoose.model("User", UserSchema);
export default user;
