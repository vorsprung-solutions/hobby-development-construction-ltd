import { useForm } from "react-hook-form";
import PrimaryButton from "../../../../components/button/PrimaryButton";
import BackButton from "../../../../components/button/BackButton";
import useGallery from "../server-actions/useGallery";
import { uploadImage } from "../../../../utils/uploadImage";
import { postImage } from "../server-actions/postImage";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UploadPhotoForm = () => {
  const [gallery, isLoading, refetch] = useGallery();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const imageUrl = await uploadImage(data.imageUrl[0]);

    const imageInfo = {
      title: data.title,
      imgUrl: imageUrl,
    };
    const result = await postImage(imageInfo);
    if (result.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Photo Upload Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/manage-gallery");
    } else {
      alert("Something going wrong");
    }
  };

  return (
    <div className="flex flex-col px-5 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
        <BackButton
          value={"Back to Gallery"}
          linkTo={"/dashboard/manage-gallery"}
        ></BackButton>
        <h1 className="text-xl lg:text-4xl text-blue-800 text-center my-6">
          Upload a photo
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-2xl mx-auto my-4">
          <label className="label">
            <p className="label-text font-bold">
              Image Title <span className="text-[red]">*</span>{" "}
            </p>
          </label>
          <label className="w-full">
            <input
              type="text"
              placeholder="Enter Image Title"
              className="input input-bordered w-full max-w-2xl"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <p className="text-[red]">Image Title is required.</p>
            )}
          </label>
        </div>

        

        <div className="form-control w-full max-w-2xl mx-auto">
          <label className="label">
            <span className="label-text font-bold">Image</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-2xl"
            {...register("imageUrl", { required: true })}
          />
          {errors.imageUrl && <p className="text-[red]">Image is required.</p>}
        </div>

        {/* <div className="form-control w-full max-w-2xl mx-auto my-4">
          <label className="label">
            <span className="label-text font-bold">Category</span>
          </label>
          <select
            className="select select-bordered"
            {...register("status", { required: true })}
          >
            <option disabled selected>
              Pick one
            </option>
            <option>Events</option>
            <option>Construction Projects</option>
            <option>Interior Projects</option>
            <option>Others</option>
          </select>
        </div>

        <div className="form-control w-full max-w-2xl mx-auto my-4">
          <label className="label">
            <p className="label-text font-bold">
              Image Description <span className="text-[red]">*</span>{" "}
            </p>
          </label>
          <label className="w-full">
            <textarea
              className="textarea textarea-bordered "
              placeholder="Add a description"
              rows={5}
              cols={96}
              {...register("description", { required: true })}
              style={{ width: "100%", height: "20vh" }}
            ></textarea>
          </label>
        </div> */}
        <div className="mx-auto flex justify-center">
          <PrimaryButton value={"Upload"}></PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default UploadPhotoForm;
