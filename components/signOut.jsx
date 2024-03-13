"use client";
import React, { useEffect } from "react";
import { signOut } from "next-auth/react";

export default function SignOut() {
  useEffect(() => {
    signOut({
      callbackUrl: "/",
      redirect: true,
    });
  }, []);

  return null;
}
