import React, { useState } from "react";

export const Modal = () => {
  const [open, setOpen] = useState();

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex">
      <div className="text-lg m-4 font-semibold flex flex-col gap-3 z-10">
        <span>Hello World!</span>
        <button
          type="button"
          onClick={handleModalOpen}
          className="inline-flex items-center w-14 rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Open
        </button>
      </div>

      {open && (
        <span
          className="absolute w-full h-full bg-black/20 z-20"
          onClick={handleModalClose}
        />
      )}
      {open && (
        <div className="absolute flex flex-col justify-center items-center gap-2 p-6 bg-white rounded-2xl shadow-md w-[512px] h-fit z-30 left-0 right-0 m-auto top-0 bottom-0">
          <img
            className="h-[118px] w-[152px]"
            src="https://i.imgur.com/r2O70Tp.png"
            alt="modal image"
          />
          <span className="font-semibold"> Importing directory</span>
          <p className="font-normal"> You can connect integrations once importing is done</p>
        </div>
      )}
    </div>
  );
};
