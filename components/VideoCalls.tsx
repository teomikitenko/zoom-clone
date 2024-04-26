"use client";
import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
  Call,
  TokenProvider,
} from "@stream-io/video-react-sdk";
import MyUiLayout from "./MyUiLayout";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

const VideoCalls = () => {
  const [myCall, setMyCall] = useState<Call | undefined>(undefined);
  const [myClient, setMyClient] = useState<StreamVideoClient | undefined>(
    undefined
  );
  const { user: authUser, isLoaded } = useUser();
  const startCalling = async () => {
    const call = myClient!.call("default",'supadzvinok' /* authUser?.id as string */);
    await call.join({ create: true });
    setMyCall(call);
  };
  const tokenProvider = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_MY_DEPLOYING_URL}/api/generate_token`);
    const { token } = await res.json();
    return token;
  };
  useEffect(() => {
    if (isLoaded) {
      const user: User = {
        id: authUser?.id as string,
        name: authUser?.firstName as string,
        image: authUser?.imageUrl,
      };
      const client = new StreamVideoClient({
        apiKey: process.env.NEXT_PUBLIC_STREAM_API_KEY as string,
        user,
        tokenProvider: tokenProvider as TokenProvider,
      });

      setMyClient(client);
    }
  }, [isLoaded]);
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5">
        <div>
          {myCall && (
            <StreamVideo client={myClient!}>
              <StreamCall call={myCall}>
                <MyUiLayout />
              </StreamCall>
            </StreamVideo>
          )}
        </div>

        <div className="flex gap-4 mt-56">
          <button onClick={startCalling}>Start Call</button>
          <button onClick={() => myCall?.endCall()}>End Call</button>
        </div>
      </div>
    </>
  );
};
export default VideoCalls;
