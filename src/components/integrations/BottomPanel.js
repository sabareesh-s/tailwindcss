import React from "react";
import toast, { Toaster } from "react-hot-toast";

export const BottomPanel = () => {
  return (
    <footer className="w-full p-2 h-[116px] shadow-[inset_-1px_1px_0px_rgba(229,231,235,1)] bg-indigo-50 flex flex-col justify-around">
      <Toaster/>
      <img
        className="w-11"
        src="https://i.imgur.com/xkFIpbf.png"
        alt="cat image"
      ></img>
      <button onClick={() => toast.success("You clicked refer button")} className="bg-indigo-600 h-9 w-9 rounded hover:bg-indigo-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 fill-white m-auto"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
        </svg>
      </button>
    </footer>
  );
};
