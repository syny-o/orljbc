"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function createItem(formData: FormData) {
  try {
    const nazev = formData.get("title") as string;
    const obsah = formData.get("content") as string;
    const publikovano = (formData.get("published") as string) === "on";

    if (!nazev || !obsah) {
      return { success: false, error: "Název a obsah jsou povinné." };
    }

    await prisma.novinka.create({
      data: { nazev, obsah, publikovano },
    });

    revalidatePath("/dashboard");

    return { success: true };
  } catch (err: any) {
    console.error("Error creating item:", err);

    return {
      success: false,
      error: "Došlo k neočekávané chybě při ukládání.",
    };
  }
}
