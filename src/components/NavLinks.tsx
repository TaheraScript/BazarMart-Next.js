import Link from "next/link";

interface INavLinks {
  slug: string;
  icon: string;
  nameBn: string;
}

const NavLinks = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
  );
  const data: INavLinks[] = await res.json();

  return (
    <nav className="w-full self-stretch border-b border-gray-100 bg-white text-left">
      <ul className="m-0 flex w-full list-none items-center justify-start gap-6 overflow-x-auto px-5 py-3  scrollbar-width: none; [&::-webkit-scrollbar]:hidden">
        {data.map((item) => (
          <li key={item.slug} className="shrink-0">
            <Link
              href={`/${item.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-800 transition-colors hover:text-green-700"
            >
              <span className="text-sm leading-none">{item.icon}</span>
              <span>{item.nameBn}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;