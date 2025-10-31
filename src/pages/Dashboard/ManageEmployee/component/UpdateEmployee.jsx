import { useForm } from "react-hook-form";
import BackButton from "../../../../components/button/BackButton";
import PrimaryButton from "../../../../components/button/PrimaryButton";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { uploadImage } from "../../../../utils/uploadImage";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import { createEmployee } from "../server-actions/createEmployee";
import useEmployee from "../server-actions/useEmployee";
import { RxCross2 } from "react-icons/rx";
import { updateEmployeeApi } from "../server-actions/updateEmployeeApi";

const UpdateEmployee = () => {
  const { data } = useLoaderData();

  const [educationList, setEducationList] = useState(data?.education);
  const [imgUpdate, setImgUpdate] = useState(false);
  const [employee, isLoading, refetch] = useEmployee();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (updatedData) => {
    updatedData.education = educationList;
    const imageUrl = updatedData.imgUrl
      ? await uploadImage(updatedData?.imgUrl[0])
      : updatedData.imgUrl;

    updatedData.imgUrl = imageUrl;
    console.log(updatedData);
    const result = await updateEmployeeApi(data._id, updatedData);

    if (result.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Employee Update Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/manage-employee");
    } else {
      alert("Something going wrong");
    }
  };

  //   const addEducationRow = () => {
  //     setEducationList([...educationList, { degreeName: "", description: "", result: "" }]);
  //   };

  //   const handleInputChange = (event, index) => {
  //     const { name, value } = event.target;
  //     const updatedEducationList = [...educationList];
  //     updatedEducationList[index][name] = value;
  //     setEducationList(updatedEducationList);
  //   };

  //   const removeEducationRow = (index) => {
  //     const updatedEducationList = [...educationList];
  //     updatedEducationList.splice(index, 1);
  //     setEducationList(updatedEducationList);
  //   };

  console.log(data);
  return (
    <div className="flex flex-col px-5 w-full lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <BackButton
          value={"Back to Employee"}
          linkTo={"/dashboard/manage-employee"}
        ></BackButton>
        <h1 className="text-3xl text-blue-800 text-center my-6">
          Update Employee
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex  items-center mx-auto justify-center gap-8">
          <div className="form-control w-full  mx-auto my-4">
            <label className="label">
              <p className="label-text font-bold">Name</p>
            </label>
            <label className="w-full">
              <input
                defaultValue={data?.name}
                type="text"
                placeholder="Employee name"
                name="name"
                className="input input-bordered w-full "
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-[red]">Employee Name is required.</p>
              )}
            </label>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Priority No</span>
            </label>
            <select
              className="select select-bordered"
              {...register("priority", { required: true })}
            >
              <option className="bg-green-600 text-white">
                {data?.priority}
              </option>
              {employee?.data.map((e, i) => (
                <option key={i}>{employee?.data?.length - i}</option>
              ))}
            </select>
            {errors.status && (
              <p className="text-[red]">Employee Status is required.</p>
            )}
          </div>
        </div>

        <div className="flex  items-center mx-auto justify-center gap-8">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Phone</span>
            </label>
            <input
              type="text"
              defaultValue={data?.phone}
              placeholder="+880 194 543 2323"
              className="input input-bordered w-full "
              {...register("phone", { required: true })}
            />
            {errors.phone && <p className="text-[red]">Phone is required.</p>}
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              defaultValue={data?.email}
              placeholder="user@gmail.com"
              className="input input-bordered w-full "
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-[red]">Email is required.</p>}
          </div>
        </div>
        {/* 
        <div className="flex  items-center mx-auto justify-center gap-8">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Date of birth</span>
            </label>
            <input
              type="date"
              placeholder="Enter your date of birth"
              className="input input-bordered w-full "
              {...register("dob")}
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Role</span>
            </label>
            <select className="select select-bordered" {...register("role")}>
              <option disabled selected>
                Pick one
              </option>
              <option>CEO</option>
              <option>Manager</option>
              <option>Employee</option>
            </select>
          </div>
        </div>

        <div className="form-control w-full  mx-auto my-4">
          <label className="label">
            <p className="label-text font-bold">Facebook Link</p>
          </label>
          <label className="w-full">
            <input
              type="text"
              placeholder="Facebook Link"
              name="name"
              className="input input-bordered w-full "
              {...register("fbLink")}
            />
          </label>
        </div> */}

        <div className="flex  items-center mx-auto justify-center gap-8">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Designation</span>
            </label>
            <input
              type="text"
              defaultValue={data?.designation}
              placeholder="Designation"
              className="input input-bordered w-full "
              {...register("designation", { required: true })}
            />
            {errors.designation && (
              <p className="text-[red]">Designation is required.</p>
            )}
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Status</span>
            </label>
            <select
              className="select select-bordered"
              {...register("status", { required: true })}
            >
              <option selected>Active</option>
              <option>On a leave</option>
              <option>Left</option>
            </select>
            {errors.status && (
              <p className="text-[red]">Employee Status is required.</p>
            )}
          </div>
        </div>
        {/* 
        <div className="form-control w-full max-w-2xl my-4 mx-auto">
          <label className="label">
            <span className="label-text font-bold">Blood Type</span>
          </label>
          <select
            className="select select-bordered"
            {...register("bloodType", { required: true })}
            placeholder="status"
          >
            <option>A+</option>
            <option>B+</option>
            <option>AB+</option>
            <option>O+</option>
            <option>A-</option>
            <option>B-</option>
            <option>AB-</option>
            <option>O-</option>
          </select>
          {errors.bloodType && (
            <p className="text-[red]">Blood Type is required.</p>
          )}
        </div> */}

        {!imgUpdate && (
          <div className="form-control w-full max-w-xs my-4">
            <label className="label">
              <span className="label-text font-bold">Employee Image</span>
            </label>
            <div className="group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer mx-4">
              <img
                src={data?.imgUrl}
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
                {...register("imgUrl")}
                id=""
              />
            </div>
          </div>
        )}
        <div className="mx-auto flex justify-center">
          <PrimaryButton value={"Update"}></PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default UpdateEmployee;

