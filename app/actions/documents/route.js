"use server";

import prisma from "@/lib/prisma";

export const getallDocument = async () => {
  try {
    const document = await prisma.documents.findMany();
    return document;
  } catch (error) {
    console.error("Error delete user:", error);
  }
};

export const EditDocument = async (id, userId, title, body) => {
  try {
    const document = await prisma.documents.update({
      where: { id: id },
      data: {
        userId: userId,
        title: title,
        body: body,
      },
    });
    return document;
  } catch (error) {
    console.error("Error edit document:", error);
  }
};
export const deleteDocument = async (id) => {
  try {
    await prisma.documents.delete({ where: { id: id } });
  } catch (error) {
    console.error("Error delete document:", error);
  }
};

export const createDocument = async (userId, title, body) => {
  try {
    await prisma.documents.create({
      data: {
        userId: userId,
        title: title,
        body: body,
      },
    });
  } catch (error) {
    console.error("Error create data:", error);
  }
};
