import Link from "next/link";

interface INavLinks {
  slug:string,
  icon:string,
  nameBn:string
}
const NavLinks = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
  );
  const data:INavLinks[] = await res.json();
  console.log(data);
  return (
    <div>
      {data.map((product, index) => (
        <Link
          key={index}
          href={product.slug}
          className="m-5 inline-flex items-center gap-2"
        >
          <span>{product.icon}</span>
          <span>{product.nameBn}</span>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
