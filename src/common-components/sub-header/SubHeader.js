import React, { Fragment } from "react";
import { Button } from "../button/Button";
import { Tab } from "./Tab";

export const SubHeader = ({ buttons, icons }) => {
  return (
    <div className="flex  sticky justify-between h-[52px] w-full items-center pl-4 pr-[10px] shadow-[inset_0px_-1px_0px_rgba(229,231,235,1)] ">
      <ul class="mt-auto overflow-x-auto flex items-center flex-shrink w-full custom-scrollbar">
        {buttons.map((data, index) => {
          return (
            <Fragment key={index.toString()}>
              <Tab
                name={data.name}
                notification={data.notification}
                index={index}
                active={data.active}
              />
            </Fragment>
          );
        })}
      </ul>
      <div className="bg-white w-fit right-0 flex-shrink-0 border-l md:border-0 pl-2 flex gap-1">
      {icons.map((data, index) => {
          return (
            <Fragment key={index.toString()}>
              <Button
                onClick={() => console.log(data.name)}
                name={data.name}
                icon={data.icon}
              ></Button>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
