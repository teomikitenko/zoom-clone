
export const dynamic = 'force-dynamic'
import { headers } from "next/headers"
import { prevMeetings } from "@/app/action"
import CardMeeting from "@/components/CardMeeting"


const Previous = async() => {
  const meetings = await prevMeetings() 
  const path = headers().get('x-path')
  return (
    <div className="flex flex-col gap-5">
    <h1 className="text-3xl font-bold">Previous</h1>
    <div className="grid grid-cols-2 gap-3">
      {meetings.map((m) => {
        /* @ts-expect-error Server Component */
        return <CardMeeting key={m.meetingId} type={path} meeting={m} />;
      })}
    </div>
  </div>
  )
}

export default Previous