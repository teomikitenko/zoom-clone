"use client";

import { useContext } from "react";
import Image from "next/image";

import { ModalContext } from "../Provider";
import cn from "@lib/utils";
import { LinkData } from "@/types/types";

type Props = { linkData: LinkData };

const CallModal = ({ linkData }: Props) => {
  // "useContext" hook returns context. In "Provider.tsx" file you set "ModalContext" as "T | null".
  // So your context is possibly null. When you cast "as React.Context<T>" you tell to TS "trust me TS, it is a T type". But it is a lie.
  const modalContext = useContext(ModalContext);

  // This callback is opening modal, not setting it. And it does not need any parameter. You already have everything needed.
  const openModal = () => {
    // You can't get setModalState before you are sure it is exist
    if (!modalContext) return;

    const { setModalState } = modalContext;
    
    setModalState({ open: true, type: linkData.typeModal });
  };
  
  return (
    // When we click something and it is not a link, than it should be a button
    <button
      {/* You can't directly inject variables to Tailwind classNames. It does not work. Use "cn" function. */}
      className={cn("rounded-xl cursor-pointer flex flex-col gap-4 justify-between p-5", linkData.color)}
      onClick={openModal}
      
    >
      <div className="w-12 h-12 xl:w-16 xl:h-16 flex items-center justify-center relative">
        <div className="absolute top-0 left-0 h-full w-full rounded-lg opacity-35 bg-white" />
        
        <Image
          className="h-8 xl:h-10"
          {/* Why icon is any? You know it is a string. */}
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
    </button>
  );
};

export default CallModal;
