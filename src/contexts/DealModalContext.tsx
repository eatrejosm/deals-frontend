"use client";
import DealModal from "@/components/modals/DealModal";
import { Deal } from "@/utils/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type DealModalContextType = {
  showModal: (deal?: Deal) => void;
  closeModal: (updated?: boolean) => void;
  onClose: (callback: (updated?: boolean) => void) => void;
};

const defaultValue: DealModalContextType = {
  showModal: () => null,
  closeModal: () => null,
  onClose: () => null,
};
export const DealModalContext = createContext(defaultValue);

export const DealModalProvider = (props: PropsWithChildren) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState<Deal | undefined>(undefined);
  const [onCloseFunc, setOnCloseFunc] = useState<Function | undefined>(
    undefined,
  );
  return (
    <DealModalContext.Provider
      value={{
        showModal: (deal) => {
          setData(deal);
          setShow(true);
        },
        closeModal: () => setShow(false),
        onClose: (callback) => {
          setOnCloseFunc(callback);
        },
      }}
    >
      {props.children}
      <DealModal
        show={show}
        onClose={(updated) => {
          setShow(false);
          onCloseFunc?.(updated);
        }}
      />
    </DealModalContext.Provider>
  );
};

export const uesDealModal = () => useContext(DealModalContext);
