import { useCallback } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
const BACKEND = process.env.REACT_APP_BACKEND_URL;
console.log(BACKEND);
interface Product {
  name: string;
  qty: number;
  rate: number;
}

const useGenerateInvoice = () => {
  const generateInvoice = useCallback(async (products: Product[]) => {
    // Retrieve the token from local storage
    const token = localStorage.getItem("Token");

    try {
      const response = await axios.post(
        `${BACKEND}/api/invoice/generate_invoice`,
        { products },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: "blob", // Important for handling binary data
        }
      );

      if (response.status === 201) {
        toast.success("Invoice generated successfully");
      } else {
        toast.error("Failed to generate invoice");
      }

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
    } catch (error) {
      toast.error("Error generating invoice");
      console.error("Error generating invoice:", error);
    }
  }, []);

  return { generateInvoice };
};

export default useGenerateInvoice;
