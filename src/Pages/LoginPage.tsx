import React, {
  useState,
  useEffect,
  useCallback,
  FormEvent,
  ChangeEvent,
} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Components/Layout";
import { RootState } from "../Redux/Store/AppStore";
import { setisLoginPage } from "../Redux/Slice/FormSlice";
import useLogin from "../Hooks/AuthHooks/useLogin";
import useSignUp from "../Hooks/AuthHooks/useSignUp";
import FormInput from "../Components/FormInput";
import PasswordInput from "../Components/PasswordInput";
import SubmitButton from "../Components/SubmitButton";
import ToggleModeLink from "../Components/ToggleModeLink";

interface State {
  email: string;
  name: string;
  password: string;
  error: string;
  showPassword: boolean;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<State>({
    email: "",
    name: "",
    password: "",
    error: "",
    showPassword: false,
  });

  const { email, name, password, error, showPassword } = state;

  const isLoginPage = useSelector((state: RootState) => state.Form.isLoginPage);
  const dispatch = useDispatch();
  const { Login, loading, loginError } = useLogin();
  const { Signup, signupLoading, SignupError } = useSignUp();

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      error: isLoginPage ? loginError : SignupError,
    }));

    const timer = setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        error: "",
      }));
    }, 5000);

    return () => clearTimeout(timer);
  }, [loginError, SignupError, isLoginPage]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const togglePasswordVisibility = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isLoginPage) {
      let loginDetails = {
        email: state.email,
        password: state.password,
      };
      await Login(loginDetails);
      setState((prev) => ({ ...prev, email: "", password: "", name: "" }));
    } else {
      let SignupDetails = {
        email: state.email,
        name: state.name,
        password: state.password,
      };
      await Signup(SignupDetails);
    }
  };

  return (
    <Layout title={isLoginPage ? "Login Page" : "Signup Page"}>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-9 shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-center" aria-level={2}>
            {isLoginPage ? "Login" : "Signup"}
          </h2>
          {error && (
            <p className="text-red-500 mb-4" role="alert">
              {error}
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {!isLoginPage && (
              <FormInput
                id="name"
                label="Name"
                value={name}
                onChange={handleChange}
              />
            )}
            <FormInput
              id="email"
              label="Email"
              value={email}
              onChange={handleChange}
            />
            <PasswordInput
              id="password"
              label="Password"
              value={password}
              showPassword={showPassword}
              toggleVisibility={togglePasswordVisibility}
              onChange={handleChange}
            />
            <SubmitButton
              isLoading={isLoginPage ? loading : signupLoading}
              label={isLoginPage ? "Login" : "Signup"}
            />
          </form>
          <ToggleModeLink
            isLoginPage={isLoginPage}
            toggleMode={() => dispatch(setisLoginPage(!isLoginPage))}
          />
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
