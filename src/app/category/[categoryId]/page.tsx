import ProductCard from "@/components/ProductCard";


interface IProduct {
  id: number;
  nameBn: string;
  categoryIcon: string;
  unit: string;
  today: number;
  change: { pct: number; dir: "up" | "down" | "flat" };
}

const CategoryWiseProduct = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`,
  );
  const products: IProduct[] = await res.json();



  return (
    <section className="mx-5 max-w-7xl xl:mx-auto mt-4">
      <h1 className="mb-4 text-xl font-bold">
        মোট {products.length}টি পণ্য
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {products.map((item) => (
  <ProductCard key={item.id} item={item} />
))}
      </div>
    </section>
  );
};

export default CategoryWiseProduct;