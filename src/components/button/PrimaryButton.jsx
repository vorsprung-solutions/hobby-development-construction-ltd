import React from "react";

const PrimaryButton = ({value}) => {
  return (
    <div>
      <button className="my-6 bg-gradient-to-r from-blue-800 to-blue-400 text-white py-2 rounded-lg btn-wide cursor-pointer">{value}</button>
    </div>
  );
};

export default PrimaryButton;
