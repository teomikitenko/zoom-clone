import Image from "next/image";
import UpcomingIcon from "@/public/icons/upcoming.svg";
import PrevIcon from "@/public/icons/previous.svg";
import NavigateCopyButtons from "@/components/Modals/NavigateCopyButtons";
import type { Meeting } from "@/types/types";

const CardMeeting = async ({
  meeting,
  type,
  userId
}: {
  type: string;
  meeting: Meeting;
  userId?:string
}) => {
  const currentIcon = type === "upcoming" ? UpcomingIcon : PrevIcon;
  
  return (
    <div
      key={meeting.id}
      className="px-4 py-5 flex flex-col gap-2 bg-[#1C1F2E] rounded-lg"
    >
      <Image src={currentIcon} width={25} height={25} alt="schedule-icon" />
      <p className="text-2xl font-bold">{meeting.meetingDescription}</p>
      <p className="text-md font-light">{meeting.meetingDate.toDateString()}</p>
      {userId && userId === meeting.user.userClerkId && type === "upcoming" && (
        <NavigateCopyButtons id={meeting.meetingId} />
      )}
    </div>
  );
};

export default CardMeeting;
