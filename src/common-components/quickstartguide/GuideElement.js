import React from "react";

export const GuideElement = ({ name, status, index, href }) => {
  return (
    <a
      className={
        status === "todo"
          ? "text-sm text-gray-400 p-2 flex items-center gap-3 rounded hover:bg-gray-100 capitalize"
          : status === "ongoing"
          ? "text-sm text-indigo-600 p-2 flex items-center gap-3 rounded hover:bg-gray-100 capitalize"
          : status === "completed"
          ? "text-sm text-gray-900 p-2 flex items-center gap-3 rounded hover:bg-gray-100 capitalize"
          : ""
      }
      href={href}
    >
      <div
        className={
          status === "todo"
            ? "flex h-5 w-5 border border-gray-300 text-[10px] p-auto rounded-full justify-center items-center font-medium"
            : status === "ongoing"
            ? "flex h-5 w-5 border border-indigo-600 text-[10px] p-auto rounded-full justify-center items-center font-medium"
            : status === "completed"
            ? "flex h-5 w-5 text-[10px] bg-indigo-600 p-auto rounded-full justify-center items-center font-medium"
            : ""
        }
      >
        {status === "completed" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 z-20 fill-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          "0" + (index + 1)
        )}
        {/* {"0"}
        {index + 1} */}
      </div>
      {name}
    </a>
  );
};
