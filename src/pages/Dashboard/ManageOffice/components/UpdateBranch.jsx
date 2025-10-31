import PrimaryButton from '../../../../components/button/PrimaryButton';
import BackButton from '../../../../components/button/BackButton';
import { useForm } from 'react-hook-form';
import useBranch from '../server-actions/useBranch';
import { useLoaderData, useNavigate } from 'react-router';
import { uploadImage } from '../../../../utils/uploadImage';
import Swal from 'sweetalert2';
import { updateBranchApi } from '../server-actions/updateBranchApi';
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

const UpdateBranch = () => {
  const [imgUpdate, setImgUpdate] = useState(false);
  const { data } = useLoaderData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (updateData) => {
    console.log(updateData);
    const imageUrl = await uploadImage(updateData.photo[0]);
    console.log(imageUrl);

    updateData.photo = imageUrl ? imageUrl : data.photo;

    const result = await updateBranchApi(data?._id, updateData);

    if (result.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Project Info Update Successfully",
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
      <BackButton value={ "Back to Branch" } linkTo={ "/dashboard/manage-branch" }></BackButton>
      <h1 className="text-4xl text-blue-800 text-center my-6">Update a Branch Information</h1>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <div className="">
          <div className="form-control w-full lg:max-w-2xl mx-auto my-4">
            <label className="label">
              <p className="label-text font-bold">
                Branch Name <span className="text-red-600">*</span>
              </p>
            </label>
            <input
              defaultValue={ data?.branchName }
              type="text"
              placeholder="Branch Name"
              name="name"
              className="input input-bordered w-full lg:max-w-2xl"
              { ...register("branchName") }
            />
          </div>
          <div className="form-control w-full lg:max-w-2xl  mx-auto">
            <label className="label">
              <span className="label-text font-bold">
                Branch Type <span className="text-red-600">*</span>
              </span>
            </label>
            <select
              defaultValue={ data?.branchType }
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
          <input
            type="text"
            defaultValue={ data?.address }
            placeholder="Enter Branch Location"
            name="name"
            className="input input-bordered w-full lg:max-w-2xl"
            { ...register("address", { required: true }) }
          />
          { errors.address && (
            <p className="text-[red]">Branch Name is required.</p>
          ) }
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
          <input
            defaultValue={ data?.branchManager }
            type="text"
            placeholder="Branch Manager Name"
            name="name"
            className="input input-bordered w-full lg:max-w-2xl"
            { ...register("branchManager") }
          />
        </div>

        <div className="form-control w-full lg:max-w-2xl mx-auto my-4">
          <label className="label">
            <p className="label-text font-bold">
              Branch Contact Number <span className="text-[red]">*</span>
            </p>
          </label>
          <input
            defaultValue={ data?.contactInfo }
            type="text"
            placeholder="Contact Number"
            name="name"
            className="input input-bordered w-full lg:max-w-2xl"
            { ...register("contactInfo", { required: true }) }
          />
          { errors.contactInfo && (
            <p className="text-[red]">Contact Information is required.</p>
          ) }
        </div>
        {
          imgUpdate &&
          <div className=" relative form-control w-full max-w-2xl mx-auto">
            <label className="label">
              <span className="label-text font-bold">Branch Cover Image</span>
            </label>
            <div onClick={ () => setImgUpdate(false) } className=' absolute right-0 top-2 border rounded p-1 hover:bg-gray-100'>
              <RxCross2 />
            </div>
            <input

              type="file"
              className="file-input file-input-bordered w-full max-w-2xl"
              { ...register("photo") }
            />
          </div>
        }
        {
          !imgUpdate &&
          <div className="form-control w-full max-w-2xl mx-auto">
            <label className="label">
              <span className="label-text font-bold">Branch Cover Image</span>
            </label>
            <div className="group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer mx-4">

              <img
                src={ data?.photo }
                alt="An image"
                width={ 250 }
                height={ 250 }
                className="rounded-md  ease-in-out duration-500 group-hover:scale-125"
              />
              <div className="absolute bg-first w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-50" />
              <div className="absolute w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className=" flex flex-col justify-center items-center h-full">
                  <p className=" text-white font-bold text-lg mb-2">Want to update the image?</p>
                  <div>
                    <span onClick={ () => setImgUpdate(true) } className=" py-2 px-6 text-base font-bold text-white bg-first rounded-lg">
                      Yes
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        }
        <div className="mx-auto my-8 flex justify-center">
          <PrimaryButton value={ "Update" }></PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default UpdateBranch;