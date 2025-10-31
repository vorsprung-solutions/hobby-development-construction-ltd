import { useForm } from "react-hook-form";
import PrimaryButton from "../../../../components/button/PrimaryButton";
import BackButton from "../../../../components/button/BackButton";
import useGallery from "../server-actions/useGallery";
import { getSingleImage } from "../server-actions/getSinglePhoto";
import { useLoaderData, useNavigate } from "react-router-dom";
import { uploadImage } from "../../../../utils/uploadImage";
import { updateGalleryApi } from "../server-actions/updateGalleryApi";
import Swal from "sweetalert2";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const UpdateGallery = () => {
  const [imgUpdate, setImgUpdate] = useState(false)

  const { data } = useLoaderData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (updateData) => {
    console.log(updateData);
    const imageUrl = await uploadImage(updateData?.imgUrl[0]);

    updateData.imgUrl = imageUrl ? imageUrl : data.imgUrl;

    const result = await updateGalleryApi(data?._id, updateData);

    if (result.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Project Info Update Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/manage-gallery");
    } else {
      alert("Something going wrong");
    }
  };

  return (
    <div className="flex flex-col  w-full">
      <BackButton
        value={ "Back to Gallery" }
        linkTo={ "/dashboard/manage-gallery" }
      ></BackButton>
      <h1 className="text-4xl text-blue-800 text-center my-6">
        Update Photo Info
      </h1>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <div className="form-control w-full max-w-2xl mx-auto my-4">
          <label className="label">
            <p className="label-text font-bold">
              Image Title <span className="text-[red]">*</span>{ " " }
            </p>
          </label>
          <label className="w-full">
            <input
              type="text"
              defaultValue={ data?.title }
              name="name"
              className="input input-bordered w-full max-w-2xl"
              { ...register("title", { required: true }) }
            />
          </label>
        </div>
        {/* <div className="form-control w-full max-w-2xl mx-auto my-4">
          <label className="label">
            <p className="label-text font-bold">
              Description
            </p>
          </label>
          <label className="w-full">
            <input
              type="text"
              defaultValue={ data?.description }
              placeholder="Enter Description"
              className="input input-bordered w-full max-w-2xl"
              { ...register("description") }
            />
          </label>
        </div> */}
        {/* <input id="file-upload" type="file" /> <br /> */ }
        {
          imgUpdate &&
          <div className=" relative form-control w-full max-w-2xl mx-auto ">
            <label className="label">
              <span className="label-text font-bold">Image</span>
            </label>
            <div onClick={ () => setImgUpdate(false) } className=' absolute right-0 top-2 border rounded p-1 hover:bg-gray-100'>
              <RxCross2 />
            </div>
            <input
              type="file"
              className="file-input file-input-bordered w-full "
              { ...register("imgUrl") }
            />
          </div>
        }
        {
          !imgUpdate &&
          <div className="form-control w-full max-w-2xl mx-auto ">
            <label className="label">
              <span className="label-text font-bold">Image</span>
            </label>
            <div className="group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer mx-4">

              <img
                src={ data?.imgUrl }
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
        {/* <div className="form-control w-full max-w-2xl mx-auto my-4">
          <label className="label">
            <p className="label-text font-bold">
              Image Description <span className="text-[red]">*</span>{" "}
            </p>
          </label>
          <label className="w-full">
          <textarea className="textarea textarea-bordered "
        //    defaultValue={gallery.data.description}
           rows={5} cols={96} {...register("description", { required: true })}
           style={{ width: "100%", height: "20vh" }}
           ></textarea>
            
          </label>
        </div> */}
        <div className="mx-auto flex justify-center">
          <PrimaryButton value={ "Upload" }></PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default UpdateGallery;
