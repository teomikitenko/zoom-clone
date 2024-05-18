"use client";
import { useUser } from "@clerk/nextjs";
import {
  ListRecordingsResponse,
  useStreamVideoClient,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import Card from "./Card";
import Skeleton from "./Skeleton";
export const dynamic = 'force-dynamic'

const RecordingsData = () => {
  const client = useStreamVideoClient();
  const { user, isLoaded } = useUser();
  const [recordings, setRecordings] = useState<ListRecordingsResponse>();
  useEffect(() => {
    if (client&&isLoaded) {
      const getRec = async () => {
        const getRecordings = async () => {
          const call = client!.call("default", user?.id as string);
          const recordCalls = await call.queryRecordings();
          setRecordings(recordCalls);
        };
        await getRecordings();
      };
      getRec();
    }
    return () => {
      client?.disconnectUser;
    };
  }, [client]);
  return (
    <>
      {recordings ? (
        <div className="grid grid-cols-2 gap-3">
          {recordings?.recordings.map((r) => (
            <Card key={r.filename} record={r} />
          ))}
        </div>
      ) : (
        <Skeleton/>
      )}
    </>
  );
};

export default RecordingsData;


