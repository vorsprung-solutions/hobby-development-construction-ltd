import React from "react";
import { useForm } from "react-hook-form";
import BackButton from "../../../../components/button/BackButton";
import PrimaryButton from "../../../../components/button/PrimaryButton";
import { uploadImage } from "../../../../utils/uploadImage";
import { createProject } from "../server-actions/createProject";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UploadInteriorProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    // console.log(data);
    const imageUrl = await uploadImage(data.imageUrl[0]);

    data.imageUrl = imageUrl;
    data.projectType = "Interior";
    const result = await createProject(data);

    if (result.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Project Upload Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/manage-projects");
    } else {
      alert("Something going wrong");
    }
  };

  return (
    <div className="flex flex-col px-10 py-5 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <BackButton
          value={"Back to Projects"}
          linkTo={"/dashboard/manage-projects"}
        ></BackButton>
        <h1 className="lg:text-3xl text-blue-800 text-center my-6">
          Upload Interior Project
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="form-control w-full  my-4">
            <label className="label">
              <p className="label-text font-bold">Project Name <span className="text-red-600">*</span></p>
            </label>
            <label className="w-full">
              <input
                type="text"
                placeholder="Project name"
                name="name"
                className="input input-bordered w-full lg:max-w-2xl"
                {...register("projectName", { required: true })}
              />
              {errors.projectName && (
                <p className="text-[red]">Project Name is required.</p>
              )}
            </label>
          </div>

          <div className="form-control w-full  my-4">
            <label className="label">
              <p className="label-text font-bold">Project Location <span className="text-red-600">*</span></p>
            </label>
            <label className="w-full">
              <input
                type="text"
                placeholder="Location"
                name="name"
                className="input input-bordered w-full lg:max-w-2xl"
                {...register("projectAddress", { required: true })}
              />
              {errors.projectAddress && (
                <p className="text-[red]">Project Address is required.</p>
              )}
            </label>
          </div>
          <div className="form-control w-full my-4 mx-auto">
            <label className="label">
              <span className="label-text font-bold">Building Type <span className="text-red-600">*</span></span>
            </label>
            <select
              className="select select-bordered"
              {...register("buildingType", { required: true })}
              placeholder="status"
            >
              <option>Residential </option>
              <option>Commercial </option>
              <option>Industrial </option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          <div className="form-control w-full  my-4 mx-auto">
            <label className="label">
              <span className="label-text font-bold">Project Status <span className="text-red-600">*</span></span>
            </label>
            <select
              className="select select-bordered"
              {...register("projectStatus", { required: true })}
              placeholder="status"
            >
              <option>Upcoming</option>
              <option>Ongoing</option>
              <option>HandOvered</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs my-4">
            <label className="label">
              <span className="label-text font-bold">No. of Dining Room <span className="text-red-600">*</span></span>
            </label>
            <input
              type="text"
              placeholder="No. of Dining Room"
              className="input input-bordered w-full max-w-xs"
              {...register("numberOfDiningRoom", { required: true })}
            />
            {errors.numberOfDiningRoom && (
                <p className="text-[red]">Number of Dining Room is required.</p>
              )}
          </div>

          <div className="form-control w-full my-4 ">
            <label className="label">
              <span className="label-text font-bold">No. of Bed Room <span className="text-red-600">*</span></span>
            </label>
            <input
              type="text"
              placeholder="No. of Bed Room"
              className="input input-bordered w-full "
              {...register("numberOfBeds", { required: true })}
            />
            {errors.numberOfBeds && (
                <p className="text-[red]">Number of Bed Room is required.</p>
              )}
          </div>
          <div className="form-control w-full max-w-xs my-4">
            <label className="label">
              <span className="label-text font-bold">Handover Date <span className="text-red-600">*</span></span>
            </label>
            <input
              type="date"
              placeholder="Total Units"
              className="input input-bordered w-full max-w-xs"
              {...register("handOverDate", { required: true })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2"></div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          <div className="form-control w-full  my-4 mx-auto">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <input
              type="text"
              placeholder="Enter Price"
              className="input input-bordered w-full lg:max-w-2xl"
              {...register("price")}
            />
          </div>
          <div className="form-control w-full max-w-xs my-4">
            <label className="label">
              <span className="label-text font-bold">Total Units</span>
            </label>
            <input
              type="text"
              placeholder="Total Units"
              className="input input-bordered w-full max-w-xs"
              {...register("totalUnit")}
            />
          </div>

          <div className="form-control w-full my-4 ">
            <label className="label">
              <span className="label-text font-bold">Unit Per Floor</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              {...register("unitPerFloor")}
            />
          </div>
          <div className="form-control w-full  my-4 mx-auto">
            <label className="label">
              <span className="label-text font-bold">Units Available</span>
            </label>
            <input
              type="text"
              placeholder="Units Available"
              className="input input-bordered w-full lg:max-w-2xl"
              {...register("availableUnit")}
            />
          </div>
        </div> */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          <div className="form-control w-full  my-4">
            <label className="label">
              <p className="label-text font-bold">Interior Designer <span className="text-red-600">*</span></p>
            </label>
            <label className="w-full">
              <input
                type="text"
                placeholder="Interior Designer"
                name="name"
                className="input input-bordered w-full lg:max-w-2xl"
                {...register("interiorDesigner", { required: true })}
              />
              {errors.interiorDesigner && (
                <p className="text-[red]">Interior Designer is required.</p>
              )}
            </label>
          </div>
          <div className="form-control w-full  my-4 mx-auto">
            <label className="label">
              <span className="label-text font-bold">Client Name <span className="text-red-600">*</span></span>
            </label>
            <input
              type="text"
              placeholder="Client Name"
              className="input input-bordered w-full lg:max-w-2xl"
              {...register("clientName", { required: true })}
            />
            {errors.clientName && (
                <p className="text-[red]">Client Name is required.</p>
              )}
          </div>

          <div className="form-control w-full my-4 ">
            <label className="label">
              <span className="label-text font-bold">Client Contact No <span className="text-red-600">*</span></span>
            </label>
            <input
              type="text"
              placeholder="Client Contact Number"
              className="input input-bordered w-full "
              {...register("clientPhoneNo", { required: true })}
            />
            {errors.clientPhoneNo && (
                <p className="text-[red]">Client Phone Number is required.</p>
              )}
          </div>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text font-bold">Project Cover Image <span className="text-red-600">*</span></span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-2xl"
              {...register("imageUrl", { required: true })}
            />
            {errors.imageUrl && (
                <p className="text-[red]">Project Cover Image is required.</p>
              )}
          </div>
        </div>
        <div className="form-control w-full  my-4">
          <label className="label">
            <p className="label-text font-bold">Project Description <span className="text-red-600">*</span></p>
          </label>
          <label className="w-full">
            <textarea
              className="textarea textarea-bordered "
              placeholder="Write here some description here"
              rows={5}
              cols={96}
              {...register("description", { required: true })}
              style={{ width: "100%", height: "20vh" }}
            ></textarea>
            {errors.description && (
                <p className="text-[red]">Project Description is required.</p>
              )}
          </label>
        </div>
        <div className="mx-auto flex justify-center">
          <PrimaryButton value={"Upload"}></PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default UploadInteriorProject;
