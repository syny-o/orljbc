-- CreateTable
CREATE TABLE "Novinka" (
    "id" SERIAL NOT NULL,
    "nazev" TEXT NOT NULL,
    "obsah" TEXT NOT NULL,
    "publikovano" BOOLEAN NOT NULL DEFAULT false,
    "vytvoreno" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "aktualizovano" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Novinka_pkey" PRIMARY KEY ("id")
);
