import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const userId = "lHs3hNAlY3S4Wliypjxsol1GZXTxCIcF";

  // 1. Kill active sessions
  await prisma.session.deleteMany({
    where: { userId },
  });

  // 2. Delete auth accounts (credentials, OAuth)
  await prisma.account.deleteMany({
    where: { userId },
  });

  // 3. Delete verification tokens (email-based)
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { email: true },
  });

  if (user?.email) {
    await prisma.verification.deleteMany({
      where: { identifier: user.email },
    });
  }

  // 4. Delete the user
  await prisma.user.delete({
    where: { id: userId },
  });

  console.log("✅ User deleted cleanly");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
