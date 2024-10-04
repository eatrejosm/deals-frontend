import Customers from "@/components/dashboard/Customers";
import NextAppointment from "@/components/dashboard/NextAppointment";
import RecentDeals from "@/components/dashboard/RecentDeals";
import Stats from "@/components/dashboard/Stats";
import TasksToDo from "@/components/dashboard/TasksToDo";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
      {/* Left Sidebar */}
      <div className="col-span-1 space-y-6">
        <NextAppointment />
        <Stats />
      </div>

      {/* Middle Section */}
      <div className="col-span-1 space-y-6 lg:col-span-2">
        <RecentDeals />
      </div>

      {/* Right Sidebar */}
      <div className="col-span-1 space-y-6 lg:col-span-2">
        <Customers />
        <TasksToDo />
      </div>
    </div>
  );
}
