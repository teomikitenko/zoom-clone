import Lobby from "./Lobby";
import { CallParticipantsList } from "@stream-io/video-react-sdk";
import {
  useCall,
  StreamTheme,
} from "@stream-io/video-react-sdk";
import { Dispatch, SetStateAction, useState } from "react";
import CallsLayout from "./CallsUi/CallsLayout";
import clsx from "clsx";

const CallManager = () => {
  const[showList,setShowList] = useState(false)
  const call = useCall();
  console.log(call?.state.callingState)
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

const ParticipantList = ({showList,setList}:{showList:boolean,setList:Dispatch<SetStateAction<boolean>>})=>{
const transition  = clsx(showList?['w-[25%]','opacity-1']:['w-[0%]','opacity-0'])
  return (
    <div className={`mr-10 ${transition}  transition-all overflow-x-hidden`}>
      <CallParticipantsList  onClose={()=>setList(false)}/>
    </div>
  )
}
