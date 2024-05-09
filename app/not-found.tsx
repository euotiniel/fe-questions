import { Button } from "@/components/ui/button";
import { Link } from 'next-view-transitions'

export default function page() {
  return (
    <div className="mt-32 flex flex-col items-center justify-center gap-5">
        <h1 className="text-2xl font-semibold bg-gradient-to-b from-white to-gray-300 text-transparent bg-clip-text">
       404
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-neutral-400">
          Opsss! The requested page was not found.
        </p>
        <Button>
          <Link
            href="/"
          >
            Come back home
          </Link>
        </Button>
      </div>
  )
}
