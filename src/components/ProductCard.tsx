// ProductCard.tsx
import React from "react";
import { Product } from "../types/types";

interface ProductCardProps {
    product: Product;
    onToggleFavorite: (id: number) => void;
    onRemove: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onToggleFavorite, onRemove }) => {
    const { id, name, category, favorite } = product;

    return (
        <div className="bg-white p-4 border rounded-md shadow-sm flex flex-col gap-2">
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-sm text-gray-600">{category}</p>
            <div className="flex gap-2 mt-auto">
                <button onClick={() => onToggleFavorite(id)} className={`px-2 py-1 border rounded ${favorite ? "bg-yellow-300" : "bg-gray-200"}`}>
                    {favorite ? "Quitar Favorito" : "Favorito"}
                </button>
                <button onClick={() => onRemove(id)} className="px-2 py-1 border rounded bg-red-300">
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
