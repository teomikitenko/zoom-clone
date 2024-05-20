"use client";
import Image from "next/image";
import UpcomingIcon from "@/public/icons/upcoming.svg";
import PrevIcon from "@/public/icons/previous.svg";
import RecordingsIcon from "@/public/icons/recordings.svg";
import NavigateCopyButtons from "@/components/Modals/NavigateCopyButtons";
import PlayCopyButtons from "./PlayCopyButtons";
import type { Meeting } from "@/types/types";
import { CallRecording } from "@stream-io/video-react-sdk";
import { usePathname } from "next/navigation";

const Card = ({
  record,
  meeting,
  userId,
}: {
  record?: CallRecording;
  meeting?: Meeting;
  userId?: string;
}) => {
  const path = usePathname();
  const type = path.split("/")[1];
  const currentIcon =
    type === "upcoming"
      ? UpcomingIcon
      : type === "recordings"
      ? RecordingsIcon
      : PrevIcon;
  const editFileName = (name: CallRecording) => {
    return name.filename.slice(0, 30);
  };
  const constructTime = (t: Date) => {
    return new Intl.DateTimeFormat("uk-UA", {
      timeStyle: "long",
    })
      .format(t)
      .split(" ")[0];
  };
  return (
    <div className="px-4 py-5 flex flex-col gap-2 bg-[#1C1F2E] rounded-lg">
      <Image src={currentIcon} width={25} height={25} alt="schedule-icon" />
      <p className="text-2xl font-bold text-ellipsis">
        {meeting ? meeting.meetingDescription : editFileName(record!)}
      </p>
      <div className="flex gap-3">
        <p className="text-md font-light">
          {meeting
            ? meeting.meetingDate.toDateString()
            : record!.start_time.split("T")[0]}
        </p>
        {meeting && (
          <p className="text-md font-light">
            {constructTime(meeting.meetingDate)}
          </p>
        )}
      </div>

      {meeting && userId && userId === meeting.user.userClerkId && (
        <NavigateCopyButtons id={meeting.meetingId} />
      )}
      {type === "recordings" && <PlayCopyButtons url={record?.url as string} />}
    </div>
  );
};

export default Card;
