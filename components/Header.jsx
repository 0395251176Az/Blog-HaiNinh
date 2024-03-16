"use client";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Search from "./ui/search";
import Link from "next/link";

const Header = () => {
  const { data: session, status } = useSession();

  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => window.removeEventListener("scroll", scrollYPos);
  });
  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <Nav
            containerStyles="hidden xl:flex gap-x-8 items-center ml-80"
            linkStyles="relative hover:text-primary transition-all"
            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
          />
          <div className="flex flex-row gap-2">
            <Search placeholder={"Search..."} />

            {session && session.user?.email ? (
              <>
                <Link href={"/signout"}>
                  <Button size={"sm"} className="hidden xl:flex rounded-3xl">
                    SignOut
                  </Button>
                </Link>
              </>
            ) : (
              <Link href={"/signin"}>
                <Button size={"sm"} className="hidden xl:flex rounded-3xl">
                  Login
                </Button>
              </Link>
            )}
            <div className="hidden xl:flex">
              <ThemeToggler />
            </div>
          </div>
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
