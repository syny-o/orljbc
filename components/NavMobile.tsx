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
import Socials from "./shared/Socials";

const links = [
  { name: "home", path: "home" },
  { name: "služby", path: "services" },
  { name: "o nás", path: "about" },
  { name: "galerie", path: "work" },
  { name: "kontakt", path: "contact" },
];

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex lg:hidden items-center text-4xl fixed left-5 top-5 bg-white border-2 border-accent rounded-full p-5">
        <Menu size={32} />
      </SheetTrigger>
      <SheetContent side="left" className="bg-primary border-none text-white">
        <div className="flex flex-col pt-16 pb-8 items-center justify-between h-full">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription className="sr-only">
              Navigation menu
            </SheetDescription>
          </SheetHeader>
          <ul className="w-full flex flex-col gap-10 justify-center text-center">
            {links.map((link, index) => (
              <li
                key={index}
                className="text-white font-medium uppercase font-primary tracking-[1.2px]"
              >
                <ScrollLink
                  onClick={() => setIsOpen(false)}
                  to={link.path}
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
          </ul>
          {/* SOCIAL */}
          <Socials containerStyles="text-white text-xl flex gap-6" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
