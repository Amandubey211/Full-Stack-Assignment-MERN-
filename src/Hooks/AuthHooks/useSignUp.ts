import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../../Utils/Validations";
import { setisLoginPage } from "../../Redux/Slice/FormSlice";

const API_URL = process.env.REACT_APP_API_URL;

interface SignUpDetails {
  name: string;
  email: string;
  password: string;
}

const useSignUp = () => {
  const [signupLoading, setSignupLoading] = useState<boolean>(false);
  const [SignupError, setReturnError] = useState<string>(""); // New returnError state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Signup = async (signUpDetails: SignUpDetails) => {
    try {
      setSignupLoading(true);
      const { name, email, password } = signUpDetails;

      if (!name || !email || !password) {
        toast.error(" Provide all the required fields.");
        return;
      }

      if (!validateName(name)) {
        toast.error("Name must be more than 4 characters.");
        return;
      }

      if (!validateEmail(email)) {
        toast.error("Please provide a valid email address.");
        return;
      }

      if (!validatePassword(password)) {
        toast.error(
          "Password must be at least 8 characters long and include at least one letter and one number."
        );
        return;
      }

      const { data } = await axios.post(
        `http://localhost:5000/api/auth/register`,
        signUpDetails
      );
      console.log(data);

      if (data.success) {
        dispatch(setisLoginPage(true));
        toast.success("Signed up successfully");
      } else {
        setReturnError(data.message || "Sign up unsuccessful"); // Set returnError if sign up is unsuccessful
        toast.error(SignupError);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      setReturnError(errorMessage); // Set returnError in case of error
      toast.error(errorMessage);
      console.error("Sign up error:", error);
    } finally {
      setSignupLoading(false);
    }
  };

  return {
    signupLoading,
    SignupError, // Include returnError in the return object
    Signup,
  };
};

export default useSignUp;
