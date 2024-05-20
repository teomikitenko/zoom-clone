import { Suspense } from "react"
import Skeleton from "@/components/Skeleton"
import PreviousData from "@/components/GetDataMeetings/PreviousData"

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

