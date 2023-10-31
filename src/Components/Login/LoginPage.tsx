import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import mainlogo from "../../assets/logodesign.png";
import "./LoginPage.css";
import jwt from "jwt-decode";
// import Home from '../../Components/Home/Home.tsx';

type FormData = {
  username: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [role, setRole] = useState("");
  const [userId, setUserId] = useState("");
  const [formErrors, setFormErrors] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5104/api/Login/login",
        data
      );
      localStorage.setItem("token", response.data.token);
      const token = response.data.token;
      const user: any = jwt(token);
      const userId = user.nameid;
      const role = user.role;
      let props = {
        role: role,
        userId: userId,
      };
      console.log("Login successful");
      console.log(data);
      navigate("/Home", { state: { role, userId } });
      console.log(role);
      console.log(userId);
      console.log(user);
    } catch (error) {
      setFormErrors("Invalid username or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="login-page">
        <div className="login-box">
          <div className="login-container">
            <h1 className="Login">
              <b>Login</b>
            </h1>
            {formErrors && <p className="error">{formErrors}</p>}
            <div className="form-group">
              <label className="label">Username</label>
              <Controller
                name="username"
                control={control}
                defaultValue=""
                rules={{
                  required: "Username is required",
                }}
                render={({ field }) => (
                  <input
                    className="textbox"
                    type="text"
                    placeholder="Enter username"
                    {...field}
                  />
                )}
              />
              {errors.username && (
                <p className="error">{errors.username.message}</p>
              )}
            </div>
            <div className="form-group">
              <label className="label">Password</label>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: "Password is required",
                }}
                render={({ field }) => (
                  <input
                    className="textbox"
                    type="password"
                    placeholder="Enter password"
                    {...field}
                  />
                )}
              />
              {errors.password && (
                <p className="error">{errors.password.message}</p>
              )}
            </div>
            <div>
              <input type="checkbox" />
              <label className="remember">Remember me</label>
            </div>
            <div>
              <button
                type="submit"
                className="login-button"
                disabled={isLoading}
              >
                {isLoading ? "Login..." : "Login"}
              </button>
            </div>
          </div>
          <div>
            <img src={mainlogo} alt="" className="mainlogo" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
