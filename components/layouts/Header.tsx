import { Button } from "flowbite-react";
import AppLogoIcon from "../icons/AppLogoIcon";
import SearchIcon from "../icons/SearchIcon";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="flex h-[90px] border-b border-b-[#EAEEF4]">
      <div className="flex h-[90px] w-[90px] min-w-[90px] items-center justify-center border-r border-r-[#EAEEF4]">
        <AppLogoIcon />
      </div>
      <div className="flex h-full w-full items-center justify-between px-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <Button pill color={"primary"} size={"lg"}>
            Add New +
          </Button>
          <button className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white">
            <SearchIcon />
          </button>
          <button>
            <Image
              src={"/assets/images/user.png"}
              width={50}
              height={50}
              alt="user"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
