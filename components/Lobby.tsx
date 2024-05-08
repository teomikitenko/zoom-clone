import React, { Dispatch, SetStateAction, useEffect } from "react";
import { VideoPreview, useCall } from "@stream-io/video-react-sdk";
import Image from "next/image";
import LoadingCircle from "@/public/icons/loading-circle.svg";
import { DeviceSettings, useCallStateHooks } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

const Lobby = () => {
  const call = useCall();
  const { useCameraState } = useCallStateHooks();
  const { camera, status } = useCameraState();
  const router = useRouter()
  const joinCall = async () => {
    await call?.join({create:true})
    router.refresh()
  };
  const toogleCamera = async () => {
    await call?.camera.toggle();
  }
  useEffect(() => {
    const cameraOn = async () => {
      await camera.enable();
    };
    cameraOn();
  }, []);
  console.log('render')

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h1 className="text-2xl font-semibold">Setup</h1>
      <div className="w-[38%] ">
        <VideoPreview className="!w-full" />
      </div>
      <div className="flex gap-4">
        <input onClick={toogleCamera} type="checkbox" name="micro" id="micro" />
        <label
          htmlFor="micro"
          
          className="flex items-center"
        >
          <p>Join with mic and camera off</p>
        </label>
        <DeviceSettings />
      </div>
      <button className="bg-green-600 px-3 py-2 rounded-sm" onClick={joinCall}>
        <p className="text-sm">Join to meeting</p>
      </button>
    </div>
  );
};

export default Lobby;

