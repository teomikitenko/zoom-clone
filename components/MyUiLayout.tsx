import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  CancelCallConfirmButton,
  PaginatedGridLayout,
  SpeakerLayout,
  StreamTheme,
  useCall,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { Users } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

const MyUiLayout = ({showList}:{showList:Dispatch<SetStateAction<boolean>>}) => {
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();
  return (
    <div className="flex flex-col flex-grow ">
      <PaginatedGridLayout />
      <CustomCallControls showList={showList} />
    </div>
  );
};

export default MyUiLayout;

const CustomCallControls = ({showList}:{showList:Dispatch<SetStateAction<boolean>>}) => {
  const router = useRouter();
  const call = useCall();

  const evrCall = async () => {
    await call?.endCall();
    router.push("/");
  };

  return (
    <div className="flex justify-center gap-3">
      <CallControls onLeave={() => router.push("/")} />
      <div className="flex gap-3 items-center">
        <CallStatsButton />
        <div>
          <button onClick={()=>showList(val=>!val)} className="bg-[#1d2938] p-2 rounded-full hover:bg-[#4c535b]">
            <Users />
          </button>
        </div>
        <button
          onClick={evrCall}
          className="bg-[#dc433b] py-2 px-3  rounded-md hover:bg-[#e96962] ">
          <p className="text-sm">End call for everyone</p>
        </button>
      </div>
      ​
    </div>
  );
};


