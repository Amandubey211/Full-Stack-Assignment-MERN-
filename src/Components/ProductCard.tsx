import React, { useState } from "react";

interface Product {
  name: string;
  qty: number;
  rate: number;
}

interface ProductCardProps {
  product: Product;
  deleteProduct: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  deleteProduct,
}) => {
  const [hover, setHover] = useState(false);
  const totalPrice = product.qty * product.rate;

  return (
    <div
      className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <button
          onClick={deleteProduct}
          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 focus:outline-none"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4">
          <svg
            className="h-8 w-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h18M3 3v18M3 3l18 18"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-700">{product.name}</h3>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-gray-600">Quantity: {product.qty}</p>
        <p className="text-gray-600">Rate: ${product.rate.toFixed(2)}</p>
        <p className="text-gray-800 font-semibold">
          Total: ${totalPrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
