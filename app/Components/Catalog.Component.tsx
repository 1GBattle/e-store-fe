import {Product} from "@/app/Models/Product.Model";
import {Button} from "@mui/material";
import ProductList from "@/app/Components/ProductList.Component";

interface Props {
    products: Product[];
    addProduct: () => void;
}

export default function Catalog({products, addProduct}: Props) {
    return (
        <div>
            <ProductList products={products}/>

            <Button variant="contained" onClick={() => addProduct()}>Add Product</Button>
        </div>
    );
}
