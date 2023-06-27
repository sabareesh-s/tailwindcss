import React from "react";
import toast, { Toaster } from "react-hot-toast";

export const AddButton = () => {
  return (
    <>
      <Toaster />
      <button className="px-2 py-1" onClick={()=> toast.success("You clicked add profile button")}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:opacity-60"
        >
          <path
            d="M17 12.1201V17.1201M17 17.1201V22.1201M17 17.1201H22M17 17.1201H12"
            stroke="#111827"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="1"
            y="1.12012"
            width="32"
            height="32"
            rx="4"
            stroke="#111827"
            stroke-linecap="round"
            stroke-dasharray="4 4"
          />
        </svg>
      </button>
    </>
  );
};
