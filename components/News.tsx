import prisma from "@/lib/prisma";
import { Novinka } from "@/generated/prisma/client";

import { CalendarDays, ArrowBigDown } from "lucide-react";

export default async function News() {
  const novinky: Novinka[] = await prisma.novinka.findMany({
    where: {
      publikovano: true,
    },
    orderBy: {
      vytvoreno: "desc",
    },
    take: 6,
  });

  return (
    <section className="section bg-accent" id="news">
      <div className="container">
        {/* Title */}
        <h2 className="h2 mb-10 text-center lg:text-left text-white inline-flex gap-3 items-center">
          Aktuality{" "}
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {novinky.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white dark:bg-card p-6 rounded-xl shadow-sm  hover:shadow-md transition-all duration-300"
              >
                {/* DATE BADGE */}
                <div className="flex items-center gap-2 bg-secondary w-max py-1.5 px-4 rounded-full mb-5">
                  <span className="text-accent">
                    <CalendarDays size={18} />
                  </span>
                  <span className="uppercase text-primary font-semibold tracking-wide text-sm">
                    {item.vytvoreno.toLocaleDateString("cs-CZ")}
                  </span>
                </div>

                {/* Header */}
                {/* <div className="flex items-center gap-3 mb-4">
                  <h3 className="h3">{item.title}</h3>
                </div> */}

                {/* Message */}
                <p className="text-gray-600 dark:text-muted-foreground font-semibold leading-relaxed">
                  {item.obsah}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
