import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import toast, { Toaster } from "react-hot-toast";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Button = ({ icon, onClick, name }) => {
  return (
    <>
      <Toaster />
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button
          class="rounded p-1.5 hover:bg-gray-100"
          // onClick={() => toast.success("You clicked " + name)}
        >
          {icon}
        </Menu.Button>
        <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 origin-top-right z-50 mt-3 w-56 rounded-md border shadow-sm bg-white border-gray-200">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Option 1
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Option 2
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Option 3
                </a>
              )}
            </Menu.Item>
         
          </div>
        </Menu.Items>
      </Transition>
      </Menu>
    </>
  );
  //   className="hover:bg-gray-50 rounded"
};
