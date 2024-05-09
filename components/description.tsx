type descriptionProps = {
  title: String;
  description: String;
};

export default function description({ title, description }: descriptionProps) {
  return (
    <div>
      <h1 className="text-2xl font-semibold bg-gradient-to-b from-white to-gray-300 text-transparent bg-clip-text">
        {title}
      </h1>
      <p className="my-12 text-neutral-400 leading-7 [&:not(:first-child)]:mt-6">
        {description}
      </p>
    </div>
  );
}
