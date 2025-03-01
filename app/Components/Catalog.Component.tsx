"use client";
import ProductList from "@/app/Components/ProductList.Component";
import { Box } from "@mui/material";
import { useGetProductsQuery } from "@/app/redux/product.api";
import LoadingComponent from "@/app/Components/Loading.Component";
import { useEffect, useState } from "react";
import { Product } from "@/app/Models/Product.Model";
import { getAllProducts } from "@/app/utils/data-fetching/products";

export default function Catalog() {
  const { data, isSuccess, isError, isLoading } = useGetProductsQuery();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      res ? setProducts(res) : setProducts([]);
    });

    console.log(products);
  }, []);
  if (!data && isLoading)
    return (
      <div className="flex justify-center items-center w-full h-full">
        <LoadingComponent />
      </div>
    );
  if (isError) return <div>Error...</div>;

  if (!isSuccess && !isError) {
    return (
      <div>
        <LoadingComponent />
      </div>
    );
  }
  return (
    isSuccess && (
      <Box>
        <ProductList products={products} />
      </Box>
    )
  );
}
