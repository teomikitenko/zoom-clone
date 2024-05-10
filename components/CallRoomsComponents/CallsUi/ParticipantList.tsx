import { CallParticipantsList } from "@stream-io/video-react-sdk"
import clsx from "clsx"
import { Dispatch, SetStateAction } from "react"

const ParticipantList = ({showList,setList}:{showList:boolean,setList:Dispatch<SetStateAction<boolean>>})=>{
    const transition  = clsx(showList?['w-[25%]','opacity-1']:['w-[0%]','opacity-0'])
      return (
        <div className={`mr-10 ${transition}  transition-all overflow-x-hidden`}>
          <CallParticipantsList  onClose={()=>setList(false)}/>
        </div>
      )
    }
    export default ParticipantList