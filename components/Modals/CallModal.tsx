"use client";
import Image from "next/image";
import { useContext } from "react";
import { ModalContext } from "../Provider";
import { T } from "@/types/types";

const CallModal = ({ icon, typeModal }: { icon: any; typeModal: string }) => {
  const { setModalState } = useContext(
    ModalContext as React.Context<T>
  );
  const setModal = (type: string) => {
    setModalState({
      open: true,
      type,
    });
  };
  return (
    <Image
      onClick={() => setModal(typeModal)}
      className="absolute top-3 left-3 cursor-pointer"
      src={icon}
      width={38}
      height={38}
      alt="icon"
    />
  );
};

export default CallModal;
