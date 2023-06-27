import React from "react";
import toast, { Toaster } from "react-hot-toast";

export const UserSelect = ({ photoUrl, active, name }) => {
  return (
    <>
      {" "}
      <Toaster />
      <button
        onClick={() => toast.success("You clicked " + name)}
        className={active.active ? "px-2 py-1 bg-white" : "px-2 py-1 "}
      >
        <img className=" h-8 w-8" src={photoUrl} alt="profile image"></img>
      </button>
    </>
  );
};
