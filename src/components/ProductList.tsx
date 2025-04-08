// ProductList.tsx
import React from "react";
import { Product } from "../types/types";
import ProductCard from "./ProductCard";

interface ProductListProps {
    products: Product[];
    onToggleFavorite: (id: number) => void;
    onRemove: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onToggleFavorite, onRemove }) => {
    if (products.length === 0) {
        return <p>No hay productos que mostrar.</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onToggleFavorite={onToggleFavorite} onRemove={onRemove} />
            ))}
        </div>
    );
};

export default ProductList;
