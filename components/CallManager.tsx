import { VideoPreview } from "@stream-io/video-react-sdk";
import Lobby from "./Lobby";
import { useCallStateHooks } from "@stream-io/video-react-sdk";
import {
  DeviceSelectorVideo,
  DeviceSettings,
  useCall,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import Image from "next/image";
import MyUiLayout from "./MyUiLayout";

const CallManager = () => {
  const { useCameraState } = useCallStateHooks();
  const call = useCall();
  const { camera, mediaStream, selectedDevice, devices, status, isEnabled } =
    useCameraState();
  useEffect(() => {
    const cameraOn = async () => {
      await camera.enable();
    };
    cameraOn();  
  }, []);


  return (
    <>
      <div className="w-full h-full">
        {call?.state.callingState === "idle" && <Lobby />}
        {call?.state.callingState === "joined" && <MyUiLayout />}
      </div>

      {/*  <DeviceSelectorVideo visualType="dropdown"/> */}

    </>
  );
};

export default CallManager;
