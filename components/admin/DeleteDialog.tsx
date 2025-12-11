"use client";

import { Novinka } from "@prisma/client";
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

export default function DeleteDialog({ novinka }: { novinka: Novinka }) {
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
          <AlertDialogCancel>Zrušit</AlertDialogCancel>

          <form action={deleteItem}>
            <input type="hidden" name="id" value={novinka.id} />

            <AlertDialogAction
              type="submit"
              className="bg-red-600 hover:bg-red-800"
            >
              Smazat
            </AlertDialogAction>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
