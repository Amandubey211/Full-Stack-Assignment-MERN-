import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuth } from "../../Redux/Slice/AuthSlice";
import { setUserDetails } from "../../Redux/Slice/UserSlice";
const BACKEND = process.env.REACT_APP_BACKEND_URL;
console.log(BACKEND);
interface LoginDetails {
  email: string;
  password: string;
}

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/auth/validate`
        );
        if (data.success) {
          setIsAuthenticated(true);
          navigate("/home");
          toast.success("you are Authorized");
        }
      } catch {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, [navigate]);

  const Login = async (loginDetails: LoginDetails) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${BACKEND}/api/auth/login`,
        loginDetails
      );
      if (data.success) {
        setIsAuthenticated(true);
        navigate("/home");
        dispatch(setAuth(true));
        dispatch(setUserDetails(data.user));
        localStorage.setItem("Token", data.token);
        toast.success("Logged in successfully");
      } else {
        setLoginError(data.message || "Login unsuccessful");
        toast.error(data.message || "Login unsuccessful");
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      setLoginError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    isAuthenticated,
    loginError,
    Login,
  };
};

export default useLogin;
