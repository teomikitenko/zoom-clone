import { DatePicker } from "../DatePicker";
import type { ModalState } from "@/types/types";
import { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../ui/input";
import { createMeeting } from "@/app/action";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogHeader,
} from "../ui/dialog";

const CreateMeetingsModal = ({
  modalState,
  setModalState,
}: {
  modalState: ModalState;
  setModalState: Dispatch<SetStateAction<ModalState | undefined>>;
}) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const addMeeting = async (formData: FormData, date: Date | undefined) => {
    formData.append("date", date?.toDateString() as string);
    await createMeeting(formData);
    setModalState({ open: false, type: "" });
  };
  return (
    <Dialog
      open={modalState?.open}
      onOpenChange={(open) => setModalState({ open, type: "" })}
    >
      <DialogOverlay className="h-full fixed w-full top-0 z-30  flex items-center justify-center">
        <DialogContent className=" flex flex-col rounded-lg px-6 py-5 gap-4 w-[35%]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Create Meeting
            </DialogTitle>
          </DialogHeader>
          <form
            action={(e) => addMeeting(e, date)}
            className="flex flex-col gap-4"
          >
            <label className="text-xs text-slate-300">
              Add a description
              <Input className="mt-2" name="description" type="text" />
            </label>
            <label className="text-xs text-slate-300">
              Select Date & Time
              <DatePicker date={date} setDate={setDate} />
            </label>
            <button className="w-full bg-buttons rounded-sm px-4 py-2 ">
              <p className="text-slate-100 ">Create Meeting</p>
            </button>
          </form>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default CreateMeetingsModal;
