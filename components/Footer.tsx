import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  BadgeQuestionMarkIcon,
  CalendarCheckIcon,
} from "lucide-react";
import Link from "next/link";
import Logo from "./shared/Logo";

export default function Footer() {
  return (
    <footer className="bg-primary-foreground text-primary pt-22 pb-10 border-t border-border">
      <div className="container mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-12">
        {/* LOGO + TEXT */}
        <div className="flex flex-col gap-4 items-start">
          <Logo />
          <p className="font-semibold text-gray-600 leading-relaxed">
            {/* ORL ambulance MUDr. Kolářové poskytuje odbornou péči v oblasti uší,
            nosu a krku s důrazem na lidský přístup a moderní diagnostiku. */}
            Nabízíme diagnostickou, preventivní, léčebnou a dispenzární péči chorob uší, nosu a krku.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="h3 mb-6">Kontakt</h3>
          <ul className="space-y-4 font-semibold text-gray-700">
            <li className="flex items-center gap-3">
              <MapPin className="text-accent" size={22} />
              Na Šumavě 550, Jablonec n/N
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-accent" size={22} />
              +420 483 369 269
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-accent" size={22} />
              info@orl-jbc.cz
            </li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="h3 mb-6">Rychlé odkazy</h3>

          <ul className="space-y-4 font-semibold text-gray-700">
            <li>
              <Link
                href="/ordinacni-hodiny"
                className="hover:text-accent transition-all flex items-center gap-2"
              >
                <Clock size={20} className="text-accent" />
                Ordinační hodiny
              </Link>
            </li>
            <li>
              <Link
                href="/kontakt"
                className="hover:text-accent transition-all flex items-center gap-2"
              >
                <CalendarCheckIcon size={24} className="text-accent" />
                Aktuality
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="hover:text-accent transition-all flex items-center gap-2"
              >
                <BadgeQuestionMarkIcon size={24} className="text-accent" />
                Nejčastější dotazy
              </Link>
            </li>
          </ul>
        </div>

        {/* GOOGLE MAP */}
        <div>
          <h3 className="h3 mb-6">Kde nás najdete</h3>

          <div className="rounded-xl overflow-hidden border border-border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.078640639908!2d15.152004777228298!3d50.730611871602296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ef585e2f2fdc9%3A0x82a7887e6443daef!2sNa%20%C5%A0umav%C4%9B%20550%2C%20466%2001%20Jablonec%20nad%20Nisou!5e0!3m2!1scs!2scz!4v1733938396242!5m2!1scs!2scz"
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
        <div className="flex gap-6">
          <a href="#" className="text-primary hover:text-accent transition">
            <Facebook size={22} />
          </a>
          <a href="#" className="text-primary hover:text-accent transition">
            <Instagram size={22} />
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-gray-600 font-semibold text-center">
          © {new Date().getFullYear()} ORL ambulance MUDr. Kolářová — Všechna
          práva vyhrazena.
        </p>
      </div>
    </footer>
  );
}
