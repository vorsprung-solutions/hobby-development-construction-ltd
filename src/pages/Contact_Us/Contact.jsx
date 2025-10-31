import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { RiMessengerLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsFacebook, BsPhone, BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import PrimaryButton from "../../components/button/PrimaryButton";
import { useForm } from "react-hook-form";
import { createQuery } from "./server-actions/createQuery";
import Swal from "sweetalert2";
import PrimaryLoader from "../../components/shared/Loader/PrimaryLoader";
import RichTextEditor from "../../components/RichTextEditor/RichTextEditor";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs.sendForm('service_vpvg8tl', 'template_y6wfnta', form.current, 'RWJW4CP8tg4tD2IYQ')
  //     .then((result) => {
  //         console.log(result.text);
  //         e.target.reset();
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // }
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const message = document.getElementsByClassName("editor-input")[0];
    console.log(message);
    console.log(data);
    setIsLoading(true);
    const result = await createQuery(data);

    if (result.success) {
      setIsLoading(false);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Message Sent Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      // eslint-disable-next-line no-undef
      navigate("/");
    } else {
      alert("Something going wrong");
    }
  };
  if (isLoading) {
    return <PrimaryLoader></PrimaryLoader>;
  }
  return (
    <div className="mx-8 lg:mx-52 my-3 lg:my-10">
        <Helmet>
        
        <meta
          name="description"
          content="Have questions or inquiries? Contact us to get in touch with our friendly and dedicated team. We're here to assist you, provide information, and address your needs. Your feedback is valuable to us, and we look forward to hearing from you."
        />
      </Helmet>
      <div className="lg:px-20 lg:my-12 my-5 mb-12 rounded">
        <h1 className="font-semibold text-center  lg:text-3xl text-xl bg-clip-text text-blue-800  ">
          Contact with US
        </h1>
        {/* <p className="lg:mx-32 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium optio expedita fugiat labore soluta consequuntur natus
            illum cum quo libero.
          </p> */}
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-zinc-100  border border-blue-300">
          <div className="flex flex-col justify-center items-center text-center border-b-2 lg:border-r-2   p-3 lg:p-1">
            {/* <h3 className="text-2xl ">Address</h3> */ }
            <CiLocationOn className="text-5xl my-1" />
            <p>House No:4,Road No:3/A,Sector 15, Block E,Uttara,Dhaka 1230</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center border-b-2   p-3 lg:p-1">
            <BsTelephone className="text-4xl my-1 " />
            <p>+880-96145-00673</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center border-b-2 lg:border-b-0 lg:border-r-2   p-3 lg:p-1">
            <MdEmail className="text-4xl my-1 " />
            info@shdclgroup.com
          </div>
          <div className="flex flex-col justify-center items-center text-center border-b-2    p-3 lg:p-1">
            <AiOutlineWhatsApp className="text-4xl my-1 " />
            <p>+8801777200200</p>
          </div>
        </div>
        <div className="w-full lg:w-2/3 mb-5 px-5 lg:mx-auto">
          <form onSubmit={ handleSubmit(onSubmit) }>
            <div className="form-control w-full max-w-2xl bg-white mx-auto my-4">
              <label className="w-full">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered w-full max-w-2xl bg-white"
                  { ...register("name", { required: true }) }
                />
                { errors.name && <p className="text-[red]">Name is required.</p> }
              </label>
            </div>
            <div className="form-control w-full max-w-2xl bg-white mx-auto my-4">
              <label className="w-full">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full max-w-2xl bg-white"
                  { ...register("email", { required: true }) }
                />
                { errors.email && (
                  <p className="text-[red]">Email is required.</p>
                ) }
              </label>
            </div>
            <div className="form-control w-full max-w-2xl bg-white  my-4">
              <label className="w-full">
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered w-full max-w-2xl bg-white"
                  { ...register("subject", { required: true }) }
                />
                { errors.subject && (
                  <p className="text-[red]">Subject is required.</p>
                ) }
              </label>
            </div>
            <div className="form-control w-full max-w-2xl  my-4">
              <label className="w-full">
                <textarea
                  className="textarea max-w-2xl textarea-bordered bg-white border-blue-300 "
                  placeholder="Write your message"
                  rows={ 5 }
                  cols={ 90 }
                  { ...register("message", { required: true }) }
                  style={ { width: "100%", height: "10vh" } }
                ></textarea>
                { errors.message && (
                  <p className="text-[red]">message is required.</p>
                ) }
              </label>
            </div>
{/* 
            <div className="form-control w-full max-w-2xl  my-4">
              <label className="w-full">
                <RichTextEditor></RichTextEditor>
              </label>
            </div> */}

            <div className="mx-auto flex justify-center">
              <PrimaryButton value={ "Send" }></PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
