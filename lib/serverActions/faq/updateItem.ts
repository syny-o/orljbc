"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function updateFaq(formData: FormData) {
  try {
    const id = Number(formData.get("id"));
    const otazka = formData.get("otazka") as string | null;
    const odpoved = formData.get("odpoved") as string | null;
    const publikovano = formData.get("publikovano") === "on";
    const poradi = Number(formData.get("poradi") ?? 0);

    if (!id) {
      return { success: false, error: "Neplatné ID." };
    }

    if (!otazka || !otazka.trim()) {
      return { success: false, error: "Otázka je povinná." };
    }

    if (!odpoved || !odpoved.trim()) {
      return { success: false, error: "Odpověď je povinná." };
    }

    await prisma.faq.update({
      where: { id },
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
    console.error("updateFaq error:", error);
    return {
      success: false,
      error: "Nepodařilo se upravit FAQ.",
    };
  }
}
