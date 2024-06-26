import { MyDatePicker } from "../DatePicker";
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
    formData.append("date", date?.toISOString() as string);
     await createMeeting(formData);
    setModalState({ open: false, type: "" });
  };
  return (
    <Dialog
      open={modalState?.open}
      onOpenChange={(open) => setModalState({ open, type: "" })}
    >
      <DialogOverlay >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl text-left font-bold">
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
            <div className="flex flex-col">
              <p className="text-xs text-slate-300">Select Date & Time</p>
              <MyDatePicker date={date} setDate={setDate} />
            </div>
            <button
              type="submit"
              className="w-full bg-buttons rounded-sm px-4 py-2 "
            >
              <p className="text-slate-100 ">Create Meeting</p>
            </button>
          </form>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default CreateMeetingsModal;
