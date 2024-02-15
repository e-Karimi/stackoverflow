import React from "react";
import Question from "@/components/forms/Question";
// import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getUserByID } from "@/lib/actions/user.actions";

export default async function AskQuestion() {
  // const { userId } = auth();

  const userId = "123456789";

  if (!userId) {
    redirect("/sign-in");
  }

  const mongoUser = await getUserByID({ userId });


  return (
    <div>
      <h1>Ask a Question</h1>
      <Question mongoUserId={JSON.stringify(mongoUser)} />
    </div>
  );
}
