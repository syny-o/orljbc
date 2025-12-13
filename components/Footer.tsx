"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  BadgeQuestionMarkIcon,
  CalendarCheckIcon,
  Info,
  User,
} from "lucide-react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Logo from "./shared/Logo";
import { COMPANY_DATA } from "@/lib/constants";
import Socials from "./shared/Socials";

export default function Footer() {
  return (
    <footer
      className="bg-primary-foreground text-primary pt-22 pb-10 border-t border-border"
      id="footer"
    >
      <div className="container mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-12">
        {/* LOGO + TEXT */}
        <div className="flex flex-col gap-4 items-start">
          <Logo />
          <p className="font-semibold text-gray-600 leading-relaxed">
            {/* ORL ambulance MUDr. Kolářové poskytuje odbornou péči v oblasti uší,
            nosu a krku s důrazem na lidský přístup a moderní diagnostiku. */}
            Nabízíme diagnostickou, preventivní, léčebnou a dispenzární péči
            chorob uší, nosu a krku.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="h3 mb-6">Kontakt</h3>
          <ul className="space-y-4 font-semibold text-gray-700">
            <li className="flex items-center gap-3">
              <User className="text-accent" size={22} />
              {COMPANY_DATA.name}
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-accent" size={22} />
              {COMPANY_DATA.address}
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-accent" size={22} />
              {COMPANY_DATA.phone}
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-accent" size={22} />
              {COMPANY_DATA.email}
            </li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="h3 mb-6">Rychlé odkazy</h3>

          <ul className="space-y-4 font-semibold text-gray-700">
            <li>
              <ScrollLink
                to="info"
                smooth
                offset={-120}
                duration={500}
                className="hover:text-accent transition-all flex items-center gap-2 cursor-pointer"
              >
                <Info size={24} className="text-accent" />
                Důležité Informace
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="news"
                smooth
                offset={-120}
                duration={500}
                className="hover:text-accent transition-all flex items-center gap-2 cursor-pointer"
              >
                <CalendarCheckIcon size={24} className="text-accent" />
                Aktuality
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="hours"
                smooth

                offset={-120}
                duration={500}
                className="hover:text-accent transition-all flex items-center gap-2 cursor-pointer"
              >
                <Clock size={20} className="text-accent" />
                Ordinační hodiny
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="hover:text-accent transition-all flex items-center gap-2 cursor-pointer"
                to="faq"
                smooth

                offset={-120}
                duration={500}
              >
                <BadgeQuestionMarkIcon size={24} className="text-accent" />
                Nejčastější dotazy
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* GOOGLE MAP */}
        <div>
          <h3 className="h3 mb-6">Kde nás najdete</h3>

          <div className="rounded-xl overflow-hidden border border-border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501.09713834011893!2d15.181653843359424!3d50.731602019408584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ecad876347121%3A0xfb6758a538444915!2sNa%20%C5%A0umav%C4%9B%202300%2F43%2C%20466%2002%20Jablonec%20nad%20Nisou%202!5e0!3m2!1scs!2scz!4v1765629352307!5m2!1scs!2scz"
              width="100%"
              height="260"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="container mx-auto mt-12 pt-8 border-t border-border flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
        {/* SOCIALS */}
        <Socials />

        {/* COPYRIGHT */}
        <p className="text-gray-600 font-semibold text-center">
          © {new Date().getFullYear()} MUDr. Kolářová Alena — Všechna práva
          vyhrazena.
        </p>
      </div>
    </footer>
  );
}
