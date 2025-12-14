"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function createFaq(formData: FormData) {
  try {
    const otazka = formData.get("otazka") as string | null;
    const odpoved = formData.get("odpoved") as string | null;
    const publikovano = formData.get("publikovano") === "on";
    const poradi = Number(formData.get("poradi") ?? 0);

    if (!otazka || !otazka.trim()) {
      return { success: false, error: "Otázka je povinná." };
    }

    if (!odpoved || !odpoved.trim()) {
      return { success: false, error: "Odpověď je povinná." };
    }

    await prisma.faq.create({
      data: {
        otazka: otazka.trim(),
        odpoved: odpoved.trim(),
        publikovano,
        poradi,
      },
    });

    revalidatePath("/dashboard/faq");

    return { success: true };
  } catch (error) {
    console.error("createFaq error:", error);
    return {
      success: false,
      error: "Nepodařilo se vytvořit FAQ.",
    };
  }
}
