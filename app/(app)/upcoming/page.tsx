import { upcomingMeetings } from "@/app/action";
import CardMeeting from "@/components/CardMeeting";
import { currentUser } from "@clerk/nextjs/server";
import { headers } from "next/headers";

const Upcoming = async () => {
  const meetings = await upcomingMeetings();
  const path = headers().get('x-path') 
  const user = await currentUser();
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Upcoming</h1>
      <div className="grid grid-cols-2 gap-3">
        {meetings.map((m) => {
          /* @ts-expect-error Server Component */
          return <CardMeeting key={m.meetingId} userId = {user?.id} type={path} meeting={m} />;
        })}
      </div>
    </div>
  );
};

export default Upcoming;
