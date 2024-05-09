import Description from "@/components/description";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="my-24">
      <Description
        title="Senior"
        description="Welcome to the senior level. Test your knowledge, maybe discover new things about front-end."
      />
      <div className="mt-24 flex flex-col items-center justify-center gap-5">
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-neutral-400">
        This session is under construction, if you are interested you can:
        </p>
        <Button>
          <Link
            href="https://github.com/euotiniel/fe-questions"
            target="_blank"
          >
            Help build
          </Link>
        </Button>
      </div>
    </div>
  );
}
