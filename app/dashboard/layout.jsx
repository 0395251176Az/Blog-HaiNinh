import Link from "next/link";
export const metadata = {
  title: "Dashboard",
};
const layoutDashboard = ({ children }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 bg-blue-400 ">
        <div className="hidden md:flex flex-col mt-20 items-center gap-10">
          <Link href="/dashboard">Home</Link>
          <Link href="/dashboard/blog">Blog</Link>
          <Link href="/dashboard/customer">customer</Link>
        </div>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
};

export default layoutDashboard;
