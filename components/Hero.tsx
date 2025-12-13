"use client";

import { ArrowBigRightDash, Cross } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import Badge from "./shared/Badge";

export default function Hero() {
  return (
    <>
      <section className="Hero bg-doctor-blue py-12 xl:pt-12 xl:pb-0 overflow-hidden">
        <div className="container mx-auto h-full">
          {/* TEXT + IMG */}
          <div className="flex flex-col xl:flex-row items-center justify-center h-full">
            {/* LEFT PART - BADGE+TEXT+BTN */}
            <div className="hero__text xl:w-[48%] text-center xl:text-left">
              <Badge
                text="Ušní - Nosní - Krční"
                icon={<Cross />}
                className="mb-6 mx-auto xl:mx-0"
              />

              <h1 className="h1 mb-6">Vítejte v ORL ambulanci</h1>
              <p className="md: max-w-xl mb-10 font-semibold text-2xl">
                Nabízíme diagnostickou, preventivní, léčebnou a dispenzární péči
                chorob uší, nosu a krku.
              </p>
              <ScrollLink to="news" smooth offset={-120} duration={500}>
                <button className="btn btn-lg btn-accent btn-icon mx-auto xl:mx-0 font-semibold">
                  <ArrowBigRightDash /> Aktuality
                </button>
              </ScrollLink>
            </div>
            {/* RIGHT PART - IMG */}
            <div className="hero__img hidden xl:flex max-w-[814px] self-end">
              <img src="/assets/img/hero/img.png" alt="Hero Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
