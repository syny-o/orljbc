"use client";

import { CalendarClock, Clock4, Ban } from "lucide-react";
import Badge from "@/components/shared/Badge";
import { OPENING_HOURS } from "@/lib/constants";



import { useEffect, useState } from "react";


export default function OpeningHours() {
  const [todayIndex, setTodayIndex] = useState<number | null>(null);

  useEffect(() => {
    const now = new Date();
    const day = now.getDay(); // 1 = Monday ... 5 = Friday
    const map = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4 };

    if (map[day as keyof typeof map] !== undefined) {
      setTodayIndex(map[day as keyof typeof map]);
    }
  }, []);

  return (
    <section className="section bg-muted">
      <div className="container">
        <h2 className="h2 mb-10 text-center">Ordinační hodiny</h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {OPENING_HOURS.map((item, i) => {
            const isToday = i === todayIndex;

            return (
              <div
                key={i}
                className={`
                   dark:bg-card p-6 rounded-xl border border-border shadow-sm transition-all duration-300 
                  ${
                    isToday
                      ? "ring-2 ring-accent/40 shadow-md scale-[1.05] bg-accent/5"
                      : "bg-white"
                  }
                `}
              >
                {/* DAY BADGE */}
                <Badge
                  icon={<CalendarClock size={20} />}
                  text={item.day}
                  className={`mb-6 ${
                    isToday ? "bg-accent/20" : ""
                  }`}
                />

                {/* CLOSED DAY */}
                {!item.sessions ? (
                  <div className="flex items-center gap-3 mt-2">
                    <Ban className="text-destructive" size={22} />
                    <p className="font-semibold text-destructive">
                      Neordinujeme
                    </p>
                  </div>
                ) : (
                  <ul className="space-y-5">
                    {item.sessions.map((session, idx) => {
                      const [timeRange, ...descParts] = session.split(" ");
                      const description = descParts.join(" ");

                      return (
                        <li
                          key={idx}
                          className="flex gap-4 pl-4 border-l-4 border-accent/40"
                        >
                          {/* TIME PILL */}
                          <div className="shrink-0 bg-accent/10 text-accent px-3 py-1 rounded-lg text-sm font-semibold flex items-center gap-1">
                            <Clock4 size={14} />
                            {timeRange}
                          </div>

                          {/* Description */}
                          <p className="font-semibold text-gray-700 leading-relaxed dark:text-muted-foreground">
                            {description}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
