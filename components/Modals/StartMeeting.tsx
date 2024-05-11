import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "../ui/dialog";
import React, { Dispatch, SetStateAction } from "react";
import { ModalState } from "@/types/types";
import Link from "next/link";

const StartMeeting = ({
  modalState,
  setModalState,
  idMeeting,
}: {
  idMeeting: string;
  modalState: ModalState;
  setModalState: Dispatch<SetStateAction<ModalState | undefined>>;
}) => {
  return (
    <Dialog
      open={modalState.open}
      onOpenChange={(open) => setModalState({ open, type: "" })}
    >
      <DialogOverlay className="">
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">
              Start an Instant Meeting
            </DialogTitle>
          </DialogHeader>
          <Link href={`/call-room?id=${idMeeting}`}>
            <button className="w-full bg-buttons hover:bg-input hover: rounded-sm px-4 py-2">
              <p>Start Meeting</p>
            </button>
          </Link>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default StartMeeting;
