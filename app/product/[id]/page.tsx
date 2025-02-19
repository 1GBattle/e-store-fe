"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "@/app/Models/Product.Model";
import Image from "next/image";
import {
  Box,
  CardMedia,
  Divider,
  TableContainer,
  Table,
  TableBody,
  TextField,
  TableRow,
  TableHead,
  TableCell,
  Grid2,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ProductDetailsPage() {
  const routeParams = useParams();
  const [product, setProduct] = useState<Product>();

  const { id } = routeParams;

  useEffect(() => {
    fetch(`https://localhost:5001/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [id]);

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

  return (
    <Grid2 container spacing={6} maxWidth="lg" mx="auto" mt={12}>
      <Grid2 size={6}>
        <img
          src={product?.picUrl}
          alt={product?.name}
          className="w-[500px] h-[600px]"
        />
      </Grid2>

      <Grid2 size={6}>
        <Typography variant="h3">{product?.name}</Typography>
        <Divider sx={{ mb: 2 }} />

        <Typography variant="h4">
          {product?.price ? (product.price / 100).toFixed(2) : "N/A"}
        </Typography>

        <TableContainer>
          <Table sx={{ width: "50%" }}>
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
          <Button variant="contained" sx={{ height: 50, width: 200 }}>
            Add To Cart
          </Button>
        </Grid2>
      </Grid2>
    </Grid2>
  );
}
