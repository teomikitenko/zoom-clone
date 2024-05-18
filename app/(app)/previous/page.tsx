
import { prevMeetings } from "@/app/action"
import Card from "@/components/Card"
import { Suspense } from "react"
import Skeleton from "@/components/Skeleton"

export const dynamic = 'force-dynamic'

const Previous = () => {
  return (
    <div className="h-full flex flex-col gap-5">
    <h1 className="text-3xl font-bold">Previous</h1>
     <Suspense fallback={<Skeleton/>}>
    <PreviousData/>
    </Suspense> 
  </div>
  )
}

export default Previous

const PreviousData = async()=>{
  const meetings = await prevMeetings() 
  return (
    <div className="grid grid-cols-2 gap-3">
      {meetings.map((m) => {
        return <Card key={m.meetingId} meeting={m} />;
      })}
    </div>
  )
}