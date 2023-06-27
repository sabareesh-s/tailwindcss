import React, { Fragment } from "react";
import ActionButton from "./ActionButton";
import DatePill from "./DatePill";
import EventCard from "./EventCard";

const Card = ({
  day,
  date,
  month,
  variant,
  completedEvents,
  ongoingEvents,
  action,
  completedEventDay,
}) => {
  return (
    <div
      class={
        variant === "large"
          ? "z-10 w-[336px] rounded-2xl backdrop-blur-xl bg-opacity-50 dark:bg-opacity-20 bg-gray-300 dark:bg-gray-500 p-4 flex gap-1.5 flex-col"
          : "z-10 w-40 rounded-2xl backdrop-blur-xl bg-opacity-50 dark:bg-opacity-20 bg-gray-300 dark:bg-gray-500 p-4 flex gap-1.5 flex-col"
      }
    >
      {variant === "large" ? (
        // Large Card
        <div class="flex flex-row gap-6">
          <div class="flex flex-col gap-1 w-32">
            <DatePill
              variant="large"
              day={day}
              date={date}
              month={month}
              completedEventDay={completedEventDay}
            />
            {ongoingEvents?.map((data, index) => {
              return (
                <Fragment key={index.toString()}>
                  <EventCard
                    variant={data.status}
                    name={data.name}
                    time={data.time}
                  />
                </Fragment>
              );
            })}
            <ActionButton
              name={action.name}
              onClick={action.onClick}
              time={action.time}
            />
          </div>
          <div class="flex gap-1.5 flex-col">
            <DatePill
              variant="small"
              day={day}
              date={date}
              month={month}
              completedEventDay={completedEventDay}
            />

            {completedEvents?.slice(0, 2).map((data, index) => {
              return (
                <Fragment key={index.toString()}>
                  <EventCard
                    variant={data.status}
                    name={data.name}
                    time={data.time}
                  />
                </Fragment>
              );
            })}

            {completedEvents.length > 2 ? (
              <EventCard
                variant="pending"
                time={`${
                  completedEvents.length - 2 > 0
                    ? completedEvents.length - 2
                    : undefined
                } more events`}
              />
            ) : null}
          </div>
        </div>
      ) : (
        // Small Card
        <>
          <DatePill date={date} day={day} month={month} />
          {ongoingEvents?.map((data, index) => {
            return (
              <Fragment key={index.toString()}>
                <EventCard
                  variant={data.status}
                  name={data.name}
                  time={data.time}
                />
              </Fragment>
            );
          })}

          {completedEvents?.slice(0, 2).map((data, index) => {
            return (
              <Fragment key={index.toString()}>
                <EventCard
                  variant={data.status}
                  name={data.name}
                  time={data.time}
                />
              </Fragment>
            );
          })}

          {completedEvents.length > 2 ? (
            <EventCard
              variant="pending"
              time={`${
                completedEvents.length - 2 > 0
                  ? completedEvents.length - 2
                  : undefined
              } more events`}
            />
          ) : null}
        </>
      )}
    </div>
  );
};

export default Card;
