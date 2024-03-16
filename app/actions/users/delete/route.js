"use server";
import prisma from "@/lib/prisma";

export const deleteUser = async (id) => {
  try {
    const deleteUser = await prisma.user.delete({
      where: { id: id },
    });
    return deleteUser;
  } catch (error) {
    console.error("Error delete user:", error);
  }
};
