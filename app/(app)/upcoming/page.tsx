import { upcomingMeetings } from "@/app/action";
import Card from "@/components/Card";
import Skeleton from "@/components/Skeleton";
import { currentUser } from "@clerk/nextjs/server";
import { Suspense } from "react";

export const dynamic = 'force-dynamic'

const Upcoming =() => {
  return (
    <div className="h-full flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Upcoming</h1>
     <Suspense fallback={<Skeleton/>}>
     <UpcomingData/>
     </Suspense>
    </div>
  );
};

export default Upcoming;

const UpcomingData = async()=>{
  const meetings = await upcomingMeetings();
  const user = await currentUser();
  return(
    <div className="grid grid-cols-2 gap-3">
    {meetings.map((m) => {
      return <Card key={m.meetingId} userId = {user?.id} meeting={m} />;
    })}
  </div>
  )
}
