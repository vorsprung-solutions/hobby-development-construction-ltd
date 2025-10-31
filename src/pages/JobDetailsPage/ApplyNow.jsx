/* eslint-disable no-debugger */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./ApplyNow.css";
import { TiAttachmentOutline } from "react-icons/ti";
import { uploadFileToAws } from "../../utils/uploadFileToAws";
import { useLoaderData, useNavigate } from "react-router";
import { createApplicant } from "./server-actions/createApplicant";
import Swal from "sweetalert2";
import { uploadImage } from "../../utils/uploadImage";
import PrimaryLoader from "../../components/shared/Loader/PrimaryLoader";
const ApplyNow = () => {
  const { data } = useLoaderData();
  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name);

    /* const reader = new FileReader();
        reader.onload = (event) => {
            const uploadedFile = event.target.result;
            const previewElement = document.getElementById('file-preview');
            previewElement.src = uploadedFile;
        };
        reader.readAsDataURL(selectedFile); */
  };
  const navigate = useNavigate();
  const onSubmit = async (applicantData) => {
    setIsLoading(true);
    applicantData.jobId = data._id;
    console.log(applicantData);

    const res = await uploadFileToAws(applicantData?.cvLink[0]);
    const res2 = await uploadImage(applicantData?.photoLink[0]);
    if (res.success && res2) {
      applicantData.cvLink = res?.data;
      applicantData.photo = res2;
      const result = await createApplicant(applicantData);
      if (result.success) {
        setIsLoading(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Application Successfully Submit",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/careers");
      } else {
        alert("Something going wrong");
      }
    }
  };
  if (isLoading) {
    return <PrimaryLoader></PrimaryLoader>;
  }
  return (
    <div className=" mx-8 md:mx-60">
      <div className=" w-full bg-white shadow-2xl my-2 text-start">
        <div className=" mx-8 md:mx-32 py-10">
          <h1 className=" text-center font-bold text-first text-2xl">
            Apply Now
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label className=" text-lg font-bold text-[#1F2937]" htmlFor="">
              Enter Your Name
            </label>{" "}
            <br />
            <input
              className=" my-2 ps-4 mb-6 h-10 w-full bg-white rounded py-6 border-gray-300 border-2"
              {...register("name", { required: true })}
              placeholder="Your name"
            />{" "}
            <br />
            <label className=" text-lg font-bold text-[#1F2937]" htmlFor="">
              Enter Your Email
            </label>{" "}
            <br />
            <input
              className=" my-2 ps-4 mb-6 h-10 w-full bg-white rounded py-6 border-gray-300 border-2"
              {...register("email", { required: true })}
              placeholder="Your Email"
            />{" "}
            <br />
            <label className=" text-lg font-bold text-[#1F2937]" htmlFor="">
              Enter Your Phone Number
            </label>{" "}
            <br />
            <input
              className=" my-2 ps-4 mb-6 h-10 w-full bg-white rounded py-6 border-gray-300 border-2"
              {...register("phone", { required: true })}
              placeholder="Your Phone Number"
            />{" "}
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="">
                <label className=" text-lg font-bold text-[#1F2937]" htmlFor="">
                  Upload Your Photo
                </label>{" "}
                <br />
                <input
                  type="file"
                  accept="image/*"
                  {...register("photoLink", { required: true })}
                />{" "}
                <br />
              </div>
              <div className="">
                <label className="text-lg font-bold text-[#1F2937]" htmlFor="">
                  Upload Your CV/Resume
                </label>{" "}
                <br />
                <input
                  type="file"
                  accept=".pdf"
                  {...register("cvLink", { required: true })}
                />
                <br />
              </div>
            </div>
            <br />
            <label className="text-lg font-bold" htmlFor="personal-summary">
              Personal Summary
            </label>{" "}
            <br />
            <p className=" text-sm">
              This section is optional. Use it to tell us a little more about
              yourself.
            </p>
            <textarea
              name="Personal Summary"
              className=" my-2 ps-4 mb-6w-full bg-white rounded py-6 border-gray-300 border-2 w-full"
              {...register("personalSummary")}
              placeholder="Tell me about yourself"
              id="personal-summary"
              rows="5"
            ></textarea>
            <div className=" flex justify-center">
              <button
                type="submit"
                className=" bg-first text-white font-bold px-20 py-2 rounded-lg mt-6 w-1/3"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;

//   <input
//     id="file-upload"
//     {...register("cvLink")}
//     type="file"
//     name="cvLink"
//     onChange={handleFileUpload}
//     accept="application/pdf"
//     //   ref={register({
//     //     required: true,
//     //     validate: (value) => {
//     //       const acceptedFormats = ["pdf"];
//     //       const fileExtension = value[0]?.name
//     //         ?.split(".")
//     //         .pop()
//     //         .toLowerCase();
//     //       if (!acceptedFormats.includes(fileExtension)) {
//     //         return "Invalid file format. Only PDF files are allowed.";
//     //       }
//     //       return true;
//     //     },
//     //   })}
//   />;
//   {
//     /* { file && (
//                             <img id="file-preview" src="" alt="File preview" style={ { maxWidth: '100%' } } />
//                         ) } */
//   }
//   {
//     fileName && (
//       <a
//         href="#"
//         className=" text-blue-400"
//         onClick={() => window.open(URL.createObjectURL(file))}
//       >
//         {fileName}
//       </a>
//     );
//   }
