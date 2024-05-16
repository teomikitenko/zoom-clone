"use client";
import {
  StreamCall,
  Call,
  useStreamVideoClient,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import CallManager from "./CallManager";
import { useSearchParams } from "next/navigation";

const VideoCalls = () => {
  const [myCall, setMyCall] = useState<Call | undefined>(undefined);
  const client = useStreamVideoClient();
  const params = useSearchParams();
  useEffect(() => {
    if (client) {
      const call = client!.call("default", params.get("id") as string);
      setMyCall(call);
    }
  }, [client]);
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5">
        <div>
          <StreamCall call={myCall}>
            <CallManager />
          </StreamCall>
        </div>
      </div>
    </>
  );
};
export default VideoCalls;
