"use client";
import { useEffect, useState } from "react";

const CurrentDate = () => {
  const currentDate = new Date();
  const formatedData = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  })
    .format(currentDate)
    .split(",")
    .join(" ");
  const formatedTime = new Intl.DateTimeFormat("uk-Ua", {
    timeStyle: "short",
  }).format(currentDate);
  const [currentTime, setCurrentTime] = useState(formatedTime);
  useEffect(() => {
    let timerid = setTimeout(() => {
      const currentTime = new Date();
      let formatedTime = new Intl.DateTimeFormat("uk-Ua", {
        timeStyle: "short",
      }).format(currentTime);
      setCurrentTime(formatedTime);
    }, 60000);
    return () => clearTimeout(timerid);
  }, [currentTime]);
  return (
    <div className="absolute bottom-4 left-5">
      <p suppressHydrationWarning className="text-4xl lg:text-6xl font-bold text-white">
        {currentTime}
      </p>
      <p className="text-lg text-white">{formatedData}</p>
    </div>
  );
};

export default CurrentDate;
