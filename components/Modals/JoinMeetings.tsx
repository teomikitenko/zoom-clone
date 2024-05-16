import React, { Dispatch, SetStateAction, useState } from "react";
import type { ModalState } from "@/types/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

const JoinMeetings = ({
  modalState,
  setModalState,
}: {
  modalState: ModalState;
  setModalState: Dispatch<SetStateAction<ModalState | undefined>>;
}) => {
  const router = useRouter();
  const [mettingUrl, setMettingUrl] = useState("");
  const [validUrl, setValidUrl] = useState(true);
  const redirectToStream = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valid = isValidUrl(mettingUrl);
    if (valid) {
      setValidUrl(true);
      const searchParams = new URL(mettingUrl).searchParams.get("id");
      router.push(`/call-room?id=${searchParams}`);
    } else setValidUrl(false);
  };
  const isValidUrl = (url: string) => {
    try {
      const validUrl = new URL(url);
      return (
        Boolean(validUrl) &&
        validUrl.origin === process.env.NEXT_PUBLIC_MY_DEPLOYING_URL &&
        validUrl.searchParams.get("id")
      );
    } catch (error) {
      return false;
    }
  };
  return (
    <Dialog
      open={modalState.open}
      onOpenChange={(open) => setModalState({ open, type: "" })}
    >
      <DialogOverlay>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">
              Type the link here
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={redirectToStream} className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-1 ">
            <Input
              value={mettingUrl}
              onChange={(e) => setMettingUrl(e.target.value)}
            />
           {!validUrl&&<p className="text-red-500 text-sm text-right px-4">Not valid url</p>}
            </div>
           
            <button
              type="submit"
              className="w-full bg-buttons hover:bg-input hover:rounded-sm px-4 py-2"
            >
              <p>Join Meeting</p>
            </button>
          </form>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default JoinMeetings;
