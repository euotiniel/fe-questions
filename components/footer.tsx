import Link from "next/link";

export default function footer() {
  return (
    <footer className="flex flex-col md:flex-row sm:flex-col items-center justify-between my-8 md:my-14 opacity-35">
      <div className="mt-9 sm:mb-3">
        <div className="text-sm">
          2024 . Made by{" "}
          <Link
            href="https://twitter.com/euotiniel"
            className="border-b "
          >
            <span className="p-1">euotiniel</span>
          </Link>
        </div>
      </div>
      <div className="mt-9 sm:mb-3">
        <div className="text-sm">
          <Link href="https://github.com/euotiniel/fe-questions/issues">
            <span className="p-1">send your feedback</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
