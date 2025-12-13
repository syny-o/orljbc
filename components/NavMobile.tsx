"use client"; // This is a client component, as it uses state and effects

import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

import Logo from "./shared/Logo";

import { Link as ScrollLink } from "react-scroll";
import { ThemeToggle } from "./shared/ThemeToggle";

import { NAVIGATION } from "@/lib/constants";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex lg:hidden items-center">
        <Menu size={38} />
      </SheetTrigger>
      <SheetContent side="left" className="bg-black/80 border-none text-white">
        <div className="flex flex-col pt-16 pb-8 items-center gap-3 h-full">
          <SheetHeader>
            <SheetTitle className="flex flex-col gap-5 items-center">
              <Logo />
            </SheetTitle>
            <SheetDescription className="sr-only">
              Navigation menu
            </SheetDescription>
          </SheetHeader>
          <ul className="w-full flex flex-col gap-10 justify-center text-center">
            {NAVIGATION.map((link, index) => (
              <li
                key={index}
                className="text-white font-medium uppercase font-primary tracking-[1.2px]"
              >
                <ScrollLink
                  onClick={() => setIsOpen(false)}
                  to={link.href}
                  smooth
                  spy
                  duration={500}
                  className="cursor-pointer"
                  activeClass="text-accent"
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
            <ScrollLink
              onClick={() => setIsOpen(false)}
              to="hours"
              smooth
              offset={-120}
              duration={500}
              className="btn btn-sm btn-outline font-semibold cursor-pointer w-11/12 m-auto"
            >
              Ordinační hodiny
            </ScrollLink>
          </ul>
          <div></div>
          {/* SOCIAL */}
          {/* <Socials containerStyles="text-white text-xl flex gap-6 pt-10" /> */}
          <div className="pt-10 text-accent">
            <ThemeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
