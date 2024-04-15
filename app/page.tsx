import getProducts from "./products/actions/get-products";
import CreateProductFab from "./products/create-product/create-product-fab";
import Products from "./products/products";

export default async function Home() {
  return (
    <>
      <Products />
      <CreateProductFab />
    </>
  );
}
