import React, { Fragment, useState } from "react";
import { Card } from "../common-components/card/Card";
import { Dropdown } from "../common-components/dropdown/Dropdown";
import { Header } from "../common-components/header/Header";
import { QuickStartGuide } from "../common-components/quickstartguide/QuickStartGuide";
import { SideNav } from "../common-components/sidenav/SideNav";
import { SubHeader } from "../common-components/sub-header/SubHeader";

const cardData = [
  {
    title: "Design system knowledge-base",
    imgUrl: "https://i.imgur.com/kB5muN8.png",
    description:
      "Google Search is falling behind. We analyzed three areas – marketing queries, sports queries, and cooking queries – to understand where Google Search lags behind its competitors... In both cases, a great piece of code (syntax-highlighted!) is highlighted front and center, which means you never..",
  },
  {
    title: "Design system knowledge-base",
    imgUrl: "https://i.imgur.com/kB5muN8.png",

    description:
      "Google Search is falling behind. We analyzed three areas – marketing queries, sports queries, and cooking queries – to understand where Google Search lags behind its competitors... In both cases, a great piece of code (syntax-highlighted!) is highlighted front and center, which means you never..",
  },
  {
    title: "Design system knowledge-base",
    imgUrl: "https://i.imgur.com/kB5muN8.png",

    description:
      "Google Search is falling behind. We analyzed three areas – marketing queries, sports queries, and cooking queries – to understand where Google Search lags behind its competitors... In both cases, a great piece of code (syntax-highlighted!) is highlighted front and center, which means you never..",
  },
  {
    title: "Design system knowledge-base",
    imgUrl: "https://i.imgur.com/sV8Pge0.png",

    description:
      "Google Search is falling behind. We analyzed three areas – marketing queries, sports queries, and cooking queries – to understand where Google Search lags behind its competitors... In both cases, a great piece of code (syntax-highlighted!) is highlighted front and center, which means you never..",
  },
  {
    title: "Design system knowledge-base",
    imgUrl: "https://i.imgur.com/sV8Pge0.png",

    description:
      "Google Search is falling behind. We analyzed three areas – marketing queries, sports queries, and cooking queries – to understand where Google Search lags behind its competitors... In both cases, a great piece of code (syntax-highlighted!) is highlighted front and center, which means you never..",
  },
  {
    title: "Design system knowledge-base",
    imgUrl: "https://i.imgur.com/sV8Pge0.png",

    description:
      "Google Search is falling behind. We analyzed three areas – marketing queries, sports queries, and cooking queries – to understand where Google Search lags behind its competitors... In both cases, a great piece of code (syntax-highlighted!) is highlighted front and center, which means you never..",
  },
  {
    title: "Design system knowledge-base",
    imgUrl: "https://i.imgur.com/sV8Pge0.png",

    description:
      "Google Search is falling behind. We analyzed three areas – marketing queries, sports queries, and cooking queries – to understand where Google Search lags behind its competitors... In both cases, a great piece of code (syntax-highlighted!) is highlighted front and center, which means you never..",
  },
  {
    title: "Design system knowledge-base",
    imgUrl: "https://i.imgur.com/sV8Pge0.png",

    description:
      "Google Search is falling behind. We analyzed three areas – marketing queries, sports queries, and cooking queries – to understand where Google Search lags behind its competitors... In both cases, a great piece of code (syntax-highlighted!) is highlighted front and center, which means you never..",
  },
];

export const Comments = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* SideNav */}

      <SideNav
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        userProfiles={[
          {
            name: "Profile 1",
            photoUrl: "https://i.imgur.com/FPOaMOP.png",
            active: true,
          },
          {
            name: "Profile 2",
            photoUrl: "https://i.imgur.com/FPOaMOP.png",
            active: false,
          },
          {
            name: "Profile 3",
            photoUrl: "https://i.imgur.com/FPOaMOP.png",
            active: false,
          },
        ]}
        icons={[
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
            href: "#",
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
            href: "#",
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
            href: "#",
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
            href: "#",
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
            href: "#",
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
            href: "#",
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
            href: "#",
          },
        ]}
      />

      <div className="w-full">
        {/* Header  */}
        <Header
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          icons={[
            {
              name: "help",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              ),
            },
            {
              name: "notification",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              ),
            },
          ]}
        />
        {/* Secondary Header  */}
        <SubHeader
          buttons={[
            {
              name: "all",
              notification: "235",
              active: true,
            },
            {
              name: "docs",
              notification: "69",
              active: false,
            },
            {
              name: "files",
              notification: "420",
              active: false,
            },
            {
              name: "conversations",
              notification: "12",
              active: false,
            },
            {
              name: "people",
              notification: "9",
              active: false,
            },
          ]}
          icons={[
            {
              name: "filter",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                    clipRule="evenodd"
                  />
                </svg>
              ),
            },
            {
              name: "sort",
              icon: (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7H16C16.5523 7 17 6.55228 17 6C17 5.44772 16.5523 5 16 5H5Z"
                    fill="#111827"
                  />
                  <path
                    d="M7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H14C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9H7Z"
                    fill="#111827"
                  />
                  <path
                    d="M9 13C8.44772 13 8 13.4477 8 14C8 14.5523 8.44772 15 9 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H9Z"
                    fill="#111827"
                  />
                </svg>
              ),
            },
          ]}
        />
        {/* Main Container Starts */}
        <section className="w-full h-full flex">
          <div className="flex ">
            <div className="pt-2 px-4 bg-gray-50 h-screen flex-1">
              <Dropdown />
              <div className="text-sm mt-4 mb-6 text-gray-500 font-medium">
                Showing {cardData.length} results across 5 apps
              </div>
              <div className="overflow-auto scrollbar-hide h-[calc(100vh-204px)] pb-8 row-seperator">
                <div className="bg-white w-full overflow-hidden rounded-lg pb-0 last:mb-0">
                  {cardData.map((data, index) => {
                    return (
                      <Fragment key={index.toString()}>
                        <Card
                          title={data.title}
                          description={data.description}
                          index={index}
                          imgUrl={data.imgUrl}
                        />
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="h-[calc(100vh-100px)] w-60 bg-gray-50 flex-shrink-0 hidden md:flex overflow-auto">
              <QuickStartGuide
                tips={[
                  {
                    name: "creating shortcuts",
                    status: "completed",
                    href: "#",
                  },
                  {
                    name: "creating snippets",
                    status: "ongoing",
                    href: "#",
                  },
                  {
                    name: "finding shortcuts",
                    status: "todo",
                    href: "#",
                  },
                  {
                    name: "inviting members",
                    status: "todo",
                    href: "#",
                  },
                ]}
              />
            </div>
          </div>
        </section>
        {/* Main Container Ends */}
      </div>
    </div>
  );
};
