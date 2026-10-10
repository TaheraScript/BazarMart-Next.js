import ProductDetails from "@/components/ProductDetails";

const ProductsDetailPage = async ({
  params,
}: {
  params: Promise<{ productsId: string }>;
}) => {
  const { productsId } = await params;

  return <ProductDetails id={productsId} />;
};

export default ProductsDetailPage;