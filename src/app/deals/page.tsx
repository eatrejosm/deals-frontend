"use client";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import EditIcon from "@/components/icons/EditIcon";
import FilterIcon from "@/components/icons/FilterIcon";
import ImageIcon from "@/components/icons/ImageIcon";
import { uesDealModal } from "@/contexts/DealModalContext";
import axiosInstance from "@/utils/axios";
import { Deal } from "@/utils/types";
import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";

// const deals: Deal[] = [
//   {
//     address: {
//       street: "475 Spruce Drive",
//       city: "Pittsburgh",
//       state: "PA",
//       zipCode: "23592",
//     },
//     area: 100,
//     status: "In Progress",
//     people: 0,
//   },
//   {
//     address: {
//       street: "475 Spruce Drive",
//       city: "Pittsburgh",
//       state: "PA",
//       zipCode: "23592",
//     },
//     area: 100,
//     status: "In Progress",
//     people: 0,
//   },
//   {
//     address: {
//       street: "475 Spruce Drive",
//       city: "Pittsburgh",
//       state: "PA",
//       zipCode: "23592",
//     },
//     area: 100,
//     status: "In Progress",
//     people: 0,
//   },
//   {
//     address: {
//       street: "475 Spruce Drive",
//       city: "Pittsburgh",
//       state: "PA",
//       zipCode: "23592",
//     },
//     area: 100,
//     status: "In Progress",
//     people: 0,
//   },
//   {
//     address: {
//       street: "475 Spruce Drive",
//       city: "Pittsburgh",
//       state: "PA",
//       zipCode: "23592",
//     },
//     area: 100,
//     status: "In Progress",
//     people: 0,
//   },
//   {
//     address: {
//       street: "475 Spruce Drive",
//       city: "Pittsburgh",
//       state: "PA",
//       zipCode: "23592",
//     },
//     area: 100,
//     status: "In Progress",
//     people: 0,
//   },
// ];
export default function DealsPage() {
  const [loading, setLoading] = useState(false);
  const { onClose } = uesDealModal();
  const [deals, setDeals] = useState<Deal[]>([]);
  async function loadData() {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get("/deals");
    } catch (err) {}
    setLoading(false);
  }
  useEffect(() => {
    onClose((updated) => {
      console.log("closed modal", updated);
      if (updated) {
        loadData();
      }
    });
  }, [onClose]);
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="mb-4 text-lg font-semibold">Total: 136 deals</h2>
        <div className="mb-4 flex items-center gap-4">
          <Button color={"light"} pill size={"lg"}>
            Sort by: Date Created
            <ChevronDownIcon className="ml-3" />
          </Button>

          <Button pill size={"lg"} color={"light"}>
            Filter
            <FilterIcon className="ml-3" />
          </Button>
        </div>
      </div>

      <div className="">
        <table className="min-w-full rounded-lg">
          <thead>
            <tr className="border-b text-left">
              <th className="px-4 py-2">
                <ImageIcon />
              </th>
              <th className="text-normal px-4 py-2 text-secondary">Name</th>
              <th className="text-normal px-4 py-2 text-secondary">Area</th>
              <th className="text-normal px-4 py-2 text-secondary">
                Appointment Date
              </th>
              <th className="text-normal px-4 py-2 text-secondary">Price</th>
              <th className="text-normal px-4 py-2 text-secondary">Status</th>
              <th className="text-normal px-4 py-2 text-secondary">Edit</th>
            </tr>
          </thead>
          <tbody>
            {deals.map((deal, index) => (
              <tr key={index} className="border-b">
                <td className="w-[60px] py-4" align="center">
                  <img
                    src="/assets/images/room-img.png"
                    alt=""
                    className="h-10 w-10 rounded-full"
                  />
                </td>
                <td className="px-4 py-2">
                  {deal.address.street}, {deal.address.city},{" "}
                  {deal.address.state} {deal.address.zipCode}
                </td>
                <td className="px-4 py-2">{deal.area}M²</td>
                <td className="px-4 py-2">Nov 14, 2021 07:00 AM</td>
                <td className="px-4 py-2">$6000</td>
                <td className="px-4 py-2">
                  <span
                    className={`flex h-[40px] w-[120px] items-center justify-center rounded-full bg-[#ECECFE] text-xs text-primary`}
                  >
                    {deal.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="text-indigo-600 hover:underline">
                    <EditIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-center p-5">
        {loading ? (
          <Spinner size={"lg"} color={"success"} />
        ) : (
          <Button pill color={"light"} size={"lg"}>
            Load More
          </Button>
        )}
      </div>
      <div className="mt-6 flex justify-center"></div>
    </div>
  );
}
