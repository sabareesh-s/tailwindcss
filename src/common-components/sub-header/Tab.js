import React from "react";
import { Chip } from "../chip/Chip";

export const Tab = ({ name, notification, active }) => {
  return (
    <li>
      <button className={active ? "relative text-gray-900 flex text font-medium items-center gap-2 px-4 pt-2 pb-4 text-sm capitalize" : "relative text-gray-500 hover:text-gray-700 flex text font-medium items-center gap-2 px-4 pt-2 pb-4 text-sm capitalize"}>
        {name}
        <Chip notification={notification} />
        {active && (
          <span className="absolute inset-x-0 bottom-0 -z-[1] h-1 w-full rounded-sm bg-indigo-600" />
        )}
        
      </button>
    </li>
  );
};
