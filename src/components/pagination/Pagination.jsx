import React from "react";

const Pagination = ({ tableData, handlePageChange, currentPage }) => {
  console.log(tableData);
  return (
    <div className=" flex justify-center my-10 gap-2">
      {Array.from({
        length: Math.ceil(tableData?.data?.length / 5),
      }).map((_, index) => (
        <button
          key={index}
          className={`join-item btn    ${
            currentPage === index + 1
              ? " bg-first text-white"
              : "bg-white text-black hover:text-white border border-blue-700"
          }`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
