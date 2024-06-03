import { useCallback } from "react";
import axios from "axios";

interface Product {
  name: string;
  qty: number;
  rate: number;
}

const useGenerateInvoice = () => {
  const generateInvoice = useCallback(async (products: Product[]) => {
    console.log(
      "Sending the following products to generate invoice:",
      products
    );

    // Retrieve the token from local storage
    const token = localStorage.getItem("Token");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/invoice/generate_invoice",
        { products },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: "blob", // Important for handling binary data
        }
      );

      // Create a blob URL and open it in a new tab
      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: "application/pdf" })
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "invoice.pdf"); // or open in a new tab
      document.body.appendChild(link);
      link.click();
      link.remove();

      console.log("Invoice generated successfully");
    } catch (error) {
      console.error("Error generating invoice:", error);
    }
  }, []);

  return { generateInvoice };
};

export default useGenerateInvoice;
