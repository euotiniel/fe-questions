"use client";

import { useState } from "react";

import Description from "@/components/description";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/search";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/faq";

import juniorQuestions from "./questions";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);
  const filteredQuestions = juniorQuestions.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  const tags = [
    {
      title: "junior",
    },
    {
      title: "web",
    },
    {
      title: "architecture",
    },
    {
      title: "security",
    },
  ];

  return (
    <div className="my-24">
      <Description
        title="Junior"
        description="Find about 30 beginner-level front-end questions. From HTML questions
          to more complex topics."
      />
      <div className="flex flex-col md:items-center gap-5 md:flex-row md:justify-between">
        <ul className="flex flex-row items-center gap-1">
          {tags.map((tag) => (
            <li key={tag.title}>
              <Badge variant="outline">{tag.title}</Badge>
            </li>
          ))}
        </ul>
        <div>
          <Input
            type="text"
            placeholder="Search for..."
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="mt-12">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((data) => (
            <Accordion
              type="single"
              collapsible
              className="w-full"
              key={data.id}
            >
              <AccordionItem value="item">
                <AccordionTrigger>{data.question}</AccordionTrigger>
                <AccordionContent>{data.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))
        ) : (
          <p className="text-neutral-400">
            No results found for{" "}
            <span className="font-semibold">&apos;{search}&apos;</span>.
          </p>
        )}
      </div>
    </div>
  );
}
