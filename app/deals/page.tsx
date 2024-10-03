import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import FilterIcon from "@/components/icons/FilterIcon";
import { Button } from "flowbite-react";

const deals = [
  {
    name: "475 Spruce Drive, Pittsburgh, PA 23592",
    area: "100M²",
    date: "Nov 14, 2021 07:00 AM",
    price: "$6000",
    status: "IN PROGRESS",
  },
  // Add more deals...
];
export default function DealsPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="mb-4 text-lg font-semibold">Total: 136 deals</h2>

        {/* Sorting and Filter Options */}
        <div className="mb-4 flex items-center ">
          <Button color={"light"} pill size={"lg"}>
            Sort by: Date Created
            <ChevronDownIcon />
          </Button>

          <Button pill size={"lg"} color={"light"}>
            Filter
            <FilterIcon />
          </Button>
        </div>
      </div>

      <div className="">
        <table className="min-w-full rounded-lg bg-white">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Area</th>
              <th className="px-4 py-2">Appointment Date</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {deals.map((deal, index) => (
              <tr key={index} className="border-t">
                <td className="flex items-center px-4 py-2">
                  <img
                    src="/assets/images/room-img.png"
                    alt=""
                    className="mr-3 h-10 w-10 rounded-full"
                  />
                  {deal.name}
                </td>
                <td className="px-4 py-2">{deal.area}</td>
                <td className="px-4 py-2">{deal.date}</td>
                <td className="px-4 py-2">{deal.price}</td>
                <td className="px-4 py-2">
                  <span
                    className={`rounded-full px-3 py-1 text-sm text-white ${
                      deal.status === "IN PROGRESS"
                        ? "bg-indigo-500"
                        : "bg-gray-300"
                    }`}
                  >
                    {deal.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="text-indigo-600 hover:underline">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 20h9" />
                      <path d="M3 4h18" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex justify-center">
        <button className="rounded-lg border border-gray-300 bg-white px-4 py-2">
          Load More
        </button>
      </div>
    </div>
  );
}
