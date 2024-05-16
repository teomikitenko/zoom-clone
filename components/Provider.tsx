"use client";
import React, { createContext, useEffect, useState } from "react";
import { ModalState, T } from "@/types/types";
import { StreamVideo, StreamVideoClient, TokenProvider, User } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";

export const ModalContext = createContext<T|null>(null);

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [modalState, setModalState] = useState<ModalState|undefined>();
  const [myClient, setMyClient] = useState<StreamVideoClient | undefined>(
    undefined
  );
  const { user: authUser, isLoaded } = useUser();
  
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
    <ModalContext.Provider value={{ modalState, setModalState}}>
      <StreamVideo client={myClient!}>
      {children}
      </StreamVideo>
    </ModalContext.Provider>
  );
};

export default Provider;
