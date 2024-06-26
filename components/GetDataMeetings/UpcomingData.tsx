import { upcomingMeetings } from "@/app/action";
import Card from "@/components/Card";
import { currentUser } from "@clerk/nextjs/server";

const UpcomingData = async () => {
  const meetings = await upcomingMeetings();
  const user = await currentUser();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      {meetings.length>0?meetings.map((m) => {
        return <Card key={m.meetingId} userId={user?.id} meeting={m} />;
      }):<p>No Upcoming Calls</p>}
    </div>
  );
};
export default UpcomingData;
