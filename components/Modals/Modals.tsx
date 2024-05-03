"use client";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../Provider";
import { T } from "@/types/types";
import CreateMeetingsModal from "./CreateMeetings";
import StartMeeting from "./StartMeeting";
import JoinMeetings from "./JoinMeetings";
import { useRouter } from "next/navigation";

const Modals = () => {
  const { modalState, setModalState } = useContext(
    ModalContext as React.Context<T>
  );
  const router = useRouter();
  const [currentModal, setCurrentModal] = useState<JSX.Element | null>(null);
  useEffect(() => {
    if (modalState?.open) {
      switch (modalState?.type) {
        case "Create Meeting":
          setCurrentModal(
            <CreateMeetingsModal
              key={modalState.type}
              modalState={modalState}
              setModalState={setModalState}
            />
          );
          break;
        case "Start Meeting":
          let uuid = crypto.randomUUID();
          setCurrentModal(
            <StartMeeting
              key={modalState.type}
              modalState={modalState}
              setModalState={setModalState}
              idMeeting={uuid}
            />
          );
          break;
        case "Join Meeting for link":
          setCurrentModal(
            <JoinMeetings
              key={modalState.type}
              modalState={modalState}
              setModalState={setModalState}
            />
          );
          break;
        case "Recordings": {
          setModalState({ open: false, type: "" });
          router.push("/recordings");
          break;
        }
      }
    }
  }, [modalState?.open]);

  return modalState?.open && modalState.type !== "Recordings"
    ? currentModal
    : null;
};
export default Modals;
