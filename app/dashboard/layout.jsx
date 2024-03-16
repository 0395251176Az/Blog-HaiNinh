import SideNav from "@/components/ui/dashboard/sidenav";
export const metadata = {
  title: "Dashboard",
};
const layoutDashboard = ({ children }) => {
  return (
    <div className="flex bg-[#f6f6f9] h-screen  flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow md:overflow-y-auto">{children}</div>
    </div>
  );
};

export default layoutDashboard;
