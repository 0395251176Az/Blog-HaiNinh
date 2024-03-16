"use client";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { getIdProject } from "@/app/actions/project/route";

const projectId = ({ params }) => {
  const [project, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const project = await getIdProject(parseInt(params.id));
        setData(project);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Card className="group overflow-hidden relative max-w-[1266px] m-auto">
      <CardHeader className="p-0">
        <div className="relative p-10 w-full h-full flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className=" bottom-0 shadow-2xl"
            src={project.image}
            width={300}
            height={300}
            alt=""
            priority
          />
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
      <div className="mt-[108px]"></div>
    </Card>
  );
};

export default projectId;
