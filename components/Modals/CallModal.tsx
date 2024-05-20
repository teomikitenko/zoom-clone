"use client";
import Image from "next/image";
import { useContext } from "react";
import { ModalContext } from "../Provider";
import { T } from "@/types/types";
import { LinkData } from "@/types/types";

const CallModal = ({ linkData }: { linkData: LinkData }) => {
  const { setModalState } = useContext(ModalContext as React.Context<T>);
  const setModal = (type: string) => {
    setModalState({
      open: true,
      type,
    });
  };
  return (
    <div
      onClick={() => setModal(linkData.typeModal)}
      className={`${linkData.color} rounded-md cursor-pointer flex flex-col justify-between p-5`}
    >
      <div className="w-full relative">
        <div className="w-16 rounded-lg h-16 opacity-35 bg-white"></div>
        <Image
          className="absolute top-3 left-3 cursor-pointer"
          src={linkData.icon}
          width={38}
          height={38}
          alt="icon"
        />
      </div>
      <div>
        <p className="text-lg font-medium">{linkData.title}</p>
        <p className="text-sm">{linkData.descr}</p>
      </div>
    </div>
  );
};

export default CallModal;
