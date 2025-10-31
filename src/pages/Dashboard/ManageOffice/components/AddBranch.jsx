import React from "react";
import PrimaryButton from "../../../../components/button/PrimaryButton";
import BackButton from "../../../../components/button/BackButton";
import { useForm } from "react-hook-form";
import { createBranch } from "../server-actions/createBranch";
import { uploadImage } from "../../../../utils/uploadImage";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddBranch = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    // console.log(data);
    const imageUrl = await uploadImage(data.photo[0]);

    data.photo = imageUrl;

    const result = await createBranch(data);

    if (result.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Project Upload Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/manage-branch");
    } else {
      alert("Something going wrong");
    }
  };

  return (
    <div className="flex flex-col px-5 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <BackButton
          value={ "Back to Branch" }
          linkTo={ "/dashboard/manage-branch" }
        ></BackButton>
        <h1 className="text-4xl text-blue-800 text-center my-6">
          Add New Branch
        </h1>
      </div>

      <form onSubmit={ handleSubmit(onSubmit) }>
        <div className="">
          <div className="form-control w-full lg:max-w-2xl mx-auto my-4">
            <label className="label">
              <p className="label-text font-bold">
                Branch Name <span className="text-red-600">*</span>
              </p>
            </label>
            <label className="w-full">
              <input
                type="text"
                placeholder="Branch Name"
                name="name"
                className="input input-bordered w-full lg:max-w-2xl"
                { ...register("branchName") }
              />
            </label>
          </div>
          <div className="form-control w-full lg:max-w-2xl  mx-auto">
            <label className="label">
              <span className="label-text font-bold">
                Branch Type <span className="text-red-600">*</span>
              </span>
            </label>
            <select
              className="select select-bordered"
              { ...register("branchType", { required: true }) }
              placeholder="Branch Type"
            >
              <option>Corporate-Office </option>
              <option>Head-Office </option>
            </select>
          </div>
        </div>
        <div className="form-control w-full lg:max-w-2xl mx-auto my-4">
          <label className="label">
            <p className="label-text font-bold">
              Branch Location <span className="text-[red]">*</span>
            </p>
          </label>
          <label className="w-full">
            <input
              type="text"
              placeholder="Enter Branch Location"
              name="name"
              className="input input-bordered w-full lg:max-w-2xl"
              { ...register("address", { required: true }) }
            />
            { errors.address && (
              <p className="text-[red]">Branch Name is required.</p>
            ) }
          </label>
        </div>

        {/* <div className="form-control w-full max-w-2xl mx-auto">
          <label className="label">
            <span className="label-text font-bold">
              Branch Image <span className="text-[red]">*</span>
            </span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-2xl"
            {...register("photo", { required: true })}
          />
          {errors.photo && (
            <p className="text-[red]">Branch Image is required.</p>
          )}
        </div> */}

        {/* <div className="form-control w-full lg:max-w-2xl mx-auto my-4">
          <label className="label">
            <p className="label-text font-bold">
              Branch Manager <span className="text-[red]">*</span>
            </p>
          </label>
          <label className="w-full">
            <input
              type="text"
              placeholder="Branch Manager"
              name="name"
              className="input input-bordered w-full lg:max-w-2xl"
              {...register("branchManager", { required: true })}
            />
            {errors.branchManager && (
              <p className="text-[red]">Branch Manager Name is required.</p>
            )}
          </label>
        </div> */}
        <div className="form-control w-full lg:max-w-2xl mx-auto my-4">
          <label className="label">
            <p className="label-text font-bold">
              Branch Manager Name <span className="text-red-600">*</span>
            </p>
          </label>
          <label className="w-full">
            <input
              type="text"
              placeholder="Branch Manager Name"
              name="name"
              className="input input-bordered w-full lg:max-w-2xl"
              { ...register("branchManager") }
            />
          </label>
        </div>

        <div className="form-control w-full lg:max-w-2xl mx-auto my-4">
          <label className="label">
            <p className="label-text font-bold">
              Branch Contact Number <span className="text-[red]">*</span>
            </p>
          </label>
          <label className="w-full">
            <input
              type="text"
              placeholder="Contact Number"
              name="name"
              className="input input-bordered w-full lg:max-w-2xl"
              { ...register("contactInfo", { required: true }) }
            />
            { errors.contactInfo && (
              <p className="text-[red]">Contact Information is required.</p>
            ) }
          </label>
        </div>
        <div className="form-control w-full max-w-2xl mx-auto">
          <label className="label">
            <span className="label-text font-bold">Branch Cover Image</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-2xl"
            { ...register("photo", { required: true }) }
          />
        </div>
        <div className="mx-auto my-8 flex justify-center">
          <PrimaryButton value={ "Add" }></PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default AddBranch;
