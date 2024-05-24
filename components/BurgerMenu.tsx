"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Burger from "@/public/icons/hamburger.svg";
import Logo from "@/public/icons/logo.svg";
import { NavigationLinks } from "@/constants";
import LeftBarNavigationLink from "./LeftBarNavigations";

import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const [closeAnimation, setCloseAnimation] = useState(false);
  const path = usePathname();
  const animationMenu = clsx({
    "animate-burger-open left-0": open && !closeAnimation,
    "animate-burger-close left-[-500px]": open && closeAnimation,
  });
  const openModal = clsx({
    block: open,
    hidden: !open,
  });
  useEffect(() => {
    let body = document.querySelector("body");
    if (open) {
      body?.classList.add("overflow-hidden");
    } else {
      body?.classList.remove("overflow-hidden");
      setCloseAnimation(false);
    }
  }, [open]);
  useEffect(() => {
    setOpen(false);
  }, [path]);
  const closeMenu = () => {
    setCloseAnimation(true);
    setTimeout(() => setOpen(false), 100);
  };
  return (
    <>
      <div
        className={`z-[100] fixed sm:hidden ${openModal} top-0 left-0 w-full h-full`}
      >
        <div
          onClick={closeMenu}
          className="relative w-full h-full bg-black opacity-45"
        ></div>

        <div
          className={`absolute h-full top-0 ${animationMenu} w-[55%] bg-[#1C1F2E] py-4 px-5`}
        >
          <div className="h-full w-full relative">
            <X
              onClick={closeMenu}
              color="white"
              className="absolute right-0 top-1"
            />
            <div className="flex gap-2">
              <Image src={Logo} width={35} alt="logo" />
              <h1 className="font-bold text-2xl flex items-center">Yoom</h1>
            </div>
            <ul className="flex flex-col gap-6 mt-10">
              {NavigationLinks.map((l) => (
                <LeftBarNavigationLink key={l.title} l={l} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Image
        onClick={() => setOpen(!open)}
        className="block sm:hidden"
        src={Burger}
        width={28}
        height={28}
        alt="burger-menu"
      />
    </>
  );
};

export default BurgerMenu;
