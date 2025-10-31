import React from "react";
import PrimaryButton from "../../../../components/button/PrimaryButton";
import BackButton from "../../../../components/button/BackButton";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { GoReply } from "react-icons/go";
import { handleQueryReply } from "../server-actions/handleQueryReply";
import Swal from "sweetalert2";

const ReplayQuery = ({ isOpen, setIsOpen, queryData }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.email = queryData?.email;
    data.subject = queryData?.subject;
    data.name = queryData?.name;
    const res = await handleQueryReply(data);
    console.log(res);
    if (res.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Reply Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      setIsOpen(false);
      reset();
    } else {
      alert("Something going wrong");
    }
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg flex justify-start items-center gap-5 font-light leading-6 "
                  >
                    <GoReply></GoReply>
                    <span> {queryData?.email}</span>
                  </Dialog.Title>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="form-control w-full  my-4">
                        <label className="label">
                          <p className="label-text font-bold">
                            Name <span className="text-[red]">*</span>
                          </p>
                        </label>
                        <label className="w-full">
                          <input
                            type="text"
                            placeholder="Enter Your Name"
                            name="name"
                            className="input input-bordered w-full lg:max-w-2xl"
                            {...register("name", { required: true })}
                          />
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
                        </label>
                      </div>
                    </div> */}

                    <div className="form-control w-full  my-4">
                      {/* <label className="label">
                        <p className="label-text font-bold">
                          Your Reply <span className="text-[red]">*</span>{" "}
                        </p>
                      </label> */}
                      <label className="w-full">
                        <textarea
                          className="textarea textarea-bordered "
                          placeholder="Add a description"
                          rows={5}
                          cols={96}
                          {...register("reply", { required: true })}
                          style={{ width: "100%", height: "20vh" }}
                        ></textarea>
                      </label>
                    </div>

                    <div className="mx-auto flex justify-center items-center">
                      <PrimaryButton value={"Reply"}></PrimaryButton>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ReplayQuery;
