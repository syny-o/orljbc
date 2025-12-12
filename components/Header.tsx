import { MapPin, Phone, User } from "lucide-react";
import { NAVIGATION } from "@/lib/constants";
import Link from "next/link";
import Logo from "./shared/Logo";
// import { Session } from "better-auth";

import { createAuthClient } from "better-auth/client";
import { ThemeToggle } from "./shared/ThemeToggle";
import NavMobile from "./NavMobile";
const authClient = createAuthClient();
export type Session = typeof authClient.$Infer.Session;

type HeaderProps = {
  session: Session | null;
};

export default function Header(props: HeaderProps) {
  return (
    <header className="py-8 lg:pt-6 lg:pb-14">
      <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0">
        {/* LOGO + MOBILE NAV */}
        <div className="flex justify-between items-center">
          <NavMobile />

          <Logo />
        </div>

        {/* DOCTOR + LOCATION + PHONE */}
        <div className="flex flex-col gap-y-4 xl:flex-row lg:gap-x-6 lg:gap-y-0 items-center">
          <div className="flex gap-x-2 items-center justify-center lg:justify-normal">
            <span className="text-accent">
              <User />
            </span>
            <div className="font-semibold text-gray-500">
              Mudr. Kolářová Alena
            </div>
          </div>
          <div className="flex gap-x-2 items-center justify-center lg:justify-normal">
            <span className="text-accent">
              <MapPin />
            </span>
            <div className="font-semibold text-gray-500">
              Na Šumavě 550, Jablonec n/N
            </div>
          </div>
          <div className="flex gap-x-2 items-center justify-center lg:justify-normal">
            <span className="text-accent">
              <Phone />
            </span>
            <div className="font-semibold text-gray-500">+420 483 369 269</div>
          </div>
          <div className="hidden lg:flex">

          <ThemeToggle />
          </div>
        </div>
        {/* DESKTOP NAV */}
        <nav className="bg-primary-foreground absolute w-full left-0 -bottom-24 shadow-sm h-20 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px]">
          <ul className="flex">
            {NAVIGATION.map((navItem) => (
              <li
                key={navItem.name}
                className="border-r-2 border-border px-8 last:border-r-0"
              >
                <Link
                  href={navItem.href}
                  className="text-gray-500 hover:text-accent transition-all duration-300 font-semibold"
                >
                  {navItem.name}
                </Link>
              </li>
            ))}
            {props.session && (
              <li className="px-8">
                <Link
                  className="text-red-500 hover:text-accent transition-all duration-300 font-semibold"
                  href="/dashboard"
                >
                  Admin
                </Link>
              </li>
            )}
          </ul>

          <button className="btn btn-sm btn-outline font-semibold">
            Ordinační hodiny
          </button>
        </nav>
      </div>
    </header>
  );
}
