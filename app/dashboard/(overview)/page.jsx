import Logo from "@/components/Logo";
import Search from "@/components/ui/search";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { RiFile2Line, RiPhoneLine } from "react-icons/ri";
const Dashboard = () => {
  return (
    <div className="relative w-full p-4">
      <div className="flex justify-between items-center  bg-[#fff] rounded-[10px] py-2.5 px-8 mb-4 ">
        <div className="text-blue-500 text-[20px]">
          <span>Primary</span>
          <h1>Dashboard</h1>
        </div>
        <div className="flex flex-wrap gap-4">
          {/* <div className="Search">
            <Search placeholder={"search..."} />
          </div> */}
          <Logo className="w-[50px] h-[50px] cursor-pointer rounded-full" />
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <div className="bg-[#fff] p-8 rounded-[10px]">
            <h3 className="text-[rgba(113,99,186,255)] pb-3 text-[15px] ">
              Today
            </h3>
            <div className="flex flex-wrap gap-4 ">
              <div className="bg-[rgb(299,223,223)] rounded-[10px] p-[1.2rem] w-[290px] h-[150px] flex flex-col content-between transition-[all 0.5s ease-in-out] hover:translate-y-[-2px]">
                <div className="flex justify-between items-center mb-5">
                  <div className="flex flex-col">
                    <span className="text-[12px] font-extralight">
                      Documents
                    </span>
                    <span className="text-6 font-semibold"> 5555</span>
                  </div>
                  <RiFile2Line className="text-[#fff] p-4 h-16 w-16 text-center rounded-full text-[1.5rem] bg-red-500" />
                </div>
                <h2 className="flex gap-2">
                  Total documents: <p>4000</p>
                </h2>
              </div>
              <div className="bg-[rgb(299,223,223)] rounded-[10px] p-[1.2rem] w-[290px] h-[150px] flex flex-col content-between transition-[all 0.5s ease-in-out] hover:translate-y-[-2px]">
                <div className="flex justify-between items-center mb-5">
                  <div className="flex flex-col">
                    <span className="text-[12px] font-extralight">
                      Contacts
                    </span>
                    <span className="text-6 font-semibold"> 5555</span>
                  </div>
                  <RiPhoneLine className="text-[#fff] p-4 h-16 w-16 text-center rounded-full text-[1.5rem] bg-red-500" />
                </div>
                <h2 className="flex gap-2">
                  Total contacts: <p>4000</p>
                </h2>
              </div>
              <div className="bg-[rgb(299,223,223)] rounded-[10px] p-[1.2rem] w-[290px] h-[150px] flex flex-col content-between transition-[all 0.5s ease-in-out] hover:translate-y-[-2px]">
                <div className="flex justify-between items-center mb-5">
                  <div className="flex flex-col">
                    <span className="text-[12px] font-extralight">
                      Connect's
                    </span>
                    <span className="text-6 font-semibold"> 5555</span>
                  </div>
                  <RiFile2Line className="text-[#fff] p-4 h-16 w-16 text-center rounded-full text-[1.5rem] bg-red-500" />
                </div>
                <h2 className="flex gap-2">
                  Total connect: <p>4000</p>
                </h2>
              </div>
            </div>
          </div>

          <div className="bg-[#fff] p-8 rounded-[10px]">
            <h3 className="text-[rgba(113,99,186,255)] pb-3 text-[15px] ">
              Today
            </h3>
            <div className="flex flex-wrap gap-4 ">
              <div className="bg-[rgb(299,223,223)] rounded-[10px] p-[1.2rem] w-[290px] h-[150px] flex flex-col content-between transition-[all 0.5s ease-in-out] hover:translate-y-[-2px]">
                <div className="flex justify-between items-center mb-5">
                  <div className="flex flex-col">
                    <span className="text-[12px] font-extralight">
                      Documents
                    </span>
                    <span className="text-6 font-semibold"> 5555</span>
                  </div>
                  <RiFile2Line className="text-[#fff] p-4 h-16 w-16 text-center rounded-full text-[1.5rem] bg-red-500" />
                </div>
                <h2 className="flex gap-2">
                  Total documents: <p>4000</p>
                </h2>
              </div>
              <div className="bg-[rgb(299,223,223)] rounded-[10px] p-[1.2rem] w-[290px] h-[150px] flex flex-col content-between transition-[all 0.5s ease-in-out] hover:translate-y-[-2px]">
                <div className="flex justify-between items-center mb-5">
                  <div className="flex flex-col">
                    <span className="text-[12px] font-extralight">
                      Contacts
                    </span>
                    <span className="text-6 font-semibold"> 5555</span>
                  </div>
                  <RiPhoneLine className="text-[#fff] p-4 h-16 w-16 text-center rounded-full text-[1.5rem] bg-red-500" />
                </div>
                <h2 className="flex gap-2">
                  Total contacts: <p>4000</p>
                </h2>
              </div>
              <div className="bg-[rgb(299,223,223)] rounded-[10px] p-[1.2rem] w-[290px] h-[150px] flex flex-col content-between transition-[all 0.5s ease-in-out] hover:translate-y-[-2px]">
                <div className="flex justify-between items-center mb-5">
                  <div className="flex flex-col">
                    <span className="text-[12px] font-extralight">
                      Connect's
                    </span>
                    <span className="text-6 font-semibold"> 5555</span>
                  </div>
                  <RiFile2Line className="text-[#fff] p-4 h-16 w-16 text-center rounded-full text-[1.5rem] bg-red-500" />
                </div>
                <h2 className="flex gap-2">
                  Total connect: <p>4000</p>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
