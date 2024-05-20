import { Dispatch, SetStateAction,useEffect,useState } from "react";
import SwapLayout from "./SwapLayout";
import type { Layout } from "@/types/types";
import CustomCallControls from "./CustomCallControls";
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

