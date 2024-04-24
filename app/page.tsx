import Image from "next/image";
import Hero from "@/public/images/hero-background.png";
import AddMeeting from "@/public/icons/add-meeting.svg";
import JoinMeeting from "@/public/icons/join-meeting.svg";
import Schedule from "@/public/icons/schedule.svg";
import Recordings from "@/public/icons/recordings.svg";

export default function Home() {
  const createLink = [
    {
      title: "New Meeting",
      descr: "Setup a new recording",
      color: "bg-[#FF742E]",
      icon: AddMeeting,
    },
    {
      title: "Join Meeting",
      descr: "via invitation link",
      color: "bg-[#0E78F9]",
      icon: JoinMeeting,
    },
    {
      title: "Schedule Meeting",
      descr: "Plan your meeting",
      color: "bg-[#830EF9]",
      icon: Schedule,
    },
    {
      title: "View Recordings",
      descr: "Meeting recordings",
      color: "bg-[#F9A90E]",
      icon: Recordings,
    },
  ];
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col gap-7">
        <div className="relative h-[19rem] rounded-md overflow-hidden">
          <Image
            src={Hero}
            style={{
              objectFit: "cover",
            }}
            fill
            alt="hero"
          />
        </div>
        <div className="grid gap-3 grid-cols-4 h-[16rem]">
          {createLink.map((l) => (
            <div
              key={l.title}
              className={`${l.color} rounded-md flex flex-col p-5`}
            >
              <div className="w-full ">
               
                <div className="relative h-16 w-16   rounded-lg opacity-45  bg-white"></div>  {/* rework:need position absolute for block and icon */}
                <Image
                  className=""
                  src={l.icon}
                  width={36}
                  height={36}
                  alt="icon"
                />
              </div>
              <p>{l.title}</p>
              <p>{l.descr}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
