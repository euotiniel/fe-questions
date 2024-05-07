"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Link } from 'next-view-transitions'

type CardHoverEffectProps = {
  containerClassName?: string;
  itemClassName?: string;
  hoveredItemClassName?: string;
};

export default function CardHoverEffect({
  containerClassName,
  itemClassName,
  hoveredItemClassName,
}: CardHoverEffectProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const items = [
    {
      title: "Junior",
      description:
        "Find about 30 beginner-level front-end questions. From HTML questions to more complex topics.",
      href: "/junior",
    },
    {
      title: "Pleno",
      description:
        "Want something a little more advanced? Explore the trail to the fullest and find out if it's up to the task.",
      href: "/pleno",
    },
    {
      title: "Senior",
      description:
        "Welcome to the senior level. Test your knowledge, maybe discover new things about front-end.",
      href: "/senior",
    },
  ];

  return (
    <div className={cn("grid md:grid-cols-3", containerClassName)}>
      {items.map((item, idx) => {
        const { title, description, href } = item;

        return (
          <Link
            key={idx}
            href={href}
            rel="noopener noreferrer"
            className={cn("relative flex flex-col gap-3 p-4", itemClassName)}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <AnimatePresence>
              {hoveredIdx === idx && (
                <motion.span
                  className={cn(
                    "absolute inset-0 z-0 block h-full w-full rounded-xl bg-neutral-900",
                    hoveredItemClassName
                  )}
                  layoutId="cardHoverEffect"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="z-[1] space-y-3">
              <h1 className="font-medium text-white">{title}</h1>
              <p className="text-neutral-400">{description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}