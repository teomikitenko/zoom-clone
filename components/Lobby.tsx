import React from "react";
import { VideoPreview, useCall } from "@stream-io/video-react-sdk";
import Image from "next/image";
import LoadingCircle from "@/public/icons/loading-circle.svg";
import { DeviceSettings } from "@stream-io/video-react-sdk";

const Lobby = () => {
  const call = useCall();
  const joinCall = async () => {
    await call?.join({ create: true });
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h1 className="text-2xl font-semibold">Setup</h1>
      <div className="w-[38%] border-4 border-sky-600 rounded-md">
        <VideoPreview
          className="!w-full"
          DisabledVideoPreview={DisabledVideoPreview}
          StartingCameraPreview={StartingCameraPreview}
          NoCameraPreview={NoCameraPreview}
        />
      </div>

     <div className="flex gap-3">
        <input type="checkbox" name="micro" id="micro" />
        <label htmlFor="micro">Join with mic and camera off</label>
        
     </div>
      <button className="bg-green-600 px-3 py-2 rounded-sm" onClick={joinCall}>
        <p className="text-sm">Join to meeting</p>
      </button>
      <DeviceSettings/>
    </div>
  );
};

export default Lobby;

const StartingCameraPreview = () => {
  return (
    //<Image src={LoadingCircle} width={35} height={35} alt="load"/>
    <p>await</p>
  );
};
const NoCameraPreview = () => {
  return <p>no video</p>;
};
const DisabledVideoPreview = () => {
  return <Image src={LoadingCircle} width={135} height={135} alt="load" />;
};
