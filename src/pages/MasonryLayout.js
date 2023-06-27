import React, { useEffect, useState, Fragment } from "react";

export const MasonryLayout = () => {
  const [heightArray, setHeightArray] = useState();
  useEffect(() => {
    const randomHeights = [...Array(25)].map(() => 1 + Math.random() * 300);
    setHeightArray(randomHeights);
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        // clear: "left",
        overflow: "hidden",
        color: "#fff"
      }}
    >
      {heightArray?.map((height, index) => {
        if (height < 50) {
          height *= 10;
        }
        return (
          <Fragment key={index.toString()}>
            <div
              style={{
                float: "left",
                width: "160px",
                height: `${height}px`,
                margin: "15px",
                padding: "7px",
                borderRadius: "8px",
                backgroundColor: "violet",
              }}
            >
              {index + 1}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
