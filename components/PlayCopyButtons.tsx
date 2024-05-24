'use client'
import CopyIcon from "@/public/icons/copy.svg";
import Image from "next/image";
import Link from "next/link";
import PlayIcon from "@/public/icons/play.svg";

const PlayCopyButtons = ({ url }: { url: string }) => {
  const copy = async () => {
    await navigator.clipboard.writeText(url);
  };
  return (
    <div className="w-full flex justify-end gap-2">
      <Link
        href={url}
        className="bg-buttons rounded-md py-1 px-4 flex items-center gap-2"
      >
        <Image src={PlayIcon} width={13} height={13} alt="play-icon" />
        <p className="text-md">Play</p>
      </Link>

      <button
        onClick={copy}
        className="p-1 px-4 rounded-md bg-input flex items-center gap-2"
      >
        <Image src={CopyIcon} width={16} height={16} alt="copy-icon" />
        <p className="text-slate-300 text-md">Copy In</p>
      </button>
    </div>
  );
};

export default PlayCopyButtons;
