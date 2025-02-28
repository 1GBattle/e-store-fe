"use client";
import ProductList from "@/app/Components/ProductList.Component";
import { Box } from "@mui/material";
import { useGetProductsQuery } from "@/app/redux/product.api";
import LoadingComponent from "@/app/Components/Loading.Component";

export default function Catalog() {
  const { data, isSuccess, isError, isLoading } = useGetProductsQuery();

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
        <ProductList products={data} />
      </Box>
    )
  );
}
