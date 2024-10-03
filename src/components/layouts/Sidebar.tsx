"use client";
import appRoutes from "@/src/config/appRoutes";
import DashboardIcon from "../icons/DashboardIcon";
import DealsIcon from "../icons/DealsIcon";
import UsersIcon from "../icons/UsersIcon";
import ListIcon from "../icons/ListIcon";
import CalendarIcon from "../icons/CalendarIcon";
import NotificationIcon from "../icons/NotificationIcon";
import SettingsIcon from "../icons/SettingsIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type MenuItem = {
  icon: React.ReactNode;
  path: string;
};
const menuItems: MenuItem[] = [
  {
    icon: <DashboardIcon />,
    path: appRoutes.dashboard,
  },
  {
    icon: <DealsIcon />,
    path: appRoutes.deals,
  },
  {
    icon: <UsersIcon />,
    path: appRoutes.customers,
  },
  {
    icon: <ListIcon />,
    path: appRoutes.list,
  },
  {
    icon: <CalendarIcon />,
    path: appRoutes.calendar,
  },
  {
    icon: <NotificationIcon />,
    path: appRoutes.notifications,
  },
  {
    icon: <SettingsIcon />,
    path: appRoutes.settings,
  },
];
const Sidebar: React.FC = () => {
  const currentPath = usePathname();
  return (
    <aside className="flex w-[90px] min-w-[90px] flex-col items-center gap-3 border-r border-r-[#EAEEF4] py-3">
      {menuItems.map((item, id) => (
        <Link
          href={item.path}
          key={id}
          className={clsx(
            "flex h-[50px] w-[50px] items-center justify-center rounded-full",
            currentPath === item.path ? "bg-blue" : "bg-white",
          )}
        >
          {item.icon}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
