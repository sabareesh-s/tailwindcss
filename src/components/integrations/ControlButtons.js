import React from "react";
import PropTypes from "prop-types";

export const ControlButtons = ({ icon, href, active }) => {
  return (
    <a
      href={href}
      className={
        active
          ? " bg-blue-100 rounded h-9 w-9 m-2 flex justify-center items-center"
          : "rounded h-9 w-9 m-2 flex justify-center items-center"
      }
    >
      {icon}
    </a>
  );
};

ControlButtons.propTypes = {
  icon: PropTypes.element,
  href: PropTypes.string,
};
