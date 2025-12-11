"use server";

import { revalidatePath } from "next/cache";
import prisma from "../prisma";

export async function updateItem(formData: FormData) {
  try {
    const id = Number(formData.get("id"));
    const title = formData.get("title") as string | null;
    const content = formData.get("content") as string | null;
    const published = formData.get("published") === "on";

    // Validation
    if (!id || !title?.trim() || !content?.trim()) {
      return {
        success: false,
        error: "ID, název a obsah jsou povinné.",
      };
    }

    // Database update
    await prisma.novinka.update({
      where: { id },
      data: {
        nazev: title,
        obsah: content,
        publikovano: published,
      },
    });

    revalidatePath("/dashboard");

    return { success: true };
  } catch (err: any) {
    console.error("Error updating item:", err);

    return {
      success: false,
      error: "Došlo k chybě při aktualizaci novinky.",
    };
  }
}
