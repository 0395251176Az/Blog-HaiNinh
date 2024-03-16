"use server";

import prisma from "@/lib/prisma";

export const getManyproject = async () => {
  try {
    const project = await prisma.project.findMany();
    return project;
  } catch (error) {
    console.log("Error fetch data project", error);
  }
};

export const getIdProject = async (id) => {
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: id,
      },
    });
    return project;
  } catch (error) {
    console.log("Error fetch data project", error);
  }
};
