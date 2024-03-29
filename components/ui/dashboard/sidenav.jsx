import Link from "next/link";
import Image from "next/image";
import NavLinks from "@/components/ui/dashboard/nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";

import Logo from "@/components/Logo";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="hidden xl:flex mb-2 h-20 items-center justify-start rounded-md bg-background   p-4 md:h-40"
        href="/"
      >
        <div className="w-32 md:w-40 ">
          <Image src={"/logo.png"} width={80} height={80} />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <Link href={"/signout"}>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </Link>
      </div>
    </div>
  );
}
