import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import BackButton from '../../../../components/button/BackButton';
import PrimaryButton from '../../../../components/button/PrimaryButton';
import { RxCross2 } from 'react-icons/rx';

const UpdateUserForm = () => {

    const { data } = useLoaderData();
    const [loading, setLoading] = useState(false);
    const [imgUpdate, setImgUpdate] = useState(false);

    const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    } = useForm();

    const onSubmit = async(updatedData) => {
        console.log(updatedData);
    }

    return (
        <div>
            <BackButton value={"Back to Manage User"} linkTo={"/dashboard/manage-user"}></BackButton>
            <h1 className='text-2xl text-blue-800 text-center'>Add New User</h1>

            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="lg:px-10">
        <div className="flex  items-center mx-auto justify-center gap-8">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">
                Email <span className="text-red-500 text-xl">*</span>
              </span>
            </label>
            <input
              defaultValue={data?.email}
              type="email"
              placeholder="user@gmail.com"
              className="input input-bordered w-full "
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-[red]">Email is required.</p>}
          </div>
          <div className="form-control w-full  my-4">
            <label className="label">
              <p className="label-text font-bold">
                Name <span className="text-red-500 text-xl">*</span>
              </p>
            </label>
            <label className="w-full">
              <input
                defaultValue={data?.name}
                type="text"
                placeholder="User Name"
                name="name"
                className="input input-bordered w-full "
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-[red]">Team Member Name is required.</p>
              )}
            </label>
          </div>
          {/* <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text font-bold">
                Password <span className="text-red-500 text-xl">*</span>
              </span>
            </label>
            <input
              // defaultValue={data?.password}
              type="password"
              placeholder="********"
              className="input input-bordered w-full "
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-[red]">Password is required.</p>
            )}
          </div> */}
        </div>

        <div className="flex  items-center mx-auto justify-center gap-8">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">
                Phone <span className="text-red-500 text-xl">*</span>
              </span>
            </label>
            <input
              defaultValue={data?.phone}
              type="text"
              placeholder="Enter Phone Number (e.g.+880 194 543 2323)"
              className="input input-bordered w-full "
              {...register("phone", { required: true })}
            />
            {errors.phone && <p className="text-[red]">Phone is required.</p>}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">
                Status <span className="text-red-500 text-xl">*</span>
              </span>
            </label>
            <select
              className="select select-bordered"
              {...register("role", { required: true })}
            >
              <option selected={data?.role === "moderator"}>moderator</option>
              <option selected={data?.role === "admin"}>admin</option>
            </select>
            {errors.role && (
              <p className="text-[red]">Employee Status is required.</p>
            )}
          </div>
        </div>

        {!imgUpdate && (
          <div className="form-control w-full max-w-xs my-4">
            <label className="label">
              <span className="label-text font-bold">User Profile</span>
            </label>
            <div className="group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer mx-4">
              <img
                src={data?.profileImage}
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
          <div className=" relative flex items-center justify-center">
            <div
              onClick={() => setImgUpdate(false)}
              className=" absolute right-0 top-2 border rounded p-1 hover:bg-gray-100"
            >
              <RxCross2 />
            </div>
            <div className="form-control w-full max-w-xs mx-4">
              <label className="label">
                <span className="label-text font-bold">Upload your photo</span>
              </label>
              <input
                type="file"
                name=""
                accept="image/*"
                {...register("image")}
                id=""
              />
            </div>
          </div>
        )}

        <div className="mx-auto flex justify-center">
          <PrimaryButton isLoading={loading} value={"Update"}></PrimaryButton>
        </div>
      </form>
            </div>
        </div>
    );
};

export default UpdateUserForm;