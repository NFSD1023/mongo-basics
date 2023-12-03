const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: { type: Number, unique: true },
  name: { type: String, required: true },
  age: { type: Number },
  dob: { type: Date },
  isDeveloper: { type: Boolean },
  email: { type: String, required: true, unique: true },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
