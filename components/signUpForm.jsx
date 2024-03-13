"use client";

import React, { useState } from "react";
import { signUp } from "@/app/actions/users/signUp/route";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //toast registed
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setMessage("Signing up...");
    const message = await signUp(name, email, password);
    setMessage(message);
  };

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
          type="name"
          placeholder="Name"
          className="rounded-2xl"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
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
          Sign Up
        </Button>

        <h2 className="">
          You have account <span> </span>
          <Link href={"/signin"}>
            <Button
              type="submit"
              className="bg-border text-pink-400 p-"
              variant={"custom"}
              size="custom"
            >
              Sign In
            </Button>
          </Link>
          <p>{message}</p>
        </h2>
      </div>
    </main>
  );
};

export default SignUpForm;
