import React from "react";

function ActionButton(props) {

  return (
    <button onClick={props.onClick} class="rounded-lg hover:bg-gray-100 active:bg-gray-300 backdrop-blur-xl dark:hover:bg-gray-900 dark:active:bg-gray-800 bg-white dark:bg-black px-2 py-1 flex flex-row justify-between">
      <span className="flex flex-col items-start">
        <span class="text-sm dark:text-gray-400 leading-4">{props.name}</span>
        <span class="text-sm text-gray-500 leading-4">{props.time}</span>
      </span>
      <span class="h-4 w-4 mt-1 bg-sky-500 rounded-full flex items-center content-center justify-center">
        <svg
          width="9.5"
          height="9.5"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.78331 5.15878C8.95979 5.20132 9.11421 5.11625 9.20245 4.98864C9.24657 4.92484 9.24657 4.81851 9.24657 4.58457V1.37321C9.24657 1.13927 9.24657 1.0542 9.20245 0.969129C9.13627 0.79899 8.95979 0.735189 8.78331 0.79899C8.32004 1.09673 7.30528 1.96869 7.28322 2.33023C7.26557 2.39404 7.26557 2.50037 7.26557 2.64924V3.4574C7.26557 3.62754 7.26557 3.69134 7.28322 3.77641C7.30528 3.94655 7.37146 4.09542 7.4597 4.18049C7.72442 4.37189 8.60682 5.13752 8.80537 5.13752L8.78331 5.15878ZM0.753418 1.54335C0.753418 1.22434 0.753418 1.0542 0.819598 0.969129C0.863719 0.88406 0.996079 0.79899 1.06226 0.735189C1.1505 0.671387 1.30492 0.671387 1.65788 0.671387H4.50364C5.34193 0.671387 5.76107 0.671387 6.09197 0.841525C6.33463 1.01166 6.59935 1.16053 6.75377 1.47954C6.93025 1.79855 6.93025 2.20263 6.93025 3.01079V4.45696C6.93025 4.77597 6.93025 4.94611 6.86407 5.03118C6.81995 5.11625 6.68759 5.20132 6.62141 5.26512C6.53317 5.32892 6.37875 5.32892 6.02579 5.32892H3.18003C2.34175 5.32892 1.9226 5.32892 1.5917 5.15878C1.34904 4.98864 1.08432 4.83977 0.929899 4.52076C0.753418 4.20176 0.753418 3.79768 0.753418 2.98952V1.54335Z"
            fill="white"
          />
        </svg>
      </span>
    </button>
  );
}

export default ActionButton;
