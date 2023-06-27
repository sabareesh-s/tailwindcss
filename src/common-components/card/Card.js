import React from "react";

export const Card = ({ title, description, imgUrl }) => {
  return (
    <div className=" hover:bg-gray-100 transition ease-linear px-4 pt-4">
      <div className="flex ">
        <div className="w-9 h-9 flex-shrink-0 mr-3 shadow-md rounded-lg flex justify-center items-center">
          <img src={imgUrl} className="h-7" alt="avatar"/>
        </div>
        <div className="w-fit pb-4">
          <h1 className="text-sm font-medium mb-2">{title}</h1>
          <p className="text-sm font-normal text-gray-500 leading-5">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
