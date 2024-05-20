import Image from "next/image";
import Hero from "@/public/images/hero-background.png";
import AddMeeting from "@/public/icons/add-meeting.svg";
import JoinMeeting from "@/public/icons/join-meeting.svg";
import Schedule from "@/public/icons/schedule.svg";
import Recordings from "@/public/icons/recordings.svg";
import { LinksType } from "@/types/types";
import CurrentDate from "@/components/CurrentDate";
import CallModal from "@/components/Modals/CallModal";

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
      <div className="flex flex-col w-full h-full relative">
        <div className="flex flex-col gap-7">
          <div className="relative h-[19rem] w-full ">
            <Image
              src={Hero}
              quality={100}
              priority
              width={1500}
              height={1500}
              className="absolute top-0 left-0 object-cover rounded-xl"
              alt="hero"
            />
            <CurrentDate />
          </div>
          <div className="grid gap-3 grid-cols-4 h-[16rem]">
            {createLink.map((l) => (
              <CallModal key={l.title} linkData={l} />
            ))}
          </div>
        </div>
        <h1 className="text-lg">Today’s Upcoming Meetings</h1>
      </div>
    </>
  );
}
