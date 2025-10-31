import React, { useContext, useEffect, useState } from "react";
import { HiMenu, HiMenuAlt2 } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../../../contexts/AuthContext/AuthContext";

const DrawerV2 = ({ routes, src, active, setActive }) => {

    const { user } = useContext(AuthContext)

    // State for toggling the sidebar in small screen
    const [isOpen, setIsOpen] = useState(false);

    // function to handle the click event of the link
    const handleOnClick = (nav) => {
        // close the sidebar after clicking the link in small screen after 100ms
        setTimeout(() => {
            setIsOpen(false);
        }, 100);
        setActive(nav.title);
    };

    useEffect(() => {
        //track the link for setActive state
        const currentPath = window.location.pathname;
        const activeLink = routes.find(
            (link) => link.path.split("/")[1] === currentPath.split("/")[2]
        );
        if (activeLink) {
            setActive(activeLink.title);
        } else {
            setActive("Dashboard");
        }
    }, []);

    const handleLogout = () => {
        Swal.fire({
            title: "Are you want logout?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Logout",
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("accessToken_SHDCL");
                localStorage.removeItem("SHDCL_User");
                location.reload();
            }
        });

        // navigate("/", { replace: true });
    };

    return (
        <div>
            {/* Menubar for small screen */ }
            <div className=" flex justify-between p-4">
                <div className=" flex justify-start items-center">
                    <button onClick={ () => setIsOpen(true) }>
                        <HiMenu className=" w-12 h-12" />
                    </button>
                    <Link className=" ms-4 w-16 " to="/">
                        <img className="w-full right-0 rounded-full border-2 border-gray-200" src={ src } alt="" />
                    </Link>
                </div>
            </div>
            {/* Sidebar for medium & large screen */ }
            <div
                className={
                    " block fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform  " +
                    (isOpen
                        ? " transition-opacity opacity-100 duration-500 -translate-x-0  "
                        : " transition-all delay-100 opacity-0 -translate-x-full  ")
                }
            >
                <section
                    className={
                        " w-1/4 left-0 absolute bg-white h-full shadow-xl delay-400 duration-500  transition-all transform  " +
                        (isOpen ? " translate-x-0 " : " -translate-x-full ")
                    }
                >
                    <article className="relative w-full pb-10 flex flex-col space-y-6 overflow-y-auto h-full">
                        {/* <header className="p-4 font-bold text-lg">Header</header> */ }
                        <div className="flex justify-between p-4 py-0">
                            <button onClick={ () => setIsOpen(false) }>
                                <HiMenuAlt2 className=" w-12 h-12" />
                            </button>
                            <Link className=" w-24" to="/">
                                <img className="w-full right-0" src={ src } alt="" />
                            </Link>
                        </div>
                        <div className=" mt-8 mx-4 flex flex-col">
                            { routes.map((nav, index) => (
                                <NavLink
                                    key={ nav.path }
                                    className={ `flex items-center justify-start ps-4 w-full my-1 font-poppins font-medium cursor-pointer text-start py-2 rounded-md text-[20px] ${active === nav.title
                                        ? " text-white bg-first"
                                        : " text-gray-700 bg-gray-100"
                                        }` }
                                    onClick={ () => handleOnClick(nav) }
                                    to={ `/${nav.path}` }
                                >
                                    <span>{ nav.icon }</span>
                                    <span className=" ms-4">{ nav.title }</span>
                                </NavLink>
                            )) }
                        </div>
                    </article>
                </section>
                <section
                    className=" w-screen h-full cursor-pointer "
                    onClick={ () => {
                        setIsOpen(false);
                    } }
                ></section>
            </div>
            {/* Sidebar for small screen */ }
            <div
                className={
                    " block md:hidden fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform  " +
                    (isOpen
                        ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                        : " transition-all delay-500 opacity-0 translate-x-full  ")
                }
            >
                <section
                    className={
                        " w-3/4 left-0 absolute bg-white h-full shadow-xl delay-400 duration-500  transition-all transform  " +
                        (isOpen ? " translate-x-0 " : " -translate-x-full ")
                    }
                >
                    <article className="relative w-full pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
                        {/* <header className="p-4 font-bold text-lg">Header</header> */ }
                        <div className="flex justify-between p-4 py-0">
                            <button onClick={ () => setIsOpen(false) }>
                                <HiMenuAlt2 className=" w-12 h-12" />
                            </button>
                            <Link className=" w-1/2" to="/">
                                <img className="w-full right-0" src={ src } alt="" />
                            </Link>
                        </div>
                        <div className=" mt-8 mx-4 flex flex-col">
                            { routes.map((nav, index) => (
                                <NavLink
                                    key={ nav.path }
                                    className={ `flex items-center justify-start ps-4 w-full my-1 font-poppins font-medium cursor-pointer text-start py-2 rounded-md text-[20px] ${active === nav.title
                                        ? " text-white bg-first"
                                        : " text-gray-700 bg-gray-100"
                                        }` }
                                    onClick={ () => handleOnClick(nav) }
                                    to={ `/${nav.path}` }
                                >
                                    <span>{ nav.icon }</span>
                                    <span className=" ms-4">{ nav.title }</span>
                                </NavLink>
                            )) }
                        </div>
                    </article>
                </section>
                <section
                    className=" w-screen h-full cursor-pointer "
                    onClick={ () => {
                        setIsOpen(false);
                    } }
                ></section>
            </div>
        </div>
    );
};

export default DrawerV2;
