"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "@/app/Models/Product.Model";

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

  return (
    <div>
      <h1>Product details page</h1>
      <h2>{product?.name}</h2>
    </div>
  );
}
