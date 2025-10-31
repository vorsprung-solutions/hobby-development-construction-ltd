import React from "react";
import PrimaryButton from "../../../../components/button/PrimaryButton";
import BackButton from "../../../../components/button/BackButton";
import useJobs from "../server-actions/useJobs";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { uploadImage } from "../../../../utils/uploadImage";
import { createJob } from "../server-actions/createJob";
import Swal from "sweetalert2";

const AddJobs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    // console.log(data);
    const imageUrl = await uploadImage(data.jobCircularImgUrl[0]);

    data.jobCircularImgUrl = imageUrl;

    const result = await createJob(data);

    if (result.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Job Upload Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/manage-jobs");
    } else {
      alert("Something going wrong");
    }
  };

  return (
    <div className="flex flex-col px-5 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <BackButton
          value={"Back to Jobs"}
          linkTo={"/dashboard/manage-jobs"}
        ></BackButton>
        <h1 className="text-4xl text-blue-800 text-center my-6">
          Upload a Job
        </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div className="form-control w-full  my-4">
            <label className="label">
              <p className="label-text font-bold">
                Job Title <span className="text-[red]">*</span>
              </p>
            </label>
            <label className="w-full">
              <input
                type="text"
                placeholder="Add a Job Title"
                name="name"
                className="input input-bordered w-full lg:max-w-2xl"
                {...register("jobTitle", { required: true })}
              />
              {errors.jobTitle && (
                <p className="text-[red]">Job Title is required.</p>
              )}
            </label>
          </div>

          <div className="form-control w-full  my-4">
            <label className="label">
              <p className="label-text font-bold">
                Job Location <span className="text-[red]">*</span>
              </p>
            </label>
            <label className="w-full">
              <input
                type="text"
                placeholder="Job Location"
                name="location"
                className="input input-bordered w-full lg:max-w-2xl"
                {...register("location", { required: true })}
              />
              {errors.location && (
                <p className="text-[red]">Job Location is required.</p>
              )}
            </label>
          </div>
          <div className="form-control w-full  my-4 mx-auto">
            <label className="label">
              <span className="label-text font-bold">
                Job Type <span className="text-red-600">*</span>
              </span>
            </label>
            <select
              className="select select-bordered"
              {...register("jobType", { required: true })}
              placeholder="status"
            >
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Internship</option>
              <option>Contract</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div className="form-control w-full  my-4">
            <label className="label">
              <p className="label-text font-bold">
                Contact No <span className="text-[red]">*</span>
              </p>
            </label>
            <label className="w-full">
              <input
                type="text"
                placeholder="Enter Contact Number"
                name="name"
                className="input input-bordered w-full lg:max-w-2xl"
                {...register("contactNo", { required: true })}
              />
              {errors.contactNo && (
                <p className="text-[red]">Contact No is required.</p>
              )}
            </label>
          </div>
          <div className="form-control w-full  my-4">
            <label className="label">
              <p className="label-text font-bold">
                Email Address <span className="text-[red]">*</span>
              </p>
            </label>
            <label className="w-full">
              <input
                type="text"
                placeholder="Enter Email Address"
                name="name"
                className="input input-bordered w-full lg:max-w-2xl"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-[red]">Contact email is required.</p>
              )}
            </label>
          </div>

          <div className="form-control w-full  my-4">
            <label className="label">
              <p className="label-text font-bold">
                Deadline <span className="text-[red]">*</span>
              </p>
            </label>
            <label className="w-full">
              <input
                type="date"
                placeholder="Application Deadline"
                className="input input-bordered w-full lg:max-w-2xl"
                {...register("deadline", { required: true })}
              />
              {errors.deadline && (
                <p className="text-[red]">Application Deadline is required.</p>
              )}
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">
                Vacancy <span className="text-[red]">*</span>
              </span>
            </label>
            <input
              type="number"
              placeholder="How many Vacancy?"
              className="input input-bordered w-full "
              {...register("vacancy", { required: true })}
            />
            {errors.vacancy && (
              <p className="text-[red]">Vacancy is required.</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">
                Salary Range<span className="text-[red]">* </span>
                (Taka)
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Salary Range"
              className="input input-bordered w-full "
              {...register("salary", { required: true })}
            />
            {errors.salary && <p className="text-[red]">Salary is required.</p>}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">
                Job Circular <span className="text-[red]">*</span>{" "}
                <span className="font-light">(Only Image Can upload)</span>
              </span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-2xl"
              {...register("jobCircularImgUrl", { required: true })}
            />
            {errors.jobCircularImgUrl && (
              <p className="text-[red]">Job Circular Image is required.</p>
            )}
          </div>
        </div>

        <div className="block lg:flex  justify-between gap-5">
          <div className="form-control w-full  my-4">
            <label className="label">
              <p className="label-text font-bold">
                Job Description <span className="text-[red]">*</span>{" "}
              </p>
            </label>
            <label className="w-full">
              <textarea
                className="textarea textarea-bordered "
                placeholder="Add a description"
                rows={5}
                cols={96}
                {...register("jobDescription", { required: true })}
                style={{ width: "100%", height: "20vh" }}
              ></textarea>
              {errors.jobDescription && (
                <p className="text-[red]">Job Description is required.</p>
              )}
            </label>
          </div>
          <div className="form-control w-full  my-4 mx-auto">
            <label className="label">
              <span className="label-text font-bold">
                Job Status <span className="text-red-600">*</span>
              </span>
            </label>
            <select
              className="select select-bordered"
              {...register("status", { required: true })}
              placeholder="status"
            >
              <option>Active</option>
              <option>Deactive</option>
            </select>
          </div>
        </div>
        <div className="mx-auto flex justify-center">
          <PrimaryButton value={"Upload"}></PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default AddJobs;
