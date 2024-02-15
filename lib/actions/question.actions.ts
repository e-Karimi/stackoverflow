"use server";

import connectToDb from "@/db/db";
import QuestionModel from "@/models/Question";
import TagModel from "@/models/Tag";
import UserModel from "@/models/User";
import { revalidatePath } from "next/cache";
import { GetQuestionsParams, CreateQuestionParams } from "./shared.types";

export async function createQuestion(params: CreateQuestionParams) {
  try {
    connectToDb();
    const { title, content, tags, author, path } = params;

    // Create the question
    const question = await QuestionModel.create({ title, content, author });

    // Find an existing Tag or create a new one, and associate it with a question.
    const tagDocuments = [];

    for (const tag of tags) {
      const existingTag = await TagModel.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } }, // find something
        { $setOnInsert: { name: tag }, $push: { question: question._id } }, // do something on it
        { upsert: true, new: true } // additional options
      );

      tagDocuments.push(existingTag._id);
    }

    // Update the question
    await QuestionModel.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    // Create an interaction recrod for the user's
    // ask_question action

    // Increment author's reputation by +5 points because
    // he created a question

    // revalidatePath allows you to purge cached data on-demand for a specific path.
    revalidatePath(path);
  } catch (error) {
    console.log("createQuestion ~ error:", error);
  }
}

export async function getQuestions(params: GetQuestionsParams) {
  try {
    connectToDb();

    const questions: any = await QuestionModel.find({})
      .populate({ path: "tags", model: TagModel })
      .populate({ path: "author", model: UserModel })
      .sort({ createdAt: -1 });
    return { questions };
  } catch (error) {
    console.log("getQuestions ~ error:", error);
  }
}