// import { useForm } from "react-hook-form";
// import BackButton from "../../../../components/button/BackButton";
// import useEmployee from "../server-actions/useEmployee";
// import PrimaryButton from "../../../../components/button/PrimaryButton";
// import { useState } from "react";
// import { useLoaderData, useNavigate } from "react-router-dom";
// import { uploadImage } from "../../../../utils/uploadImage";
// import { updateEmployeeApi } from "../server-actions/updateEmployeeApi";
// import Swal from "sweetalert2";
// import { TiDelete } from "react-icons/ti";
// import { RxCross2 } from "react-icons/rx";

// const UpdateEmployee = () => {

//   const { data } = useLoaderData();

//   const [educationList, setEducationList] = useState(data?.education);
//   const [imgUpdate, setImgUpdate] = useState(false)

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const navigate = useNavigate();

//   const onSubmit = async (updatedData) => {
//     updatedData.education = educationList;
//     const imageUrl = updatedData.imgUrl ? await uploadImage(updatedData?.imgUrl[0]) : updatedData.imgUrl;

//     updatedData.imgUrl = imageUrl;

//     const result = await updateEmployeeApi(data._id, updatedData);

//     if (result.success) {
//       Swal.fire({
//         position: "center",
//         icon: "success",
//         title: "Project Upload Successfully",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//       navigate("/dashboard/manage-employee");
//     } else {
//       alert("Something going wrong");
//     }
//   };

//   const addEducationRow = () => {
//     setEducationList([...educationList, { degreeName: "", description: "", result: "" }]);
//   };

//   const handleInputChange = (event, index) => {
//     const { name, value } = event.target;
//     const updatedEducationList = [...educationList];
//     updatedEducationList[index][name] = value;
//     setEducationList(updatedEducationList);
//   };

