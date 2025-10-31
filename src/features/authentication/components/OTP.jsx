import { useNavigate } from "react-router";

import { useForm } from "react-hook-form";

import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import PrimaryButton from "../../../components/ui/Buttons/PrimaryButton";
import { useContext, useState } from "react";
import AuthContext from "../../../contexts/AuthContext/AuthContext";
import { Link } from "react-router-dom";
import { base_url } from "../../../config";
import { useSearchParams } from "react-router-dom";

const OTP = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  // Access a specific query parameter
  const email = searchParams.get("email");
  const navigate = useNavigate();
  const onSubmit = (userData) => {
    setIsLoading(true);
    try {
      userData.email = email;
      fetch(base_url + "/auth/verify-otp", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
          if (data.success) {
            navigate(
              `/login/reset-password?email=${email}&otp=${userData.otp}`
            );
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: data.message,
              showConfirmButton: false,
              timer: 1500,
            });
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

  return (
    <div className=" flex justify-center items-center h-[600px] lg:h-screen ">
      <Helmet>
        <title>SHDCL | Verify OTP</title>
      </Helmet>
      <div className=" border p-5 lg:p-10 shadow-md">
        <div className="">
          <Link to="/">
            <img
              className="w-2/5 mx-auto"
              src="https://i.ibb.co/vvNLbDw/facebook-1679911914489-7046061262592027442-removebg-preview-1.png"
              alt=""
            />
          </Link>
          <h1 className="text-xl font-semibold mt-4 my-2 ">Verify OTP</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control ">
              <label className="label w-2/3 py-2">
                <span className="label-text">
                  {/* Please enter your email address to send OTP for reset password
                  of your account. */}
                </span>
              </label>
              <input
                required
                type="text"
                placeholder="Enter OTP"
                className="input input-bordered w-full text-black max-w-2xl"
                {...register("otp", { required: true })}
              />
              {errors.otp && <p className="text-[red]">OTP is required.</p>}
            </div>
            <button className=""></button>
            <Link to="/login" className="btn me-5">
              Cancel
            </Link>
            <input
              type="submit"
              value="Verify"
              className="my-6 bg-gradient-to-r from-blue-800 to-blue-400 text-white py-2 rounded-lg btn-wide"
            />

            {/* <PrimaryButton value={"Login"}></PrimaryButton> */}
          </form>
        </div>
      </div>
      ;
    </div>
  );
};

export default OTP;
