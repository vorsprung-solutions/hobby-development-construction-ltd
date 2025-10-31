import React from "react";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLogoGmail, BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Employee = ({ index, member }) => {
  console.log(index);
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <motion.div
      key={index}
      className={`${
        index % 2 === 1 ? "bg-green-200" : "bg-blue-200"
      } p-3 rounded-lg shadow-lg border relative`}
      whileHover={{ scale: 1.05 }}
      initial="hidden"
      animate="visible"
      variants={itemVariants}
      transition={{ delay: index * 0.2 }}
    >
      <span
        className={`bg-white absolute right-2 top-2 rounded-3xl px-2 py-1 text-orange-500 font-bold flex justify-center items-cente `}
      >
        {index + 1}
      </span>
      <img
        src={member?.imgUrl}
        alt="{member?.name}"
        className="w-24 h-24 border rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl text-blue-600">{member?.name}</h3>
      {/* <Link href={`about/${member?.nickName}`}></Link> */}
      <p className="text-sm text-gray-600">
        {member?.designation}, <span className="text-orange-600">SHDCL</span>
      </p>
      {/* <p>{member?.education[0] ? member?.education[0]?.description : ""}</p> */}
      <div className="flex flex-col items-center justify-center text-sm">
        <div className="flex gap-1 items-center">
          <BiPhone className="mx-1 cursor-pointer" />
          <p>{member?.phone}</p>
        </div>
        <div className="flex gap-1 items-center">
          <MdEmail className="mx-1 cursor-pointer" />
          <p>{member?.email}</p>
        </div>
        {/* <BsLinkedin className="mx-1 cursor-pointer" /> */}
      </div>
    </motion.div>
  );
};

export default Employee;
