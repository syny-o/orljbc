"use client";

import { Novinka } from "@/generated/prisma/client";
import { deleteItem } from "@/lib/serverActions/deleteItem";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

import { Trash2 } from "lucide-react";
import { useState } from "react";

export default function DeleteDialog({ novinka }: { novinka: Novinka }) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    setLoading(true);

    const formData = new FormData();
    formData.append("id", String(novinka.id));

    const result = await deleteItem(formData);

    if (!result.success) {
      alert(result.error);
      setLoading(false);
      return;
    }

    // Let Radix close the dialog by clicking the action button
    setLoading(false);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="text-red-600 hover:text-red-800">
          <Trash2 size={20} />
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Opravdu smazat?</AlertDialogTitle>
          <AlertDialogDescription>
            Tato akce je nevratná. Novinka bude trvale smazána.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>Zrušit</AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-800"
            disabled={loading}
          >
            {loading ? "Mažu…" : "Smazat"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
