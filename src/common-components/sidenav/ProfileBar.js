import React, { Fragment } from "react";
import { AddButton } from "./AddButton";
import { UserSelect } from "../../components/integrations/UserSelect";

export const ProfileBar = ({ userProfiles }) => {
  return (
    <div className="sticky flex flex-col h-screen bg-[url('https://i.imgur.com/cph067M.jpg')] ">
      {userProfiles.map((data, index) => {
        return (
          <Fragment key={index.toString()}>
            <UserSelect
              photoUrl={data.photoUrl}
              active={{
                active: data.active,
                onClick: () => console.log(data.name),
              }}
              name={data.name}
            />
          </Fragment>
        );
      })}
      <AddButton />
    </div>
  );
};
