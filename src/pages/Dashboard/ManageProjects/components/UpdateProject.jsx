import React, { useState } from "react";
import { useForm } from "react-hook-form";
import BackButton from "../../../../components/button/BackButton";
import PrimaryButton from "../../../../components/button/PrimaryButton";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { getSingleProject } from "../server-actions/getSingleProject";
import PrimaryLoader from "../../../../components/shared/Loader/PrimaryLoader";
import { uploadImage } from "../../../../utils/uploadImage";
import { updateProject } from "../server-actions/updateProject";
import Swal from "sweetalert2";
import { RxCross2 } from "react-icons/rx";

const UpdateProject = () => {
  const [imgUpdate, setImgUpdate] = useState(false);
  const { data } = useLoaderData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  if (!data) {
    return <PrimaryLoader></PrimaryLoader>;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  const onSubmit = async (updateData) => {
    console.log(updateData);

    if (updateData?.imageUrl) {
      const imageUrl = await uploadImage(updateData?.imageUrl[0]);
      updateData.imageUrl = imageUrl;
    } else {
      updateData.imageUrl = data?.imageUrl;
    }

    const result = await updateProject(data?._id, updateData);

    if (result.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Project Info Update Successfully",
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
          Update Project Info
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="form-control w-full  my-4">
            <label className="label">
              <p className="label-text font-bold">Project Name</p>
            </label>
            <label className="w-full">
              <input
                type="text"
                defaultValue={data?.projectName}
                placeholder="Project name"
                name="name"
                className="input input-bordered w-full lg:max-w-2xl"
                {...register("projectName", { required: true })}
              />
            </label>
          </div>

          <div className="form-control w-full  my-4">
            <label className="label">
              <p className="label-text font-bold">Project Location</p>
            </label>
            <label className="w-full">
              <input
                type="text"
                defaultValue={data?.projectAddress}
                placeholder="Location"
                name="name"
                className="input input-bordered w-full lg:max-w-2xl"
                {...register("projectAddress", { required: true })}
              />
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          <div className="form-control w-full  my-4 mx-auto">
            <label className="label">
              <span className="label-text font-bold">Storied</span>
            </label>
            <input
              type="text"
              defaultValue={data?.storied}
              placeholder="Storied"
              className="input input-bordered w-full lg:max-w-2xl"
              {...register("storied")}
            />
          </div>

          <div className="form-control w-full  my-4">
            <label className="label">
              <p className="label-text font-bold">Land Size</p>
            </label>
            <label className="w-full">
              <input
                type="text"
                defaultValue={data?.landSize}
                placeholder="Land Size"
                name="name"
                className="input input-bordered w-full lg:max-w-2xl"
                {...register("landSize", { required: true })}
              />
            </label>
          </div>

          <div className="form-control w-full my-4 mx-auto">
            <label className="label">
              <span className="label-text font-bold">Building Type</span>
            </label>
            <select
              className="select select-bordered"
              {...register("buildingType", { required: true })}
              placeholder="status"
              defaultValue={data?.buildingType}
            >
              <option>Residential </option>
              <option>Commercial </option>
              <option>Industrial </option>
            </select>
          </div>

          <div className="form-control w-full  my-4 mx-auto">
            <label className="label">
              <span className="label-text font-bold">Project Status</span>
            </label>
            <select
              className="select select-bordered"
              {...register("projectStatus", { required: true })}
              placeholder="status"
              defaultValue={data?.projectStatus}
            >
              <option>Upcoming</option>
              <option>Ongoing</option>
              <option>HandOvered</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          <div className="form-control w-full  my-4 mx-auto">
            <label className="label">
              <span className="label-text font-bold">Apt. Size</span>
            </label>
            <input
              type="text"
              defaultValue={data?.aptSize}
              placeholder="Apt. Size"
              className="input input-bordered w-full lg:max-w-2xl"
              {...register("aptSize")}
            />
          </div>
          <div className="form-control w-full max-w-xs my-4">
            <label className="label">
              <span className="label-text font-bold">No. of Beds</span>
            </label>
            <input
              type="text"
              defaultValue={data?.numberOfBath}
              placeholder="No. of Beds"
              className="input input-bordered w-full max-w-xs"
              {...register("numberOfBath")}
            />
          </div>

          <div className="form-control w-full my-4 ">
            <label className="label">
              <span className="label-text font-bold">No. of Bath</span>
            </label>
            <input
              type="text"
              defaultValue={data?.numberOfBeds}
              placeholder="No. of Bath"
              className="input input-bordered w-full "
              {...register("numberOfBeds")}
            />
          </div>
          <div className="form-control w-full max-w-xs my-4">
            <label className="label">
              <span className="label-text font-bold">Handover Date</span>
            </label>
            <input
              type="date"
              value={data?.handOverDate?.split("T")[0]}
              placeholder="Total Units"
              className="input input-bordered w-full max-w-xs"
              {...register("handOverDate")}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          <div className="form-control w-full  my-4 mx-auto">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <input
              type="text"
              defaultValue={data?.price}
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
              defaultValue={data?.totalUnit}
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
              defaultValue={data?.unitPerFloor}
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
              defaultValue={data?.availableUnit}
              placeholder="Units Available"
              className="input input-bordered w-full lg:max-w-2xl"
              {...register("availableUnit")}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="form-control w-full  my-4 mx-auto">
            <label className="label">
              <span className="label-text font-bold">Client Name</span>
            </label>
            <input
              type="text"
              defaultValue={data?.clientName}
              placeholder="Client Name"
              className="input input-bordered w-full lg:max-w-2xl"
              {...register("clientName")}
            />
          </div>

          <div className="form-control w-full my-4 ">
            <label className="label">
              <span className="label-text font-bold">Client Contact No</span>
            </label>
            <input
              type="text"
              defaultValue={data?.clientPhoneNo}
              placeholder="Client Contact Number"
              className="input input-bordered w-full "
              {...register("clientPhoneNo")}
            />
          </div>
          {!imgUpdate && (
            <div className="form-control w-full my-4">
              <label className="label">
                <span className="label-text font-bold">
                  Project Cover Image
                </span>
              </label>
              <div className="group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer mx-4">
                <img
                  src={data?.imageUrl || "https://via.placeholder.com/100"}
                  alt="An image"
                  width={250}
                  height={250}
                  className="rounded-md  ease-in-out duration-500 group-hover:scale-125"
                />
                <div className="absolute bg-first w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-50" />
                <div className="absolute w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className=" flex flex-col justify-center items-center h-full">
                    <p className=" text-white font-bold text-lg mb-2">
                      Want to update the image?
                    </p>
                    <div>
                      <span
                        onClick={() => setImgUpdate(true)}
                        className=" py-2 px-6 text-base font-bold text-white bg-first rounded-lg"
                      >
                        Yes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {imgUpdate && (
            <div className=" relative form-control w-full my-4">
              <label className="label">
                <span className="label-text font-bold">
                  Project Cover Image
                </span>
              </label>
              <div
                onClick={() => setImgUpdate(false)}
                className=" absolute right-0 top-2 border rounded p-1 hover:bg-gray-100"
              >
                <RxCross2 />
              </div>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-2xl"
                {...register("imageUrl")}
              />
            </div>
          )}
        </div>
        <div className="form-control w-full  my-4">
          <label className="label">
            <p className="label-text font-bold">Project Description</p>
          </label>
          <label className="w-full">
            <textarea
              defaultValue={data?.description}
              className="textarea textarea-bordered "
              placeholder="Write here some description here"
              rows={5}
              cols={96}
              {...register("description")}
              style={{ width: "100%", height: "20vh" }}
            ></textarea>
          </label>
        </div>
        <div className="mx-auto flex justify-center">
          <PrimaryButton value={"Update"}></PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default UpdateProject;
