import React, { Fragment } from "react";
import { Button } from "../button/Button";
import { Avatar } from "./Avatar";

export const Header = ({ icons, setOpenSidebar, openSidebar }) => {
  return (
    <header className="h-12 z-10 sticky w-full shadow-[inset_0px_-1px_0px_rgba(229,231,235,1)] flex items-center justify-between px-4">
      <div className="hidden md:block relative  w-[496px] flex-shrink">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 fill-gray-400"
            viewBox="0 0 18 18"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <input
          type="search"
          name="search"
          id="search"
          className="block w-full rounded-lg outline-none border border-indigo-500 pl-9  py-2 px-[10px] text-sm"
          placeholder="Search"
        />
      </div>
      <button className="md:hidden" onClick={() => setOpenSidebar(!openSidebar)}>
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div className="flex items-center gap-1">
        {icons.map((data, index) => {
          return (
            <Fragment key={index.toString()}>
              <Button
                onClick={() => console.log(data.name)}
                icon={data.icon}
                name={data.name}
              ></Button>
            </Fragment>
          );
        })}
        <Avatar />
      </div>
    </header>
  );
};
