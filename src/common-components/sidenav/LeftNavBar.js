import React, { Fragment } from "react";
import { ArrowButton } from "./ArrowButton";
import { BottomPanel } from "../../components/integrations/BottomPanel";
import { ControlButtons } from "../../components/integrations/ControlButtons";


export const LeftNavBar = ({ icons }) => {
  return (
    <div className="bg-white sticky w-[52px] flex flex-col justify-between shadow-[inset_-1px_0px_0px_rgba(229,231,235,1)]">
      <nav>
        <ArrowButton />
        {icons.map((data, index) => {
          return (
            <Fragment key={index.toString()}>
              <ControlButtons
                icon={data.icon}
                href={data.href}
                active={data.active}
              />
            </Fragment>
          );
        })}
      </nav>
      <BottomPanel />
    </div>
  );
};
