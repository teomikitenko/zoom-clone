"use client";
import Image from "next/image";
import Link from "next/link";
import type { LeftBarLink } from "@/types/types";
import { usePathname } from "next/navigation";

const LeftBarNavigationLink = ({l}:{l:LeftBarLink}) => {
  const path = usePathname()
  return (
    <Link key={l.title} href={l.link}>
      <div className={`flex gap-4 p-2 lg:p-4 ${path === l.link&&'bg-buttons'} rounded-lg`}>
        <Image src={l.img} width={25} height={25} alt="icon" className="w-6 sm:w-8 lg:w-6" />
        <p className="inline-block sm:hidden lg:inline-block font-medium text-lg">{l.title}</p>
      </div>
    </Link>
  );
};

export default LeftBarNavigationLink;
