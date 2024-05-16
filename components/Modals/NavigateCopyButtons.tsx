"use client";
import CopyIcon from "@/public/icons/copy.svg";
import Image from "next/image";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

const NavigateCopyButtons = ({ id }: { id: string }) => {
  const { toast } = useToast();
  const router = useRouter()
  const copy = async () => {
    const link = `${process.env.NEXT_PUBLIC_MY_DEPLOYING_URL}/call-room?id=${id}`
    await navigator.clipboard.writeText(link);
    toast({
      title: "Copied",
      variant:"succefull"
    });
  };
  const startMeeting = ()=>{
    router.push(`/call-room?id=${id}`)
  }
  return (
    <div className="w-full flex justify-end gap-2">
      <button onClick={startMeeting} className="bg-buttons rounded-md py-1 px-4">
        <p className="text-sm">Start</p>
      </button>
      <button
        onClick={copy}
        className="p-1 px-4 rounded-md bg-input flex items-center gap-2"
      >
        <Image src={CopyIcon} width={14} height={14} alt="copy-icon" />
        <p className="text-slate-300 text-sm">Copy In</p>
      </button>
    </div>
  );
};

export default NavigateCopyButtons;
