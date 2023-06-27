import React from "react";



const DatePill = ({variant, day, date,completedEventDay, month}) => {
  return (
    <>
      {variant && variant === "large" ? (
        <div class="text-xs flex flex-col rounded-md">
          <span class="text-red-600 text-xs -mb-[1px] uppercase">{day}</span>
          <span class="text-gray-900 dark:text-gray-400 text-xl uppercase">{date}</span>
        </div>
      ) : variant === "small" ? (
        <div class="text-xs opacity gap-1 flex flex-row py-1 dark:bg-opacity-20 bg-opacity-60 bg-gray-300 dark:bg-gray-400 h-5 items-center rounded-md">
          <span class="ml-2 w-32 text-gray-900 dark:text-gray-400 uppercase">{completedEventDay}</span>
        </div>
      ) : (
        <div class="text-xs opacity gap-1 flex flex-row py-1 dark:bg-opacity-20 bg-opacity-60 bg-gray-300 dark:bg-gray-400 h-5 items-center rounded-md">
          <span class="ml-2 text-red-600 uppercase">{day},</span>
          <span class="text-gray-900 dark:text-gray-400 uppercase">{date}{" "}{month} </span>
        </div>
      )}
    </>
  )
}

export default DatePill;
