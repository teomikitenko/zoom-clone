import Card from "@/components/Card";
import { todayMeetings } from "@/app/action";
import { currentUser } from "@clerk/nextjs/server";

const TodayData = async () => {
    const meetings = await todayMeetings();
    const user = await currentUser();
    return (
      <div className="grid grid-cols-2 gap-3">
        {meetings.length>0?meetings.map((m) => {
          return <Card key={m.meetingId} userId={user?.id} meeting={m} />;
        }):<p>No Mettings</p>}
      </div>
    );
  };
  export default TodayData;