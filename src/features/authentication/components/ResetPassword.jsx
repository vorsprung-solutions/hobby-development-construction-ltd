import { useNavigate } from "react-router";

import { useForm } from "react-hook-form";

import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import PrimaryButton from "../../../components/ui/Buttons/PrimaryButton";
import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext/AuthContext";
import { Link, useSearchParams } from "react-router-dom";
import { base_url } from "../../../config";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();
  const email = searchParams.get("email");
  const otp = searchParams.get("otp");
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (data.password === data.cpassword) {
      const userInfo = {
        email,
        otp,
        newPassword: data.password,
      };
      try {
        fetch(base_url + "/auth/reset-password", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (!result?.success) {
              Swal.fire({
                position: "center",
                icon: "error",
                title: result?.message,
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              navigate("/login");
            }
            // if (data.data.token && data.data.user.role === "admin") {
            //   Swal.fire({
            //     position: "center",
            //     icon: "success",
            //     title: "Logged In Successful",
            //     showConfirmButton: false,
            //     timer: 1500,
            //   });
            //   setToken(data.data.token);
            //   setUser(data.data.user._id);
            //   console.log(data.data.token);
            //   navigate("/dashboard", { replace: true });
            // } else {
            //   Swal.fire({
            //     position: "center",
            //     icon: "error",
            //     title: "You are not an admin user",
            //     showConfirmButton: false,
            //     timer: 1500,
            //   });
            //   // location.reload();
            // }
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
    } else {
      alert("Password Not Matched");
    }
  };

  return (
    <div className=" flex justify-center items-center h-[600px] lg:h-screen ">
      <Helmet>
        <title>SHDCL | Reset Password</title>
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
          <h1 className="text-xl font-semibold mt-4 my-2 ">
            Reset your account password
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full ">
              <div className="flex justify-between items-center">
                <label className="label">
                  <span className="label-text">New Password</span>
                </label>
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
            <div className="form-control w-full ">
              <div className="flex justify-between items-center">
                <label className="label">
                  <span className="label-text">Confirm New Password</span>
                </label>
              </div>
              <input
                required
                type="password"
                placeholder="******"
                className="input text-black input-bordered w-full bg-white"
                {...register("cpassword", { required: true })}
              />
              {errors.cpassword && <p>Password is required.</p>}
            </div>
            <button className=""></button>
            <Link to="/login" className="btn me-5">
              Cancel
            </Link>
            <input
              type="submit"
              value="Submit"
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

export default ResetPassword;
