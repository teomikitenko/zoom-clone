import React, { useEffect, useState } from "react";


const DynamicDate = () => {
  const currentDate = new Date();
  const formatedData = new Intl.DateTimeFormat('en-US',{
    dateStyle: 'full',
  }).format(currentDate).split(',').join(' ')
   const formatedTime = new Intl.DateTimeFormat('ua',{
    timeStyle:'short'
  }).format(currentDate) 
  const [currentTime, setCurrentTime] = useState(formatedTime);
  useEffect(() => {
    let timerid = setTimeout(
      () =>{
        let formatedTime = new Intl.DateTimeFormat('ua',{
          timeStyle:'short'
        }).format(currentDate)
        setCurrentTime(formatedTime)
      },
      60000
    );
    return () => clearTimeout(timerid);
  }, [currentTime]);
  return (
    <div suppressHydrationWarning className="absolute bottom-9 left-4">
      <p className="text-6xl font-bold text-white">  {currentTime}</p>
      <p className="text-lg text-white">{formatedData}</p>
    </div>
  );
};

export default DynamicDate;
