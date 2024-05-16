import { FaUserCircle } from "react-icons/fa";
import React from "react";

const Loader = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return array.map((i) => (
    <div key={i} className="p-4 shadow animate-pulse md:p-6">
      <div className="flex bg-gray-700 h-48 items-center rounded" />
      <div className="flex items-center mt-5 gap-3">
        <FaUserCircle className="text-5xl text-gray-700" />
        <div>
          <div className="h-2.5  bg-gray-700 w-44 rounded-full" />
          <div className=" w-16 h-2 rounded-full bg-gray-700 my-4" />

          <div className="flex gap-3">
            <div className=" w-16 h-2 rounded-full bg-gray-700 my-3" />
            <div className=" w-16 h-2 rounded-full bg-gray-700 my-3" />
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Loader;