//   const removeEducationRow = (index) => {
//     const updatedEducationList = [...educationList];
//     updatedEducationList.splice(index, 1);
//     setEducationList(updatedEducationList);
//   };

//   return (
//     <div className="flex flex-col px-5 w-full">
//       <BackButton value={ "Back to Employee" } linkTo={ "/dashboard/manage-employee" }></BackButton>
//       <h1 className="text-4xl text-blue-800 text-center my-6">Upload an Employee Information</h1>
//       <form onSubmit={ handleSubmit(onSubmit) } >
//         <div className="form-control w-full lg:max-w-2xl mx-auto my-4">
//           <label className="label">
//             <p className="label-text font-bold">
//               Name
//             </p>
//           </label>
//           <label className="w-full">
//             <input
//               type="text"
//               placeholder='Project name'
//               name="name"
//               className="input input-bordered w-full lg:max-w-2xl"
//               defaultValue={ data?.name }
//               { ...register("name", { required: true }) }
//             />
//             { errors.name && (
//               <p className="text-[red]">Employee Name is required.</p>
//             ) }
//           </label>
//         </div>

//         <div className="flex  items-center mx-auto justify-center gap-8">
//           <div className="form-control w-full max-w-xs">
//             <label className="label">
//               <span className="label-text font-bold">Phone</span>
//             </label>
//             <input type="tel" placeholder="+880 194 543 2323" className="input input-bordered w-full max-w-xs"
//               defaultValue={ data?.phone }
//               { ...register("phone", { required: true }) }
//             />
//             { errors.phone && (
//               <p className="text-[red]">Phone is required.</p>
//             ) }
//           </div>

//           <div className="form-control w-full max-w-xs">
//             <label className="label">
//               <span className="label-text font-bold">Email</span>
//             </label>
//             <input type="email" placeholder="user@gmail.com" className="input input-bordered w-full max-w-xs"
//               defaultValue={ data?.email }
//               { ...register("email", { required: true }) }
//             />
//             { errors.email && (
//               <p className="text-[red]">Email is required.</p>
//             ) }
//           </div>
//         </div>

//         <div className="flex  items-center mx-auto justify-center gap-8">
//           <div className="form-control w-full max-w-xs">
//             <label className="label">
//               <span className="label-text font-bold">Date of birth</span>
//             </label>
//             <input type="date" placeholder="Enter your date of birth" className="input input-bordered w-full max-w-xs"
//               defaultValue={ data?.dob ? new Date(data.dob).toISOString().substr(0, 10) : '' }
//               { ...register("dob") }
//             />
//           </div>

//           <div className="form-control w-full max-w-xs">
//             <label className="label">
//               <span className="label-text font-bold">Role</span>
//             </label>
//             <select className="select select-bordered" defaultValue={ data?.role } { ...register("role") }>
//               <option disabled selected>Pick one</option>
//               <option>CEO</option>
//               <option>Manager</option>
//               <option>Employee</option>

//             </select>
//           </div>
//         </div>

//         <div className="form-control w-full lg:max-w-2xl mx-auto my-4">
//           <label className="label">
//             <p className="label-text font-bold">
//               Facebook Link
//             </p>
//           </label>
//           <label className="w-full">
//             <input
//               type="text"
//               placeholder='Facebook Link'
//               name="name"
//               className="input input-bordered w-full lg:max-w-2xl"
//               defaultValue={ data?.fbLink }
//               { ...register("fbLink") }
//             />

//           </label>
//         </div>

//         <div className="flex  items-center mx-auto justify-center gap-8">
//           <div className="form-control w-full max-w-xs">
//             <label className="label">
//               <span className="label-text font-bold">Designation</span>
//             </label>
//             <input type="text" placeholder="Designation" className="input input-bordered w-full max-w-xs"
//               defaultValue={ data?.designation }
//               { ...register("designation", { required: true }) }
//             />
//             { errors.designation && (
//               <p className="text-[red]">Designation is required.</p>
//             ) }
//           </div>

