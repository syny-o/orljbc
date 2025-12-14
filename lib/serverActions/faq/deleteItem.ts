"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function deleteFaq(formData: FormData) {
  try {
    const id = Number(formData.get("id"));

    if (!id) {
      return { success: false, error: "Neplatné ID FAQ." };
    }

    await prisma.faq.delete({
      where: { id },
    });

    revalidatePath("/dashboard/faq");

    return { success: true };
  } catch (error) {
    console.error("deleteFaq error:", error);
    return {
      success: false,
      error: "Nepodařilo se smazat FAQ.",
    };
  }
}
