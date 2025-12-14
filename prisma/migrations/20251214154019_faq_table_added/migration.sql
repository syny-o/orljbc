-- CreateTable
CREATE TABLE "Faq" (
    "id" SERIAL NOT NULL,
    "otazka" TEXT NOT NULL,
    "odpoved" TEXT NOT NULL,
    "publikovano" BOOLEAN NOT NULL DEFAULT true,
    "poradi" INTEGER NOT NULL DEFAULT 0,
    "vytvoreno" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "aktualizovano" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Faq_pkey" PRIMARY KEY ("id")
);
