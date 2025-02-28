"use client";
import { useParams } from "next/navigation";
import {
  Divider,
  TableContainer,
  Table,
  TableBody,
  TextField,
  TableRow,
  TableCell,
  Grid2,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useGetProductDetailsQuery } from "@/app/redux/product.api";
import LoadingComponent from "@/app/Components/Loading.Component";

export default function ProductDetailsPage() {
  const routeParams = useParams();
  const { id } = routeParams;
  const { data, isSuccess, isError, isLoading } = useGetProductDetailsQuery(
    parseInt(id as string),
  );
  const product = data;

  const productDetails = [
    { label: "Name", value: product?.name },
    {
      label: "Price",
      value: product?.price,
    },
    { label: "Description", value: product?.description },
    { label: "Type", value: product?.type },
    { label: "Brand", value: product?.brand },
  ];

  if (!isSuccess) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <LoadingComponent />
      </div>
    );
  }

  return (
    isSuccess && (
      <Grid2 container spacing={6} maxWidth="lg" mx="auto" mt={12}>
        <Grid2 size={6}>
          <img
            src={product?.picUrl}
            alt={product?.name}
            className="w-[450px] h-[500px]"
          />
        </Grid2>

        <Grid2 size={6}>
          <Typography variant="h3">{product?.name}</Typography>
          <Divider sx={{ mb: 2 }} />

          <Typography variant="h4">
            {product?.price ? (product.price / 100).toFixed(2) : "N/A"}
          </Typography>

          <TableContainer>
            <Table
              sx={{
                width: "100%",
                color: "black",
              }}
            >
              <TableBody>
                {productDetails.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      {item.label}
                    </TableCell>
                    <TableCell>{item.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Grid2 container spacing={2} marginTop={3}>
            <TextField
              variant="outlined"
              label="Quantity"
              type="number"
              sx={{ width: 300, height: 54 }}
            />
            <Button variant="contained" sx={{ height: 54, width: 200 }}>
              Add To Cart
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
    )
  );
}
