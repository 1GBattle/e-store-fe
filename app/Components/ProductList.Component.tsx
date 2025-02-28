"use client";
import { Product } from "@/app/Models/Product.Model";
import { Box } from "@mui/material";
import ProductCard from "@/app/Components/ProductCard.Component";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 4,
        justifyContent: "center",
      }}
    >
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Box>
  );
}
