"use client";

import axiosInstance from "@/utils/axios";
import { Address, Deal } from "@/utils/types";
import {
  Button,
  Label,
  Modal,
  Select,
  Spinner,
  TextInput,
} from "flowbite-react";
import Image from "next/image";
import { useState } from "react";

type Props = {
  show: boolean;
  onClose: (updated?: boolean) => void;
};
const defaultData: Deal = {
  address: {
    street: "",
    city: "",
    state: "",
    zipCode: "",
  },
  area: 0,
  people: 0,
  status: "In Progress",
};
const DealModal: React.FC<Props> = ({ show, onClose }) => {
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState<Deal>(defaultData);
  const onUpdateAddress = (address: Partial<Address>) => {
    setData({
      ...data,
      address: {
        ...data.address,
        ...address,
      },
    });
  };
  const onUpdateData = (d: Partial<Deal>) => {
    setData({
      ...data,
      ...d,
    });
  };
  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await axiosInstance.post("/deals", data);
      onClose(true);
    } catch (err) {}
    setSubmitting(false);
  };
  return (
    <Modal show={show} onClose={() => onClose()} position="center">
      <Modal.Header>Add New Deal</Modal.Header>
      <div className="">
        <div className="flex justify-between bg-[#EEF6FB] px-7 py-4">
          <div className="flex items-center gap-3">
            <Image
              src={"/assets/images/user.png"}
              width={44}
              height={44}
              alt=""
            />
            <div>
              <p className="text-secondary text-sm">Customer</p>
              <p className="font-bold">Deanna Annis</p>
            </div>
          </div>
          <Button pill color={"light"}>
            Change Customer
          </Button>
        </div>
        <div className="flex flex-col gap-5 px-7 py-5">
          <div>
            <Label className="mb-3 block">Room Images</Label>
            <button className="text-secondary h-[50px] w-[75px] rounded-lg border border-[#EAEEF4] bg-[#F6FAFD]">
              ADD
            </button>
          </div>
          <div>
            <Label className="mb-3 block">Address</Label>
            <TextInput
              sizing={"lg"}
              placeholder="Street Address"
              className="mb-4"
              value={data.address.street}
              onChange={(e) => onUpdateAddress({ street: e.target.value })}
            />
            <div className="grid grid-cols-12 gap-4">
              <TextInput
                sizing={"lg"}
                className="col-span-5"
                placeholder="City"
                value={data.address.city}
                onChange={(e) => onUpdateAddress({ city: e.target.value })}
              />
              <TextInput
                sizing={"lg"}
                className="col-span-4"
                placeholder="State / Province"
                value={data.address.state}
                onChange={(e) => onUpdateAddress({ state: e.target.value })}
              />
              <TextInput
                sizing={"lg"}
                className="col-span-3"
                placeholder="Zip Code"
                value={data.address.zipCode}
                onChange={(e) => onUpdateAddress({ zipCode: e.target.value })}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Label>Room Area (m2)</Label>
              <TextInput
                className="w-[100px]"
                sizing={"lg"}
                value={data.area}
                onChange={(e) =>
                  onUpdateData({ area: parseInt(e.target.value || "0") })
                }
                type="number"
              />
            </div>
            <div className="flex items-center gap-3">
              <Label># of People</Label>
              <TextInput
                className="w-[100px]"
                sizing={"lg"}
                value={data.people}
                onChange={(e) =>
                  onUpdateData({ people: parseInt(e.target.value || "0") })
                }
                type="number"
              />
            </div>
          </div>

          <div className="flex justify-between gap-3">
            <div className="flex items-center gap-3">
              <Label>Progress</Label>
              <Select
                value={data.status}
                onChange={(e) => onUpdateData({ status: e.target.value })}
              >
                <option value="In Progress">In Progress</option>
                <option value="Closed">Closed</option>
              </Select>
            </div>
            <div className="flex gap-4">
              <Button
                color={"light"}
                size="lg"
                onClick={() => onClose(false)}
                pill
              >
                Cancel
              </Button>
              <Button
                color="primary"
                size="lg"
                onClick={() => handleSubmit()}
                pill
                disabled={submitting}
              >
                {submitting && (
                  <Spinner size={"sm"} color={"success"} className="mr-2" />
                )}
                Save Deal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DealModal;
