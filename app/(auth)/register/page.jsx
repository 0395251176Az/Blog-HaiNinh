import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
const Register = () => {
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
        <Input type="name" placeholder="Name" className="rounded-2xl" />
        <Input type="email" placeholder="Email" className="rounded-2xl" />
        <Input type="password" placeholder="Password" className="rounded-2xl" />
        <Button className="bg-blue-300 rounded-2xl">Register</Button>
        <h2 className="">
          You have account <span> </span>
          <Link href={"/login"}>
            <Button
              type="submit"
              className="bg-border text-pink-400 p-"
              variant={"custom"}
              size="custom"
            >
              Login
            </Button>
          </Link>
        </h2>
      </div>
    </main>
  );
};

export default Register;
