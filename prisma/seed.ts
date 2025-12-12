import { PrismaClient, Prisma } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const novinkyData = [
  {
    nazev: "Ambulance",
    obsah:
      "Dne 22.12. 25 ambulance 7:30 - 12:00.",
  },
  {
    nazev: "Ambulance",
    obsah:
      " Dne 23.12. 25 ambulance 8:00 - 11:00.",
  },
  {
    nazev: "Dovolená",
    obsah:
      "Dne 29.12.25 - 2.1.26  DOVOLENÁ",
  },
];

export async function main() {
  for (const u of novinkyData) {
    await prisma.novinka.create({ data: u });
  }
}

main();
