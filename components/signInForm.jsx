"use client";

import React, { useEffect, useState } from "react";

import { signUp } from "@/app/actions/users/signUp/route";

import { signIn, useSession } from "next-auth/react";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignInForm = () => {
  const router = useRouter();

  const { status } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setMessage("Signing in...");

    try {
      const signInResponse = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!signInResponse || signInResponse.ok !== true) {
        setMessage("Invalid credentials");
      } else {
        router.refresh();
      }
    } catch (err) {
      console.log(err);
    }

    setMessage(message);
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.refresh();
      router.push("/");
    }
  }, [status]);

  return (
    <main className="flex items-center justify-center md:h-screen ">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32 rounded-2xl bg-border">
        <div className="flex h-20 w-full items-end rounded-lg bg-border  p-3 md:h-36">
          <div className="w-32 text-white md:w-36 flex items-center gap-5">
            <Image
              src="/logo.png"
              width={60}
              height={60}
              alt="Picture of the author"
            />
            <h1 className="text-ring text-3xl">Hani</h1>
          </div>
        </div>
        <Input
          type="email"
          placeholder="Email"
          className="rounded-2xl"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          className="rounded-2xl"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button className="bg-blue-300 rounded-2xl" onClick={handleSubmit}>
          Login
        </Button>

        <h2 className="">
          Don't have an account <span> </span>
          <Link href={"/signup"}>
            <Button
              type="submit"
              className="bg-border text-pink-400 p-"
              variant={"custom"}
              size="custom"
            >
              Sign Up
            </Button>
          </Link>
          <p>{message}</p>
        </h2>
      </div>
    </main>
  );
};

export default SignInForm;
