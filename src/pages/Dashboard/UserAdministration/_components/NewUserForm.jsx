import { useForm } from "react-hook-form";
import BackButton from "../../../../components/button/BackButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../../components/ui/Buttons/PrimaryButton";
import useEmployee from "../../ManageEmployee/server-actions/useEmployee";
import { createUser } from "../server-actions/createUser";
import Swal from "sweetalert2";

const NewUserForm = () => {
  const [employee, isLoading, refetch] = useEmployee();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (data?.password === data?.cpassword) {
        const result = await createUser({
          email: data?.email,
          password: data?.password,
        });
        if (result.success) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User Account Created Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/manage-user");
        } else {
          alert("Something going wrong");
        }
      } else {
        alert("password does not match");
      }
    } catch (error) {
      alert(error?.message);
    }
  };

  return (
    <div className="flex flex-col px-5 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
        <BackButton
          value={"Back to Manage User"}
          linkTo={"/dashboard/manage-user"}
        ></BackButton>
        <h1 className="text-2xl text-blue-800 text-center">
          Create New User Account
        </h1>
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="lg:px-40">
          <div className="flex  items-center mx-auto justify-center gap-8">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">
                  Email <span className="text-red-500 text-xl">*</span>
                </span>
              </label>
              <select
                className="select select-bordered"
                {...register("email", { required: true })}
              >
                <option disabled>Select Employee Email</option>
                {employee?.data
                  ?.filter((e) => e?.userId === null)
                  ?.map((e, i) => (
                    <option key={e._id} className="my-3">
                      {e?.email}
                    </option>
                  ))}
              </select>
              {errors.email && (
                <p className="text-[red]">User Email is required.</p>
              )}
            </div>
          </div>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text font-bold">
                Password <span className="text-red-500 text-xl">*</span>
              </span>
            </label>
            <input
              minLength={6}
              type="password"
              placeholder="********"
              className="input input-bordered w-full "
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-[red]">Password is required.</p>
            )}
          </div>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text font-bold">
                Confirm Password <span className="text-red-500 text-xl">*</span>
              </span>
            </label>
            <input
              minLength={6}
              type="password"
              placeholder="********"
              className="input input-bordered w-full "
              {...register("cpassword", { required: true })}
            />
            {errors.cpassword && (
              <p className="text-[red]">Password is required.</p>
            )}
          </div>

          <div className="mx-auto flex justify-center">
            <PrimaryButton isLoading={loading} value={"Create"}></PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewUserForm;
