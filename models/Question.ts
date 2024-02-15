import mongoose, { Schema, Document } from "mongoose";

/**
 * why extend Document?
 * This means that it's going to get some properties as well,
 * such as the _id, version and everything else that
 * each Document in the MongoDB database has
 *
 */

export interface IQuestion extends Document {
  title: String;
  content: String;
  tags: Schema.Types.ObjectId[];
  views: number;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId;
  answers: Schema.Types.ObjectId[];
  createdAt: Date;
}

const schema = new Schema({
  title: { type: String, require: true },
  content: { type: String, require: true },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  views: Number,
  upvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  author: { type: Schema.Types.ObjectId, ref: "User" },
  answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
  createdAt: { type: Date, default: Date.now },
});

const model = mongoose.models.Question || mongoose.model("Question", schema);

export default model;
