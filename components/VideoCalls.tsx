"use client";
import {
  CallingState,
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  useCall,
  useCallStateHooks,
  User,
  Call,
} from "@stream-io/video-react-sdk";
import MyUiLayout from "./MyUiLayout";
import { useState } from "react";

const apiKey = "mmhfdzb5evj2"; // take my key
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiSmFuZ29fRmV0dCIsImlzcyI6Imh0dHBzOi8vcHJvbnRvLmdldHN0cmVhbS5pbyIsInN1YiI6InVzZXIvSmFuZ29fRmV0dCIsImlhdCI6MTcxMzQzMjgxNiwiZXhwIjoxNzE0MDM3NjIxfQ.Wr2er7B-jcGs0QG_ACy8eFZgkpBIm7eSfciKdPnOCjk"; // generate token on backend
const userId = "Jango_Fett"; // the user id can be found in the "Credentials" section
const callId =  "CXBVtOOL88TW"

const user: User = {
  id: userId,
  name: "Yevhenii",
  image: "https://getstream.io/random_svg/?id=oliver&name=Oliver",
};

2;
const MyCall = () => {
  const [user, setUser] = useState<User>({
    id: userId,
    name: "Yevhenii",
    image: "https://getstream.io/random_svg/?id=oliver&name=Oliver",
  });
  const [myCall, setMyCall] = useState<Call | undefined>(undefined);
  const [myClient, setMyClient] = useState(
    new StreamVideoClient({ apiKey, user, token })
  );
  const startCalling = async () => {
    const call = myClient.call("default", callId);
    await call.join({ create: true });
    setMyCall(call);
  };
  return (
    <>
    <div className="w-full h-full flex flex-col gap-5">
      <div>
        {myCall && (
          <StreamVideo client={myClient}>
            <StreamCall call={myCall}>
              <MyUiLayout />
            </StreamCall>
          </StreamVideo>
        )}
        </div>
        
        <div className="flex gap-4">
          <button onClick={startCalling}>Start Call</button>
          <button onClick={() => myCall?.endCall()}>End Call</button>
        </div>
      </div>
    </>
  );
};
export default MyCall;