//           <div className="form-control w-full max-w-xs">
//             <label className="label">
//               <span className="label-text font-bold">Status</span>
//             </label>
//             <select className="select select-bordered" defaultValue={ data?.status } { ...register("status", { required: true }) }>
//               <option disabled selected>Pick one</option>
//               <option>Active</option>
//               <option>On a leave</option>
//               <option>Left</option>

//             </select>
//             { errors.status && (
//               <p className="text-[red]">Employee Status is required.</p>
//             ) }
//           </div>
//         </div>

//         <div className="flex  items-center mx-auto justify-center gap-8">
//           <div className="form-control w-full  max-w-xs my-4">
//             <label className="label">
//               <span className="label-text font-bold">Blood Type</span>
//             </label>
//             <select className="select select-bordered" defaultValue={ data?.bloodType } { ...register("bloodType", { required: true }) } placeholder='status'>
//               <option>A+</option>
//               <option>B+</option>
//               <option>AB+</option>
//               <option>O+</option>
//               <option>A-</option>
//               <option>B-</option>
//               <option>AB-</option>
//               <option>O-</option>
//             </select>
//             { errors.bloodType && (
//               <p className="text-[red]">Blood Type is required.</p>
//             ) }
//           </div>
//           {
//             !imgUpdate &&
//             <div className="form-control w-full max-w-xs my-4">
//               <label className="label">
//                 <span className="label-text font-bold">Employee Image</span>
//               </label>
//               <div className="group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer mx-4">

//                 <img
//                   src={ data?.imgUrl }
//                   alt="An image"
//                   width={ 250 }
//                   height={ 250 }
//                   className="rounded-md  ease-in-out duration-500 group-hover:scale-125"
//                 />
//                 <div className="absolute bg-first w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-50" />
//                 <div className="absolute w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100">
//                   <div className=" flex flex-col justify-center items-center h-full">
//                     <p className=" text-white font-bold text-lg mb-2">Want to update the image?</p>
//                     <div>
//                       <span onClick={ () => setImgUpdate(true) } className=" py-2 px-6 text-base font-bold text-white bg-first rounded-lg">
//                         Yes
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           }
//           {
//             imgUpdate &&
//             <div className=" relative flex items-center justify-center">
//               <div onClick={ () => setImgUpdate(false) } className=' absolute right-0 top-2 border rounded p-1 hover:bg-gray-100'>
//                 <RxCross2 />
//               </div>
//               <div className="form-control w-full max-w-xs mx-4">
//                 <label className="label">
//                   <span className="label-text font-bold">Upload your photo</span>
//                 </label>
//                 <input type="file" name="" accept="image/*" { ...register("imgUrl") } id="" />
//               </div>
//             </div>
//           }
//         </div>

//         <div className="education-form mx-auto flex flex-col items-center my-6">
//           <h2 className="my-4 font-bold text-xl">Education</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Degree Name</th>
//                 <th>Description</th>
//                 <th>Result</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               { educationList.map((education, index) => (
//                 <tr key={ index }>
//                   <td>
//                     <input
//                       type="text"
//                       name="degreeName"
//                       value={ education.degreeName }
//                       onChange={ (e) => handleInputChange(e, index) }
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       name="description"
//                       value={ education.description }
//                       onChange={ (e) => handleInputChange(e, index) }
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       name="result"
//                       value={ education.result }
//                       onChange={ (e) => handleInputChange(e, index) }
//                     />
//                   </td>
//                   <td>
//                     <button onClick={ () => removeEducationRow(index) }
//                       className="text-3xl"
//                     ><TiDelete /></button>
//                   </td>
//                 </tr>
//               )) }
//             </tbody>
//           </table>
//           <button type="button" onClick={ addEducationRow }
//             className="btn btn-outline my-2 btn-sm"
//           >Add Education</button>
//           { errors.education && (
//             <p className="text-[red]">Education is required.</p>
//           ) }
//         </div>
//         <div className="mx-auto flex justify-center">
//           <PrimaryButton value={ "Update" }></PrimaryButton>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UpdateEmployee;
