import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import PrimaryButton from '../../../../components/button/PrimaryButton';
import { RxCross2 } from 'react-icons/rx';

const QueryViewModal = ({ isPreviewOpen, setIsPreviewOpen, queryData }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        setIsPreviewOpen(false);
        reset();
    };

    // console.log("object for ",  queryData);

    return (
        <>
            <Transition appear show={ isPreviewOpen } as={ Fragment }>
                <Dialog as="div" className="relative z-[9999]" onClose={ () => setIsPreviewOpen(false) }>
                    <Transition.Child
                        as={ Fragment }
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
                                as={ Fragment }
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Message Preview
                                    </Dialog.Title>
                                    <div onClick={ () => setIsPreviewOpen(false) } className=' absolute right-6 top-6 border rounded p-1 hover:bg-gray-100'>
                                        <RxCross2 />
                                    </div>

                                    <form onSubmit={ handleSubmit(onSubmit) }>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                                            <div className="form-control w-full">
                                                <label className="label">
                                                    <p className="label-text font-bold">
                                                        Name
                                                    </p>
                                                </label>
                                                <label className="w-full">
                                                    <input
                                                        defaultValue={ queryData?.name }
                                                        disabled
                                                        type="text"
                                                        placeholder="Enter Your Name"
                                                        name="name"
                                                        className=" rounded-md w-full lg:max-w-2xl border-gray-200"
                                                        { ...register("name") }
                                                    />
                                                </label>
                                            </div>
                                            <div className="form-control w-full">
                                                <label className="label">
                                                    <p className="label-text font-bold">
                                                        Email Address
                                                    </p>
                                                </label>
                                                <label className="w-full">
                                                    <input
                                                        defaultValue={ queryData?.email }
                                                        disabled
                                                        type="text"
                                                        placeholder="Enter Email Address"
                                                        name="name"
                                                        className=" rounded-md border-gray-200  w-full lg:max-w-2xl"
                                                        { ...register("email") }
                                                    />
                                                </label>
                                            </div>


                                        </div>
                                        <div className="form-control w-full  my-4">
                                            <label className="label">
                                                <p className="label-text font-bold">
                                                    Email Subject
                                                </p>
                                            </label>
                                            <label className="w-full">
                                                <input
                                                    defaultValue={ queryData?.subject }
                                                    disabled
                                                    type="text"
                                                    placeholder="Enter Email Address"
                                                    name="name"
                                                    className="rounded-md border-gray-200 w-full lg:max-w-2xl"
                                                    { ...register("email") }
                                                />
                                            </label>
                                        </div>


                                        <div className="form-control w-full  my-4">
                                            <label className="label">
                                                <p className="label-text font-bold">
                                                    Message
                                                </p>
                                            </label>
                                            <label className="w-full">
                                                <textarea
                                                    defaultValue={ queryData?.message }
                                                    disabled
                                                    className="border-gray-200 rounded-md "
                                                    placeholder="Add a description"
                                                    rows={ 5 }
                                                    cols={ 96 }
                                                    { ...register("reply") }
                                                    style={ { width: "100%", height: "20vh" } }
                                                ></textarea>

                                            </label>
                                        </div>

                                        {/* <div className="mx-auto flex justify-center">
                                            <PrimaryButton value={ "Mark as read" }></PrimaryButton>
                                        </div> */}
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

export default QueryViewModal;