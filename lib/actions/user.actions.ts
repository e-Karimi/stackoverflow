/* eslint-disable spaced-comment */
"use server";

import UserModel from "@/models/User";
import QuestionModel from "@/models/Question";
import connectToDb from "@/db/db";
import type { CreateUserParams, UpdateUserParams, DeleteUserParams } from "@/lib/actions/shared.types";
import { revalidatePath } from "next/cache";

export async function getUserByID(params: any) {
  try {
    connectToDb();

    const { userId } = params;

    const user = await UserModel.findOne({ clerkId: userId });

    return user;
  } catch (error) {
    console.log("getUserByID ~ error:", error);
  }
}

export async function createNewUser(userData: CreateUserParams) {
  try {
    connectToDb();
    const newUser = await UserModel.create(userData);
    return newUser;
  } catch (error) {
    console.log("createNewUser ~ error:", error);
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDb();
    const { clerkId, updateData, path } = params;
    await UserModel.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });

    revalidatePath(path);
  } catch (error) {
    console.log("updatedUser ~ error:", error);
  }
}

export async function deleteUSer(params: DeleteUserParams) {
  try {
    connectToDb();
    const { clerkId } = params;

    const user = await UserModel.findOneAndDelete({ clerkId });

    if (!user) {
      throw new Error("USer not found");
    }

    //* delete all user's actions from the databse =>answers,comments,questions,ets.
    // Get user question ids
    // const userQuestionsIds = await QuestionModel.find({ author: user._id }).distinct("_id");


    // delete user questions
    await QuestionModel.deleteMany({ author: user._id });

    //todo delete user answers,comments

    const deletedUser = await UserModel.findByIdAndDelete(user._id);
    return deletedUser;
  } catch (error) {
    console.log("deleteUSer ~ error:", error);
  }
}
