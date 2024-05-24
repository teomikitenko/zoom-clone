import { prevMeetings } from "@/app/action";
import Card from "@/components/Card";
const PreviousData = async () => {
  const meetings = await prevMeetings();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      {meetings ? (
        meetings.map((m) => {
          return <Card key={m.meetingId} meeting={m} />;
        })
      ) : (
        <p>No Previous Calls</p>
      )}
    </div>
  );
};
export default PreviousData;
