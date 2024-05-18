"use client";
import { useUser } from "@clerk/nextjs";
import {
  ListRecordingsResponse,
  useStreamVideoClient,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

const RecordingsData = () => {
  const client = useStreamVideoClient();
  const { user, isLoaded } = useUser();
  const [recordings, setRecordings] = useState<ListRecordingsResponse>();
  useEffect(() => {
    if (isLoaded) {
      const getRecordings = async () => {
        const call = client!.call("default", user?.id as string);
        const recordCalls = await call.queryRecordings();
        setRecordings(recordCalls);
      };
      getRecordings();
    }
    return () => {
      client?.disconnectUser;
    };
  }, [isLoaded]);
  return (
    <div className="flex flex-col">
      {recordings?.recordings.map((r) => (
        <>
          <p>{r.filename}</p>
          <video src={r.url} width={250} height={250} controls >
            video don`t avialable
          </video>
        </>
      ))}
    </div>
  );
};

export default RecordingsData;
