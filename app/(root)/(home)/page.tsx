import { Button } from "@/components/ui/button";
import Link from "next/link";
import LocalSearchbar from "@/components/modules/search/LocalSearchbar";
import Filter from "@/components/modules/Filter";
import { HomePageFilters } from "@/constants/filtes";
import HomeFilters from "@/components/home/HomeFilters ";
import QuestionCard from "@/components/cards/QuestionCard";
import NoResult from "@/components/modules/NoResult";
import { getQuestions } from "@/lib/actions/question.actions";
import type { QuestionCardProps } from "@/components/cards/QuestionCard";

export default async function Home() {
  const results = await getQuestions({});


  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <div className="">
          <Link href="/ask-question" className="flex justify-end max-sm:w-full">
            <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
              Ask a Question
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          imgSrc="/assets/icons/search.svg"
          route="/"
          iconPosition="left"
          placeholder="Search a question..."
          otherClasses="flex-1"
        />

        <Filter
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
          items={HomePageFilters}
        />
      </div>

      <HomeFilters items={HomePageFilters} />

      {/* Questions */}
      <div className="mt-10 flex w-full flex-col gap-6 ">
        {results?.questions.length > 0 ? (
          results?.questions.map((question: QuestionCardProps) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              answers={question.answers}
              views={question.views}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            desc="Be the first to break the silence! 🚀 Ask a Question and kickstart
                        the discussion. our query could be the next big thing others learn
                        from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask Question"
          />
        )}
      </div>
    </>
  );
}
