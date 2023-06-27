import React, { Fragment, useEffect, useState } from "react";
import Card from "../components/widget/Card";

const dummyData = [
    {
      type: "small",
      day: "today",
      date: "10",
      month: "oct",
      ongoingEvents: [],
      completedEventDay: "",
      completedEvents: [
        {
          status: "done",
          name: "event name",
          time: "10:00-11:30",
        },
        {
          status: "done",
          name: "event name",
          time: "10:00-11:30",
        },
        {
          status: "done",
          name: "event name",
          time: "10:00-11:30",
        },
        {
          status: "done",
          name: "event name",
          time: "10:00-11:30",
        },
        {
          status: "done",
          name: "event name",
          time: "10:00-11:30",
        },
        {
          status: "done",
          name: "event name",
          time: "10:00-11:30",
        },
     
      ],
    },
    {
      type: "small",
      day: "today",
      date: "10",
      month: "oct",
      ongoingEvents: [],
      completedEventDay: "",
      completedEvents: [
        {
          status: "done",
          name: "event name",
          time: "10:00-11:30",
        },
        {
          status: "done",
          name: "event name",
          time: "10:00-11:30",
        },
        {
          status: "done",
          name: "event name",
          time: "10:00-11:30",
        },
        {
          status: "done",
          name: "event name",
          time: "10:00-11:30",
        },
        {
          status: "done",
          name: "event name",
          time: "10:00-11:30",
        },
     
      ],
    },
    {
      type: "large",
      day: "today",
      date: "10",
      month: '',
      ongoingEvents: [
        {
          status: "ongoing",
          name: "event name",
          time: "10:00-11:30",
        },
      ],
      completedEventDay: "Tommorow",
      completedEvents: [
        {
          status: "done",
          name: "event name",
          time: "10:00-11:30",
        },
        {
          status: "done",
          name: "event name",
          time: "10:00-11:30",
        },
        {
          status: "done",
          name: "event name",
          time: "10:00-11:30",
        },
        {
          status: "done",
          name: "event name",
          time: "10:00-11:30",
        },
        {
          status: "done",
          name: "event name",
          time: "10:00-11:30",
        },
        {
          status: "done",
          name: "event name",
          time: "10:00-11:30",
        },
      ],
      action: {
        name: "Join in Zoom",
        time: "15m later",
      },
    },
];

const WidgetPage = () => {
    const [switchDarkMode, setSwitchDarkMode] = useState(false)
  
    useEffect(() => {
        document.body.classList.toggle('dark', switchDarkMode);
    }, [switchDarkMode])
    
    return (
        <>
            <label 
                class="absolute top-4 right-4 inline-flex items-center cursor-pointer"
            >
                <input type="checkbox" value="" class="sr-only peer" onChange={() => setSwitchDarkMode(!switchDarkMode)} />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Switch {switchDarkMode ? 'Light' : 'Dark'}</span>
            </label>

            <div class="h-screen bg-cover flex justify-center dark:bg-[url('https://s3-alpha-sig.figma.com/img/aace/79d1/33b041bc7ee85c20bdd893c85e36c7e0?Expires=1671408000&Signature=e4QrToLfpWiG0YOz3JeASjXNE-nQtFV6THAT8r4wiunHdNy5dl7Se6T10synkcM54DFudIbeXSGhN5ufzigBWjQ3eWBI6AS5eeMkumPERsQOJ2kiC5e8C302sehw4ykXOCoJi3u4UeIbopZfIlypIttWwScJBMSkyZ0PsVwKqlnU-GeZRITOe2pCtSYiEGl2essVuKuf3W2kZEkwfS9PHTgda3u1C61BPZOjs1Zvpv~ukdgI-z4naz-VxN3~ODfey4qBH3NzQ-QPo2dgvQ9fJMMCp-5ygBqk2NRE4P2UsCVdZ2ofRKCluFXb1xFk8~drrKGOB~jZqkhJQsNneWLjoQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')] bg-[url('https://s3-alpha-sig.figma.com/img/67d1/2cf0/b3455de7513623549d6d8e8985de39c5?Expires=1671408000&Signature=SdMNhb9m4pfrfwZsQGhojSOQCAcHsUgr88OHb9gcowrteqh7DV79JEI7~vmFWA6okk0cYvA5aexyynvwSK2zPiNQjW5d4ihC95aW9zotP9pEme4a4IEzn6D2RTFYMHCBH3k2jiV~UQS9jJneSZOosBKneFMpNDvpuIa74BekqqXVb7r5KsMQTAQcV6eqbDMv2dlXT4flw4A3yQRKxLE9vO13qRAXYyuYwt9HERrVBFZfWttFb485v~tA6sxsZ4LjUS2iUVAu7t9VceeBsQJ4QX3A-R348B6DCGIukgmU2gTXvDUCpJCtTnJCCuuxhS1M-UBDoeQPDTThV73bdqbaIQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')]">      
                <div class="w-[688px] pt-44 mx-auto">

                <div className="relative flex items-center pb-10">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-gray-400 absolute right-2.5 pointer-events-none"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                    />
                    </svg>

                    <input
                    type="search"
                    id="default-search"
                    class="block w-full outline-0 pl-4 pr-10 py-3 h-11 text-sm text-gray-400 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500"
                    placeholder="Type the keyword or shortcut"
                    required
                    />
                </div>

                <div class="flex flex-row gap-[15px]">
                    {dummyData.map((data, index) => {
                    return (
                        <Fragment key={index.toString()}>
                            <Card
                                variant={data.type}
                                day={data.day}
                                date={data.date}
                                completedEvents={data.completedEvents}
                                ongoingEvents={data.ongoingEvents}
                                action={{
                                name: data?.action?.name,
                                time: data?.action?.time,
                                onClick: () => console.log(data.action.name),
                                }}
                                month={data.month}
                                completedEventDay={data.completedEventDay}
                            />
                        </Fragment>
                    );
                    })}
                </div>
                </div>
            </div>
        </>    
    )
}

export default WidgetPage