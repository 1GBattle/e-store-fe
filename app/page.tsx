"use client";
import {useEffect, useState} from "react";
import {Product} from "@/app/Models/Product.Model";
import Catalog from "@/app/Components/Catalog.Component";
import {Container} from "@mui/system";
import {Typography} from "@mui/material";

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("https://localhost:5001/api/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const addProduct = () => {
        setProducts([
            ...products,
            {
                name: "Product" + (products.length + 1),
                price: (products.length * 100) + 100,
                description: 'lorem',
                brand: "some brand",
                id: 46789, type: 'test',
                picUrl: 'https://picsum.photos/200/300?random=1',
                quantityInStock: 100
            },
        ]);
    };

    return (
        <Container maxWidth="xl">
            <Typography variant="h4">Re-store</Typography>
            <Catalog products={products} addProduct={addProduct}/>
        </Container>
    );
}
