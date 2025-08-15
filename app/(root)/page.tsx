import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="z-20 flex flex-col items-center justify-start min-h-screen py-2 mt-10">
      <div className="flex flex-col justify-center items-center my-5">
        <Image src={"/hero.svg"} alt="Hero section" height={500} width={500}/>
        <h1 className="z-20 text-6xl mt-5 font-extrabold text-center text-[#5148ff] tracking-tight leading-[1.3]">
          Code With Power of AI Assistance
        </h1>
        <p className="mt-2 text-lg text-center text-gray-600 dark:text-gray-400 px-5 py-10 max-w-2xl">
          ByteCanvas is a powerful and intelligent code editor that enhances
          your coding experience with advances features and seamless integration.
          It is designed to help you write, debug, and optimize your code efficiently.
        </p>
        <Link href={"/dashboard"}>
          <Button variant={"brand"} className="mb-4" size={'lg'}>
            Get Started
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
