"use client";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../Provider";
import { T } from "@/types/types";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const CreateMeetingsModal = dynamic(() => import("./CreateMeetings"), {
  ssr: false,
});
const StartMeetingModal = dynamic(() => import("./StartMeeting"), {
  ssr: false,
});
const JoinMeetingsModal = dynamic(() => import("./JoinMeetings"), {
  ssr: false,
});

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
            <StartMeetingModal
              key={modalState.type}
              modalState={modalState}
              setModalState={setModalState}
              idMeeting={uuid}
            />
          );
          break;
        case "Join Meeting for link":
          setCurrentModal(
            <JoinMeetingsModal
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
  useEffect(()=>setModalState({ open: false, type: "" }),[])

  return modalState?.open && modalState.type !== "Recordings"
    ? currentModal
    : null;
};
export default Modals;
