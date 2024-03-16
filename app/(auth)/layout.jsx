import Header from "@/components/Header";
const layoutDashboard = ({ children }) => {
  return (
    <div className="xl:mt-[-88px] sm: mt-20">
      <div>{children}</div>
    </div>
  );
};

export default layoutDashboard;
