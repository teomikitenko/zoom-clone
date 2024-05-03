"use client";
import React, { createContext, useState } from "react";
import { ModalState, T } from "@/types/types";

export const ModalContext = createContext<T|null>(null);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalState, setModalState] = useState<ModalState|undefined>();
  return (
    <ModalContext.Provider value={{ modalState, setModalState}}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
