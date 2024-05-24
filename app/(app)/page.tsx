import Image from "next/image";
import Hero from "@/public/images/hero-background.png";
import AddMeeting from "@/public/icons/add-meeting.svg";
import JoinMeeting from "@/public/icons/join-meeting.svg";
import Schedule from "@/public/icons/schedule.svg";
import Recordings from "@/public/icons/recordings.svg";
import { LinksType } from "@/types/types";
import CurrentDate from "@/components/CurrentDate";
import CallModal from "@/components/Modals/CallModal";
import TodayData from "@/components/GetDataMeetings/TodayData";

export default function Home() {
  const createLink: LinksType = [
    {
      title: "New Meeting",
      descr: "Setup a new recording",
      color: "bg-[#FF742E]",
      icon: AddMeeting,
      typeModal: "Start Meeting",
    },
    {
      title: "Join Meeting",
      descr: "via invitation link",
      color: "bg-[#0E78F9]",
      icon: JoinMeeting,
      typeModal: "Join Meeting for link",
    },
    {
      title: "Schedule Meeting",
      descr: "Plan your meeting",
      color: "bg-[#830EF9]",
      icon: Schedule,
      typeModal: "Create Meeting",
    },
    {
      title: "View Recordings",
      descr: "Meeting recordings",
      color: "bg-[#F9A90E]",
      icon: Recordings,
      typeModal: "Recordings",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-20 xl:gap-5 w-full h-full relative">
        <div className="flex flex-col gap-7">
          <div className="relative h-[19rem] w-full rounded-xl overflow-hidden ">
            <Image
              src={Hero}
              quality={100}
              width={1500}
              height={1500}
              className="absolute top-0 w-full h-full left-0 object-cover"
              alt="hero"
            />
            <CurrentDate />
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 h-min-[16rem]">
            {createLink.map((l) => (
              <CallModal key={l.title} linkData={l} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-bold">Today’s Upcoming Meetings</h1>
          <TodayData />
        </div>
      </div>
    </>
  );
}
