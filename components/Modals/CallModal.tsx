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
      className={`${linkData.color} rounded-xl cursor-pointer flex flex-col gap-4 justify-between p-5`}
    >
      <div className="w-12 h-12 xl:w-16 xl:h-16 flex items-center justify-center relative">
        <div className="absolute top-0 left-0 h-full w-full rounded-lg  opacity-35 bg-white"></div>
        <Image
          className="h-8 xl:h-10 "
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
