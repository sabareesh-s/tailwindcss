import React from "react";

export const Chip = ({ notification }) => {
  return (
    <span className="inline-block rounded-[50px] text-gray-900 bg-gray-200 text-xs py-0.5 px-1.5 items-center">
      {notification >= 100 ? "99+" : notification}
    </span>
  );
};
