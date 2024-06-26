import Link from "next/link";
import Card from "@/components/card";

export default function Home() {
  return (
    <div className="my-24">
      <h1 className="text-2xl font-semibold bg-gradient-to-b from-white to-gray-300 text-transparent bg-clip-text">
        120 front-end questions
      </h1>
      <div className="my-12 flex flex-col gap-3 text-neutral-400">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {" "}
          This website is designed to provide quick and straightforward answers
          to questions you may encounter in your day-to-day life as a front-end
          developer (and beyond). 
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The questions are taken from{" "}
          <Link
            href="https://github.com/rubenmarcus"
            className="border-b"
            target="_blank"
          >
            <span className="p-1">Ruben Paschoarelli&apos;s</span>
          </Link>{" "}
          github. These Questions are intended to be a basis for interviews and
          candidates to level up in job interviews.
        </p>{" "}
      </div>
      <Card />
      <div className="my-12 flex flex-col gap-3 text-neutral-400">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Questions are not necessarily the decisive factor of seniority,
          factors such as project experience, leadership, documentation and
          concepts can sometimes count for much more than knowing how to
          memorize these answers.
        </p>
      </div>
    </div>
  );
}
