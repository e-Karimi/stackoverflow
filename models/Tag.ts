import mongoose, { Schema, Document } from "mongoose";

export interface ITag extends Document {
  name: String;
  description: String;
  questions: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createdOn: Date;
}

const schema = new Schema({
  name: { type: String, require: true, unique: true },
  description: { type: String, require: true },
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdOn: { type: Date, default: Date.now },
});

const model = mongoose.models.Tag || mongoose.model("Tag", schema);

export default model;
