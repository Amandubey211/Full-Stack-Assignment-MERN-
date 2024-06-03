import React, { useState } from "react";
import Modal from "../Components/Modal";
import ProductCard from "../Components/ProductCard";
import useGenerateInvoice from "../Hooks/InvoiceHooks/useGenerateInvoice";

interface Product {
  name: string;
  qty: number;
  rate: number;
}

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { generateInvoice } = useGenerateInvoice();

  const addProduct = (product: Product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
    setIsModalOpen(false);
  };

  const deleteProduct = (index: number) => {
    setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
  };

  const handleGeneratePDF = () => {
    generateInvoice(products);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-6">
      <header className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 bg-white shadow-lg rounded-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4 sm:mb-0">
          Product List
        </h1>
        <div className="flex flex-col sm:flex-row gap-2 items-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            <svg
              className="h-5 w-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Product
          </button>
          {products.length > 0 && (
            <button
              onClick={handleGeneratePDF}
              className="mr-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
            >
              Generate PDF
            </button>
          )}
        </div>
      </header>
      <main className="mt-6">
        {products.length === 0 ? (
          <div className="text-center text-gray-600 text-lg">
            No products added.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                deleteProduct={() => deleteProduct(index)}
              />
            ))}
          </div>
        )}
      </main>
      {isModalOpen && (
        <Modal
          addProduct={addProduct}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ProductPage;
