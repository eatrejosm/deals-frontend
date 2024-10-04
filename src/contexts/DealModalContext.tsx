"use client";
import DealModal from "@/components/modals/DealModal";
import { Deal } from "@/utils/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type DealModalContextType = {
  showModal: (d?: {
    deal?: Deal;
    onClose?: (updated?: boolean) => void;
  }) => void;
  closeModal: (updated?: boolean) => void;
};

const defaultValue: DealModalContextType = {
  showModal: () => null,
  closeModal: () => null,
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
        showModal: ({ deal, onClose } = {}) => {
          setData(deal);
          setOnCloseFunc(onClose);
          setShow(true);
        },
        closeModal: () => setShow(false),
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
