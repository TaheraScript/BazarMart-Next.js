import Link from "next/link";

interface INavLinks {
  slug: string;
  icon: string;
  nameBn: string;
}

const NavLinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );
  const data: INavLinks[] = await res.json();

  return (
   <nav className="w-full border-t border-gray-100 bg-white">
  <ul className="mx-auto m-0 flex max-w-7xl list-none items-center justify-start gap-6 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
   
        {data.map((item) => (
          <li key={item.slug} className="shrink-0">
            <Link
              href={`/category/${item.slug}`}
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