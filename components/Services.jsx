import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "International bussiness",
    description:
      "Kinh doanh quốc tế là lĩnh vực tập trung vào giao thương và hợp tác trên toàn cầu. Đối mặt với thách thức đa văn hóa và biến động thị trường, ngành này đóng vai trò quan trọng đến sự phát triển kinh tế toàn cầu.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Marketing",
    description:
      "Marketing là nghệ thuật xây dựng và quảng bá thương hiệu, tạo mối liên kết sâu sắc giữa doanh nghiệp và khách hàng. Với chiến lược sáng tạo, ngành này định hình xu hướng tiêu dùng và thúc đẩy sự phát triển kinh doanh.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Ecommerce",
    description:
      "E-commerce là lĩnh vực giao dịch trực tuyến, trải nghiệm mua sắm thuận tiện và đa dạng. Được đánh giá cao với sự tiện lợi và tốc độ, ngành này ngày định hình cách mọi người mua sắm và kinh doanh trên toàn thế giới.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="mb-12 xl:mb-24 text-center mx-auto"></h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[320px] flex flex-col pt-28 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[70px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
