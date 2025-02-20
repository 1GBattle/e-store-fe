"use client";
import ProductList from "@/app/Components/ProductList.Component";
import { Box } from "@mui/material";
import { useGetProductsQuery } from "@/app/redux/product.api";

export default function Catalog() {
  const { data, isSuccess, isError, isLoading } = useGetProductsQuery();

  if (!data && isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    isSuccess && (
      <Box>
        <ProductList products={data} />
      </Box>
    )
  );
}
