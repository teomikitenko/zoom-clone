"use client";
import CopyIcon from "@/public/icons/copy.svg";
import Image from "next/image";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import clsx from "clsx";

const NavigateCopyButtons = ({ id, type }: { id: string; type?: string }) => {
  const { toast } = useToast();
  const router = useRouter();
  const copy = async () => {
    const link = `${process.env.NEXT_PUBLIC_MY_DEPLOYING_URL}/call-room?id=${id}`;
    await navigator.clipboard.writeText(link);
    toast({
      title: "Copied",
      variant: "succefull",
    });
  };
  const startMeeting = () => {
    router.push(`/call-room?id=${id}`);
  };
  const startButtonStyle = clsx({
    "bg-buttons rounded-md py-1 px-4": type === "recordings",
    "bg-buttons rounded-md py-2 px-6": type === "personal-room",
  });
  const copyButtonStyle = clsx({
    "p-1 px-4 rounded-md bg-input flex items-center gap-2":
      type === "recordings",
    "p-2 px-6 rounded-md bg-input flex items-center ": type === "personal-room",
  });
  return (
    <div
      className={`w-full flex ${
        type === "recordings" ? "justify-end" : "justify-start"
      } gap-2`}
    >
      <button onClick={startMeeting} className={`${startButtonStyle}`}>
        <p className="text-sm">
          {type === "recordings" ? "Start" : "Start Meeting"}{" "}
        </p>
      </button>
      <button
        onClick={copy}
        className="p-1 px-4 rounded-md bg-input flex items-center gap-2"
      >
        {type === "recordings" && (
          <Image src={CopyIcon} width={14} height={14} alt="copy-icon" />
        )}
        <p className="text-slate-300 text-sm">
          {type === "recordings" ? "Copy In" : "Copy Invitiation"}
        </p>
      </button>
    </div>
  );
};

export default NavigateCopyButtons;
