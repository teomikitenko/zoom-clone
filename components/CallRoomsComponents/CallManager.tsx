import Lobby from "./Lobby";
import {
  useCall,
  StreamTheme,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import CallsLayout from "./CallsUi/CallsLayout";
import ParticipantList from "./CallsUi/ParticipantList";


const CallManager = () => {
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
          {call?.state.callingState === "joined" && <CallsLayout showList = {setShowList} />}
          <ParticipantList showList={showList} setList = {setShowList}/>
          </div>
        </StreamTheme>
      </div>
    </>
  );
};

export default CallManager;

