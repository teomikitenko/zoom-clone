"use client";
import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
  Call,
} from "@stream-io/video-react-sdk";
import MyUiLayout from "./MyUiLayout";
import { FormEvent, useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY as string;

type UserInfo = {
  userId: string;
  callId: string;
  user: User;
  token:string
};
const MyCall = () => {
  const [myCall, setMyCall] = useState<Call | undefined>(undefined);
  const [myClient, setMyClient] = useState<StreamVideoClient | undefined>(
    undefined
  );
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>();
  const startCalling = async () => {
    console.log(userInfo)
     const call = myClient!.call("default", 'n7OzCV5Tolxt')//userInfo?.callId as string );
    await call.join({ create: true });
    setMyCall(call); 
  };
  const generateToken = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     const formdata = new FormData(e.currentTarget);
    const res = await fetch("api/generate_token", {
      method: "POST",
      body: formdata,
    });
    const { token, userId, callId } = await res.json(); 
    const user: User = {
      id: userId,
      name: 'yohan',
      image: "https://getstream.io/random_svg/?id=oliver&name=Oliver",
    };
    setUserInfo({ userId, callId, user,token });
  };
  useEffect(() => {
    if (userInfo) {
      const client = new StreamVideoClient({
        apiKey,
        user:userInfo.user, 
        token:userInfo.token, 
      });
      setMyClient(client);
    }
  }, [userInfo]);
  return (
    <>
      <form id="myForm" onSubmit={generateToken}>
        <input name="user_id" type="text" />
        <button type="submit">Send Id</button>
      </form>
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
          { userInfo && <button onClick={startCalling}>Start Call</button>}
          <button onClick={() => myCall?.endCall()}>End Call</button>
        </div>
      </div>
    </>
  );
};
export default MyCall;
//https://getstream.io/video/demos/join/n7OzCV5Tolxt?user_id=Natasi_Daala&id=n7OzCV5Tolxt