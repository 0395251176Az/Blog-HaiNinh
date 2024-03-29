"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const signUp = async (name, email, password) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    return "User with that email already exists.";
  }

  const passwordHash = bcrypt.hashSync(password, 10);

  await prisma.user.create({
    data: {
      name,
      email,
      passwordHash,
    },
  });

  return "Successfully created new user!";
};
