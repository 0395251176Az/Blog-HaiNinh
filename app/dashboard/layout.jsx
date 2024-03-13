import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "Dashboard",
};
const layoutDashboard = ({ children }) => {
  return (
    <div className="m-0 p-0 ">
      <div className="w-full h-screen">
        <div className="w-[256px] h-screen flex flex-col bg-blue-300 p-[24px] rounded-sm">
          <div className="flex gap-5 pb-5 ">
            <div className="overflow-hidden object-fill">
              <Image src={"/logo.png"} width={44} height={44}></Image>
            </div>
            <div class="user_detail">
              <h1 className="text-[10px] font-medium text-[#757575] uppercase">
                {" "}
                web
              </h1>
              <h1 className="text-[14px] font-medium">John</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layoutDashboard;
