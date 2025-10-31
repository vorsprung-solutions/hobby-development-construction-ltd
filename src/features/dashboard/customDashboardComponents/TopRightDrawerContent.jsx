import { Popover, Transition } from '@headlessui/react';
import React from 'react';
import { Fragment } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';

const TopRightDrawerContent = ({ topRoutes, handleLogout }) => {

    return (
        <div>
            <Popover className="relative z-50">
                { ({ open }) => (
                    <>
                        <Popover.Button
                            className={ `
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <CgMenuGridO aria-hidden="true" color="gray" className=" w-8 h-8" />
                        </Popover.Button>
                        <Transition
                            as={ Fragment }
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Popover.Panel className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid grid-flow-row gap-2 bg-white p-4">
                                        { topRoutes.map((item) => (
                                            <NavLink
                                                key={ item.name }
                                                to={ item.href }
                                                className="flex items-center rounded-lg p-2 py-4 transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                            >
                                                <div className="flex items-center justify-center text-white">
                                                    { item.icon }
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        { item.name }
                                                    </p>
                                                </div>
                                            </NavLink>
                                        )) }
                                    </div>
                                    <div className="p-2 pb-4">

                                        <button
                                            onClick={ handleLogout }
                                            className="bg-[#dc2b2b] text-white p-2 px-16 rounded mx-auto"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                ) }
            </Popover>
        </div>
    );
};

export default TopRightDrawerContent;