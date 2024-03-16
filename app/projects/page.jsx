"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { getManyproject } from "../actions/project/route";

const projectData = [
  {
    id: 1,
    image: "/work/3.png",
    category: "Economy",
    name: "Market story",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    id: 2,
    image: "/work/4.png",
    category: "Economy",
    name: "Market story",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    id: 3,
    image: "/work/2.png",
    category: "Ecommerce",
    name: "Market story",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    id: 4,
    image: "/work/1.png",
    category: "Ecommerce",
    name: "Market story",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    id: 5,
    image: "/work/3.png",
    category: "Ecommerce",
    name: "Market story",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    id: 6,
    image: "/work/4.png",
    category: "Ecommerce",
    name: "Market story",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    id: 7,
    image: "/work/1.png",
    category: "Marketing",
    name: "Market story",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    id: 8,
    image: "/work/3.png",
    category: "Marketing",
    name: "Market story",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    id: 9,
    image: "/work/2.png",
    category: "Marketing",
    name: "Market story",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
];

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const project = await getManyproject();
        setData(project);
        // console.log(project);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const filteredProjects = data.filter((project) => {
    // console.log(project);
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Tài liệu
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, id) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={id}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, id) => {
              return (
                <Link href={`/projects/${project.id}`} key={id}>
                  <TabsContent value={category}>
                    <ProjectCard project={project} />
                  </TabsContent>
                </Link>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
