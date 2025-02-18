import { Product } from "@/app/Models/Product.Model";
import ProductList from "@/app/Components/ProductList.Component";
import { Box } from "@mui/material";

interface Props {
  products: Product[];
}

export default function Catalog({ products }: Props) {
  return (
    <Box>
      <ProductList products={products} />
    </Box>
  );
}
