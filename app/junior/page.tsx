import { Badge } from "@/components/ui/badge";
export default function Home() {
  return (
    <div className="my-24">
      <div>
      <h1 className="text-4xl font-semibold bg-gradient-to-b from-white to-gray-300 text-transparent bg-clip-text">
        Junior
      </h1>
      <p className="my-12 text-neutral-400 leading-7 [&:not(:first-child)]:mt-6">
      Find about 30 beginner-level front-end questions. From HTML questions to more complex topics.
      </p>
      </div>
      <div>
        <div>
          <ul className="flex flex-row items-center gap-1">
            <li><Badge variant="outline">junior</Badge></li>
            <li><Badge variant="outline">web</Badge></li>
            <li><Badge variant="outline">architecture</Badge></li>
            <li><Badge variant="outline">security</Badge></li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}
