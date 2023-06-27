import React from "react";
import { LeftNavBar } from "./LeftNavBar";
import { ProfileBar } from "./ProfileBar";

export const SideNav = ({
  userProfiles,
  icons,
  openSidebar,
  setOpenSidebar,
}) => {
  return (
    <>
      <aside
        className={`transition-all flex absolute md:static h-screen ${
          openSidebar ? "z-50 left-0" : " -left-full"
        }`}
      >
        <ProfileBar userProfiles={userProfiles} />
        <LeftNavBar icons={icons} />
      </aside>

      {openSidebar && (
        <span
          onClick={() => setOpenSidebar(false)}
          className="z-40 absolute bg-black/20 md:hidden w-full h-full"
        />
      )}
    </>
  );
};
