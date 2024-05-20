import {
  useCall,
  CallControls,
  CallStatsButton,
  useCallStateHooks,
  useStreamVideoClient,
} from "@stream-io/video-react-sdk";
import { LayoutList, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import type { Layout } from "@/types/types";
import { useUser } from "@clerk/nextjs";

const CustomCallControls = ({
  showList,
  setLayout,
}: {
  showList: Dispatch<SetStateAction<boolean>>;
  setLayout: Dispatch<SetStateAction<Layout>>;
}) => {
  const router = useRouter();
  const call = useCall();
  const { user } = useUser();
  const { useCallEndedBy, useCallCreatedBy } = useCallStateHooks();
  const ownerCall = useCallCreatedBy();
  const endCallParticipant = useCallEndedBy();
  const [modalLayout, setModalLayout] = useState(false);

  const endCall = async () => {
    await call?.endCall();
    router.push("/");
  };
  useEffect(() => {
    if (ownerCall?.id === endCallParticipant?.id) {
      router.push("/");
    }
  }, [endCallParticipant]);
  return (
    <div className="flex justify-center gap-3">
      <CallControls onLeave={() => router.push("/")} />
      <div className="flex gap-3 items-center">
        <CallStatsButton />
        <div className="flex gap-3">
          <button
            onClick={() => setModalLayout(!modalLayout)}
            className="bg-[#1d2938] p-2 rounded-full relative hover:bg-[#4c535b]"
          >
            <LayoutList />
            {modalLayout && (
              <div className=" absolute top-[-107px] left-[-80px] px-3 py-3 bg-slate-900 rounded-lg">
                <ul className="flex flex-col gap-2">
                  <li
                    onClick={() =>
                      setLayout({
                        l: "GridLayout",
                        prop: null,
                      })
                    }
                    className="text-sm"
                  >
                    Grid
                  </li>
                  <li
                    onClick={() =>
                      setLayout({
                        l: "SpeakerLayout",
                        prop: "left",
                      })
                    }
                  >
                    <p className="text-sm">Speaker-Left</p>
                  </li>
                  <li
                    onClick={() =>
                      setLayout({
                        l: "SpeakerLayout",
                        prop: "right",
                      })
                    }
                  >
                    <p className="text-sm">Speaker-Right</p>
                  </li>
                </ul>
              </div>
            )}
          </button>
          <button
            onClick={() => showList((val) => !val)}
            className="bg-[#1d2938] p-2 rounded-full hover:bg-[#4c535b]"
          >
            <Users />
          </button>
        </div>
        {user?.id === ownerCall?.id && (
          <button
            onClick={endCall}
            className="bg-[#dc433b] py-2 px-3  rounded-md hover:bg-[#e96962] "
          >
            <p className="text-sm">End call for everyone</p>
          </button>
        )}
      </div>
      ​
    </div>
  );
};
export default CustomCallControls;
