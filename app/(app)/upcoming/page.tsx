import Skeleton from "@/components/Skeleton";
import UpcomingData from "@/components/GetDataMeetings/UpcomingData";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

const Upcoming = () => {
  return (
    <div className="h-full flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Upcoming</h1>
      <Suspense fallback={<Skeleton />}>
        <UpcomingData />
      </Suspense>
    </div>
  );
};

export default Upcoming;
