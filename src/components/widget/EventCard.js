import React, { useState, useEffect } from "react";

function EventCard(props) {
  return (
    <div class="flex flex-row items-center">
      <span
        className={
          props.variant === "done"
            ? "absolute rounded-sm h-8 w-0.5 bg-emerald-600"
            : props.variant === "ongoing"
            ? "absolute rounded-sm h-8 w-0.5 bg-red-500"
            : props.variant === "pending"
            ? "absolute rounded-sm h-4 w-0.5 bg-violet-600"
            : "absolute rounded-sm h-8 w-0.5 bg-green-600"
        }
        aria-hidden="true"
      />
      <div class="ml-[6px]">
        {props.variant === "pending" ? (
          <p class="text-gray-400 text-xs dark:text-gray-500 ">{props.name}</p>
        ) : (
          <p class=" dark:text-gray-400  text-sm capitalize font-medium">
            {props.name}
          </p>
        )}

        <p class="text-xs dark:text-gray-500 text-gray-500">{props.time}</p>
      </div>
    </div>
  );
}

export default EventCard;
