import { Link } from "next-view-transitions";

export default function header() {
  const items = [
    {
      id: 1,
      title: "junior",
      href: "/junior"
    },
    {
      id: 2,
      title: "intermediate",
      href: "/intermediate"
    },
    {
      id: 3,
      title: "senior",
      href: "/senior"
    },
  ];

  return (
    <header className="flex flex-row items-center justify-between">
      <div></div>
      <nav>
        <ul className="flex flex-row items-center gap-5">
          {items.map((item) => (
            <li
              key={item.id}
              className="text-neutral-300 duration-500 hover:text-neutral-500"
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
