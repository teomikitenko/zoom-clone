import Lobby from "./Lobby";
import { CallParticipantsList, useCallStateHooks } from "@stream-io/video-react-sdk";
import {
  useCall,
  StreamTheme,
} from "@stream-io/video-react-sdk";
import { useState } from "react";
import MyUiLayout from "./MyUiLayout";
import clsx from "clsx";

const CallManager = () => {
  const { useCameraState } = useCallStateHooks();
  const[showList,setShowList] = useState(false)
  const call = useCall();

  return (
    <>
      <div className="w-full h-full">
        <StreamTheme>
          {call?.state.callingState === "idle" && (
            <Lobby />
          )}
          <div className="flex">
          {call?.state.callingState === "joined" && <MyUiLayout showList = {setShowList} />}
          <ParticipantList showList={showList}/>
          </div>
          
        </StreamTheme>
      </div>
    </>
  );
};

export default CallManager;

const ParticipantList = ({showList}:{showList:boolean})=>{

const transition  = clsx(showList?['w-[25%]','opacity-1']:['w-[0%]','opacity-0'])
  return (
    <div className={`mr-10 ${transition}  transition-all overflow-x-hidden`}>
      <CallParticipantsList  onClose={()=>false}/>
    </div>
  )
}
