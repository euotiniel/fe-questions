import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/search";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import juniorQuestions from "./questions"

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
      <div className="flex flex-row items-center justify-between">
          <ul className="flex flex-row items-center gap-1">
            <li><Badge variant="outline">junior</Badge></li>
            <li><Badge variant="outline">web</Badge></li>
            <li><Badge variant="outline">architecture</Badge></li>
            <li><Badge variant="outline">security</Badge></li>
          </ul>
        <div>
          <Input type="text" placeholder="Search for..." />
        </div>
      </div>
      <div className="mt-12">
      {juniorQuestions.map((data) => (
        <Accordion type="single" collapsible className="w-full" key={data.id}>
        <AccordionItem value="item-1">
          <AccordionTrigger>{data.question}</AccordionTrigger>
          <AccordionContent>
            {data.answer}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      ))}
      </div>
    </div>
  );
}
