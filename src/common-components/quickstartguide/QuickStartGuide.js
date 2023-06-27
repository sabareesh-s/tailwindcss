import React, { Fragment } from "react";
import { GuideElement } from "./GuideElement";
import toast, { Toaster } from "react-hot-toast";

export const QuickStartGuide = ({ tips }) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <Toaster />
      <h1 className="text-sm text-gray-500 ">Quick Start Guide</h1>
      <div className="p-2 shadow-md rounded-lg bg-white flex gap-2 flex-col">
        {tips.map((data, index) => {
          return (
            <Fragment key={index.toString()}>
              <GuideElement
                name={data.name}
                status={data.status}
                index={index}
                href={data.href}
              />
            </Fragment>
          );
        })}
      </div>
      <h1 className="text-sm mb-2">
        For more tips & tricks, check out{" "}
        <span className="text-indigo-600 underline">
          <a href="#">o/get-started</a>
        </span>
      </h1>

      <div className="bg-indigo-50 border border-indigo-500 flex p-4 gap-3 rounded-lg shadow-md items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7 flex-shrink-0 fill-indigo-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clip-rule="evenodd"
          />
        </svg>
        <div className="text-gray-900 font-medium text-sm">
          Total time saved: <em className="font-semibold not-italic">50m</em>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-500 flex p-4 gap-3 rounded-lg shadow-md items-center">
        <img
          className="h-8 w-8"
          src="https://i.imgur.com/OqR29TR.png"
          alt="coin image"
        />
        <div className="text-gray-900 font-medium text-sm">
          Credits: <em className="font-semibold not-italic">$20</em>
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-500 p-4 flex flex-col gap-3 rounded-lg shadow-md">
        <div className="flex gap-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 flex-shrink-0 fill-indigo-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>
          <div className="text-gray-900 font-medium text-sm">
            Refer OSlash, get <em className="font-semibold not-italic">$10</em> credit
            each
          </div>
        </div>
        <button
          type="button"
          onClick={() => toast.success("Copy link button clicked")}
          className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 "
        >
          Copy link
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
            <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
