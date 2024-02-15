import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  clerkId: String;
  name: String;
  username: String;
  email: String;
  password?: String;
  bio?: String;
  picture: String;
  location?: String;
  portfolioWebsite?: String;
  reputation?: number;
  saved: Schema.Types.ObjectId[];
  joinedAt: Date;
}

const schema = new Schema({
  clerkId: { type: String, require: true },
  name: { type: String, require: true },
  username: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  password: { type: String },
  bio: { type: String },
  picture: { type: String },
  location: { type: String },
  portfolioWebsite: { type: String },
  reputation: { type: Number, default: 0 },
  saved: { type: Schema.Types.ObjectId, ref: "Question" },
  joinedAt: { type: Date, default: Date.now },
});

const model = mongoose.models.User || mongoose.model("User", schema);

export default model;
