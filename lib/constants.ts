export const NAVIGATION = [
  { name: "Informace", href: "info" },
  { name: "Aktuality", href: "news" },
  { name: "FaQ", href: "faq" },
  { name: "Kontakt", href: "footer" },
];

export const OPENING_HOURS = [
  {
    day: "Pondělí",
    sessions: [
      "7:30–9:00 akutní neobjednaní pacienti",
      "9:00–12:00 objednaní pacienti a kontroly",
      "12:00–12:30 polední pauza",
      "12:30–16:30 objednaní pacienti a kontroly",
    ],
  },
  {
    day: "Úterý",
    sessions: [
      "7:30–9:00 akutní neobjednaní pacienti",
      "9:00–12:00 objednaní pacienti a kontroly",
      "12:00–12:30 polední pauza",
      "12:30–14:30 objednaní pacienti a kontroly",
    ],
  },
  {
    day: "Středa",
    sessions: [
      "7:30–9:00 akutní neobjednaní pacienti",
      "9:00–12:00 objednaní pacienti a kontroly",
      "12:00–12:30 polední pauza",
      "12:30–14:30 objednaní pacienti a kontroly",
    ],
  },
  {
    day: "Čtvrtek",
    sessions: null, // closed
  },
  {
    day: "Pátek",
    sessions: ["7:30–9:00 akutní neobjednaní pacienti"],
  },
];

export const FAQ_DATA = [
  {
    title: "Jak probíhá vyšetření u ORL lékaře?",
    description:
      "Vyšetření zahrnuje zhodnocení stavu uší, nosu a krku. Podle obtíží může lékař provést otoskopii, endoskopii nebo další doplňková vyšetření.",
  },
  {
    title: "Je nutné se předem objednat?",
    description:
      "Ano, většina vyšetření probíhá na objednání. Akutní případy přijímáme v určených časech podle ordinačních hodin.",
  },
  {
    title: "Co si mám vzít s sebou na vyšetření?",
    description:
      "Doporučujeme kartičku pojištěnce, výpis od praktického lékaře, seznam užívaných léků a případně předchozí zdravotní dokumentaci.",
  },
  {
    title: "Provádíte výplach uší a ošetření nosu?",
    description:
      "Ano, poskytujeme standardní ORL výkony včetně výplachů uší, ošetření nosní sliznice, kontroly dutin a péče o krk a mandle.",
  },
  {
    title: "Jak dlouho trvá vyšetření?",
    description:
      "Běžné vyšetření trvá přibližně 10–20 minut. Složitější diagnostické výkony mohou vyžadovat více času.",
  },
];

export const COMPANY_DATA = {
  name: "MUDr. Kolářová Alena",
  address: "Na Šumavě 43, Jablonec n. N.",
  phone: "+420 483 369 269",
  email: "ordinace@orljbc.cz",
};
