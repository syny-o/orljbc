"use server";

import { revalidatePath } from "next/cache";
import prisma from "../prisma";

export async function deleteItem(formData: FormData) {
  try {
    const id = Number(formData.get("id"));

    // Validate ID
    if (!id || Number.isNaN(id)) {
      return {
        success: false,
        error: "Neplatné ID pro smazání.",
      };
    }

    // Delete item
    await prisma.novinka.delete({
      where: { id },
    });

    // Revalidate dashboard
    revalidatePath("/dashboard");

    return { success: true };
  } catch (err: any) {
    console.error("Error deleting item:", err);

    return {
      success: false,
      error: "Došlo k chybě při mazání novinky.",
    };
  }
}
