import {Product} from "@/app/Models/Product.Model";

interface Props {
    products: Product[];
}

export default function ProductList({products}: Props) {
    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>{product.name} - {product.price}</li>
            ))}
        </ul>
    );
}
