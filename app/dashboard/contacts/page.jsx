import Logo from "@/components/Logo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Search from "@/components/ui/search";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RiFile2Line, RiPhoneLine } from "react-icons/ri";
import { Card, CardContent } from "@/components/ui/card";

const customers = () => {
  return (
    <div className="relative w-full p-4">
      <div className="flex justify-between items-center  bg-[#fff] rounded-[10px] py-2.5 px-8 mb-4 ">
        <div className="text-blue-500 text-[20px]">
          <h1>Contact</h1>
        </div>
        <div className="flex flex-wrap gap-4">
          <Search placeholder={"search..."} />
        </div>
      </div>
      <div className="flex pt-4">
        <div className="bg-[#fff] w-full p-8 rounded-[10px]">
          <h3 className="text-[rgba(113,99,186,255)] pb-3 text-[15px] ">
            Today
          </h3>
          <div className=" flex flex-wrap gap-4   justify-center h-[150px] ">
            {/* <div className="bg-[rgb(299,223,223)] rounded-[10px] p-3 w-[265px] h-[160px] flex flex-col content-between  transition-[all 0.5s ease-in-out] hover:translate-y-[-2px]">
              <div className="flex flex-col content-between">
                <h1 className="text-[17px] font-medium">
                  Title: Document about AI
                </h1>

                <ScrollArea className="h-[90px] w-[240px] rounded-md bg-white border p-2 ">
                  Jokester began sneaking into the castle in the middle of the
                  night and leaving jokes all over the place: under the king's
                  pillow, in his soup, even in the royal toilet. The king was
                  furious, but he couldn't seem to stop Jokester. And then, one
                  day, the people of the kingdom discovered that the jokes left
                  by Jokester were so funny that they couldn't help but laugh.
                  And once they started laughing, they couldn't stop.
                </ScrollArea>

                <h1>Username: trung</h1>
              </div>
            </div> */}
            <div className="flex justify-center flex-wrap">
              <Carousel className="h-[120px] w-[1100px] ">
                <CarouselContent className="-ml-1 ">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-1 md:basis-1/3 lg:basis-1/4 "
                    >
                      {/* <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6 ">
                      <span className="text-2xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div> */}{" "}
                      <div className="bg-[rgb(299,223,223)] rounded-[10px] p-3 w-[265px] h-[160px] flex flex-col content-between  transition-[all 0.5s ease-in-out] hover:translate-y-[-2px]">
                        <div className="flex flex-col content-between ">
                          <h1 className="text-[17px] font-medium">
                            Title: Document about AI
                          </h1>
                          <ScrollArea className="h-[90px] rounded-md bg-white border p-2  ">
                            Jokester began sneaking into the castle in the
                            middle of the night and leaving jokes all over the
                            place: under the king's pillow, in his soup, even in
                            the royal toilet. The king was furious, but he
                            couldn't seem to stop Jokester. And then, one day,
                            the people of the kingdom discovered that the jokes
                            left by Jokester were so funny that they couldn't
                            help but laugh. And once they started laughing, they
                            couldn't stop.
                          </ScrollArea>

                          <h1>Username: trung</h1>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>{" "}
        </div>
      </div>{" "}
    </div>
  );
};

export default customers;
