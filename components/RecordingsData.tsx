"use client";
import { useUser } from "@clerk/nextjs";
import {
  Call,
  CallRecording,
  ListRecordingsResponse,
  useStreamVideoClient,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import Card from "./Card";
import Skeleton from "./Skeleton";

export const dynamic = "force-dynamic";

const RecordingsData = () => {
  const client = useStreamVideoClient();
  const { user, isLoaded } = useUser();
  const [recordings, setRecordings] = useState<CallRecording[]>();
  useEffect(() => {
    if (isLoaded && client) {
      const getRecords = async () => {
        const { calls } = await client?.queryCalls({
          sort: [{ field: "starts_at", direction: -1 }],
          filter_conditions: {
            $or: [
              { created_by_user_id: user?.id },
              { members: { $in: [user?.id] } },
            ],
          },
          limit: 100,
          watch: true,
        });

        const recordCall = await Promise.all(
          calls.map(async (r) => await r.queryRecordings())
        );
        setRecordings(
          recordCall
            .filter((c) => c.recordings.length > 0)
            .flatMap((r) => r.recordings)
        );
      };
      getRecords()
    }
  }, [client, isLoaded]);
  return (
    <>
      {recordings ? (
        <div className="grid grid-cols-2 gap-3">
          {recordings?.map((r) => (
            <Card key={r.filename} record={r} />
          ))}
        </div>
      ) : (
        <Skeleton />
      )}
    </>
  );
};

export default RecordingsData;
