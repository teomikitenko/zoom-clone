"use client";
import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
  Call,
  TokenProvider,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import CallManager from "./CallManager";
import { useSearchParams } from 'next/navigation'

const VideoCalls = () => {
  const [myCall, setMyCall] = useState<Call | undefined>(undefined);
  const [myClient, setMyClient] = useState<StreamVideoClient | undefined>(
    undefined
  );
  const params = useSearchParams()
  const { user: authUser, isLoaded } = useUser();
  useEffect(() => {
    if (myClient) {
      const call = myClient!.call("default", params.get("id") as string );  
      setMyCall(call);
    }
  }, [myClient]);
  useEffect(() => {
    if (isLoaded) {
      const tokenProvider = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_MY_DEPLOYING_URL}/api/generate_token`, { cache: "no-store" });
        const { token } = await res.json();
        return token;
      };
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
                <CallManager />
              </StreamCall>
            </StreamVideo>
          )}
        </div>
      </div>
    </>
  );
};
export default VideoCalls;
