import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { RxCross2 } from 'react-icons/rx';

const ViewEmployeeModal = ({ isOpen, setIsOpen, employee }) => {
    // console.log(employee);
    return (
        <>
            <Transition appear show={ isOpen } as={ Fragment }>
                <Dialog as="div" className="relative z-[9999]" onClose={ () => setIsOpen(false) }>
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
                                <Dialog.Panel className=" relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 flex items-center justify-center"
                                    >
                                        <img className=' rounded-full w-1/2' src={ `${employee.imgUrl}` } alt="" />
                                    </Dialog.Title>
                                    <div onClick={ () => setIsOpen(false) } className=' absolute right-6 top-6 border rounded p-1 hover:bg-gray-100'>
                                        <RxCross2 />
                                    </div>

                                    <form >

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                                            <div className="form-control w-full">
                                                <label className="label">
                                                    <p className="label-text font-bold">
                                                        Name
                                                    </p>
                                                </label>
                                                <label className="w-full">
                                                    <input
                                                        defaultValue={ employee?.name }
                                                        disabled
                                                        type="text"
                                                        placeholder="Enter Your Name"
                                                        name="name"
                                                        className=" border-none w-full lg:max-w-2xl"
                                                    />
                                                </label>
                                            </div>
                                            <div className="form-control w-full ">
                                                <label className="label">
                                                    <p className="label-text font-bold">
                                                        Email Address
                                                    </p>
                                                </label>
                                                <label className="w-full">
                                                    <input
                                                        type="text"
                                                        defaultValue={ employee?.email }
                                                        disabled
                                                        placeholder="Enter Email Address"
                                                        name="name"
                                                        className="border-none w-full lg:max-w-2xl"
                                                    />
                                                </label>
                                            </div>

                                            <div className="form-control w-full">
                                                <label className="label">
                                                    <p className="label-text font-bold">
                                                        Designation
                                                    </p>
                                                </label>
                                                <label className="w-full">
                                                    <input
                                                        defaultValue={ employee?.designation }
                                                        disabled
                                                        type="text"
                                                        placeholder="Enter Your Name"
                                                        name="name"
                                                        className="border-none w-full lg:max-w-2xl"
                                                    />
                                                </label>
                                            </div>
                                            <div className="form-control w-full">
                                                <label className="label">
                                                    <p className="label-text font-bold">
                                                        Phone Number
                                                    </p>
                                                </label>
                                                <label className="w-full">
                                                    <input
                                                        type="text"
                                                        defaultValue={ employee?.phone }
                                                        disabled
                                                        placeholder="Enter Email Address"
                                                        name="name"
                                                        className="border-none w-full lg:max-w-2xl"
                                                    />
                                                </label>
                                            </div>
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

export default ViewEmployeeModal;