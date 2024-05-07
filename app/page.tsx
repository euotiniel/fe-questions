export default function Home() {
  return (
    <div className="my-24">
      <h1 className="text-4xl font-semibold bg-gradient-to-b from-white to-gray-300 text-transparent bg-clip-text">
        120 front-end questions
      </h1>
      <div className="my-12 opacity-55 flex flex-col gap-3">
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {" "}
        This website is designed to provide quick and straightforward answers to
        questions you may encounter in your day-to-day life as a front-end
        developer (and beyond). 
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The questions are taken from Ruben Paschoarelli&apos;s github. These
        Questions are intended to be a basis for interviews and candidates to
        level up in job interviews.
      </p>{" "}
      </div>
    </div>
  );
}
