import { useNavigate } from "react-router";

import { useForm } from "react-hook-form";

import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import PrimaryButton from "../../../components/ui/Buttons/PrimaryButton";
import { useContext, useState } from "react";
import AuthContext from "../../../contexts/AuthContext/AuthContext";
import { Link } from "react-router-dom";
import { base_url } from "../../../config";
import PrimaryLoader from "../../../components/shared/Loader/PrimaryLoader";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setToken, setUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    setIsLoading(true);
    try {
      fetch(base_url + "/auth/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);

          if (data.code) {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Wrong Password or Email",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          if (data.data.token && data.data.user.role === "admin") {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Logged In Successful",
              showConfirmButton: false,
              timer: 1500,
            });
            setToken(data.data.token);
            setUser(data.data.user._id);
            navigate("/dashboard", { replace: true });
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "You are not an admin user",
              showConfirmButton: false,
              timer: 1500,
            });
            // location.reload();
          }
        });
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: error.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  if (isLoading) {
    return <PrimaryLoader></PrimaryLoader>;
  }
  return (
    <div className=" flex justify-center items-center h-[600px] lg:h-screen ">
      <Helmet>
        <title> SHDCL | Admin</title>
      </Helmet>
      <div className=" border p-5 lg:p-20 shadow-md">
        <div className="text-center">
          <Link to="/">
            <img
              className="w-2/5 mx-auto"
              src="https://i.ibb.co/vvNLbDw/facebook-1679911914489-7046061262592027442-removebg-preview-1.png"
              alt=""
            />
          </Link>
          <h1 className="text-xl font-semibold mt-4 my-2 ">Admin Dashboard</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                type="email"
                placeholder="Enter your Email"
                className="input input-bordered w-full text-black max-w-2xl bg-white"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-[red]">Phone number is required.</p>
              )}
            </div>
            <div className="form-control w-full ">
              <div className="flex justify-between items-center">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                {/* <div className="label font-light  text-blue-800 ">
                  <Link to="forget-password">Forgotten password?</Link>
                </div> */}
              </div>
              <input
                required
                type="password"
                placeholder="******"
                className="input text-black input-bordered w-full bg-white"
                {...register("password", { required: true })}
              />
              {errors.password && <p>Password is required.</p>}
            </div>
            <input
              type="submit"
              value="Login"
              className="my-6 bg-gradient-to-r from-blue-800 to-blue-400 text-white py-2 rounded-lg btn-wide cursor-pointer"
            />

            {/* <PrimaryButton value={"Login"}></PrimaryButton> */}
          </form>
        </div>
      </div>
      ;
    </div>
  );
};

export default LoginForm;
