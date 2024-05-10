import {
  CallControls,
  CallStatsButton,
  useCall,
} from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { Users } from "lucide-react";
import { Dispatch, SetStateAction,useState } from "react";
import { LayoutList } from "lucide-react";
import SwapLayout from "./SwapLayout";
import type { Layout } from "@/types/types";

const CallsLayout = ({
  showList,
}: {
  showList: Dispatch<SetStateAction<boolean>>;
}) => {
  const [layout, setLayout] = useState<Layout>({
    l: "GridLayout",
    prop: "right",
  });
  return (
    <div className="flex flex-col flex-grow ">
      <SwapLayout layout={layout} />
      <CustomCallControls showList={showList} setLayout={setLayout} />
    </div>
  );
};

export default CallsLayout;

const CustomCallControls = ({
  showList,
  setLayout,
}: {
  showList: Dispatch<SetStateAction<boolean>>;
  setLayout: Dispatch<SetStateAction<Layout>>;
}) => {
  const router = useRouter();
  const call = useCall();
  const [modalLayout, setModalLayout] = useState(false);

  const endCall = async () => {
    await call?.endCall();
    setTimeout(()=>router.push("/"),500)
  };
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
                  <li  onClick={() =>
                      setLayout({
                        l: "SpeakerLayout",
                        prop: 'left',
                      })
                    } >
                    <p className="text-sm">Speaker-Left</p>
                  </li>
                  <li  onClick={() =>
                      setLayout({
                        l: "SpeakerLayout",
                        prop: 'right',
                      })
                    }>
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
        <button
          onClick={endCall}
          className="bg-[#dc433b] py-2 px-3  rounded-md hover:bg-[#e96962] "
        >
          <p className="text-sm">End call for everyone</p>
        </button>
      </div>
      ​
    </div>
  );
};
