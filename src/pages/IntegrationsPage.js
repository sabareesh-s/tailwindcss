import React from "react";
import { Header } from "../components/integrations/Header";
import { LeftNavBar } from "../components/integrations/LeftNavBar";
import { Modal } from "../components/integrations/Modal";
import { ProfileBar } from "../components/integrations/ProfileBar";

const sampleData = {
  userProfiles: [
    {
      name: "name",
      photoUrl: "https://i.imgur.com/FPOaMOP.png",
      active: true,
    },
    {
      name: "name",
      photoUrl: "https://i.imgur.com/FPOaMOP.png",
      active: false,
    },
    {
      name: "name",
      photoUrl: "https://i.imgur.com/FPOaMOP.png",
      active: false,
    },
  ],
  icons: [
    {
      name: "home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
      active: true,
      href: "#"
    },
    {
      name: "link",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
            clip-rule="evenodd"
          />
        </svg>
      ),
      active: false,
      href: "#"
    },
    {
      name: "nav-item-3",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5624 3L6.33672 9.97256H3L6.22029 3H9.5624Z"
            fill="#111827"
          />
          <path
            d="M9.76748 9.97253L6.54719 16.9452H3.20508L6.42476 9.97253H9.76748Z"
            fill="#111827"
          />
          <path
            d="M15.2397 4.53856L11.1101 4.52849L10.8691 3.62952L14.9989 3.63959L15.2397 4.53856Z"
            fill="#111827"
          />
          <path
            d="M17.2857 6.89926L10.0083 6.88921L9.76746 5.99023L17.0449 6.00029L17.2857 6.89926Z"
            fill="#111827"
          />
          <path
            d="M16.184 9.25999L8.90665 9.24992L8.66577 8.35095L15.9431 8.36101L16.184 9.25999Z"
            fill="#111827"
          />
        </svg>
      ),
      active: false,
      href: "#"
    },
    {
      name: "trending-up",

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
            clip-rule="evenodd"
          />
        </svg>
      ),
      active: false,
      href: "#"
    },
    {
      name: "star",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      active: false,
      href: "#"
    },
    {
      name: "settings",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clip-rule="evenodd"
          />
        </svg>
      ),
      active: false,
      href: "#"
    },
    {
      name: "tag",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
            clip-rule="evenodd"
          />
        </svg>
      ),
      active: false,
      href: "#"
    },
  ],
};

export const IntegrationsPage = () => {
  return (
    <div className="flex">
      <div className="flex">
        <ProfileBar userProfiles={sampleData.userProfiles} />
        <LeftNavBar icons={sampleData.icons} />
      </div>
      <div className="w-full">
        <Header />
        <Modal />
      </div>
    </div>
  );
};
