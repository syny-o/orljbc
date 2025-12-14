import prisma from "@/lib/prisma";
import { Faq } from "@/generated/prisma/client";

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

import DeleteDialog from "./DeleteDialog";
import FaqDialog from "./CreateUpdateDialog";

import { createFaq } from "@/lib/serverActions/faq/createItem";
import { updateFaq } from "@/lib/serverActions/faq/updateItem";
import { deleteFaq } from "@/lib/serverActions/faq/deleteItem";

import { Button } from "@/components/ui/button";
import { Pen, PlusCircle } from "lucide-react";

export default async function FaqPage() {
  const faqs: Faq[] = await prisma.faq.findMany({
    orderBy: { poradi: "asc" },
  });

  return (
    <div className="min-h-screen">
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">FAQ – Otázky a odpovědi</h1>

        <p className="mb-6">
          Zde můžete spravovat často kladené otázky a odpovědi.
        </p>

        {/* CREATE FAQ */}
        <FaqDialog
          mode="create"
          action={createFaq}
          trigger={
            <Button size="lg">
              <PlusCircle className="mr-2" /> Přidat otázku
            </Button>
          }
        />

        <div className="border-2 rounded-lg mt-6 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Otázka</TableHead>
                <TableHead>Odpověď</TableHead>
                <TableHead>Pořadí</TableHead>
                <TableHead>Publikováno</TableHead>
                <TableHead />
                <TableHead />
              </TableRow>
            </TableHeader>

            <TableBody>
              {faqs.map((faq) => (
                <TableRow key={faq.id}>
                  <TableCell className="font-medium">
                    {faq.otazka}
                  </TableCell>

                  <TableCell className="max-w-xl truncate">
                    {faq.odpoved}
                  </TableCell>

                  <TableCell>{faq.poradi}</TableCell>

                  <TableCell>
                    {faq.publikovano ? "Ano" : "Ne"}
                  </TableCell>

                  {/* EDIT */}
                  <TableCell>
                    <FaqDialog
                      mode="update"
                      action={updateFaq}
                      faq={faq}
                      trigger={
                        <button className="text-blue-500 hover:text-blue-800">
                          <Pen size={20} />
                        </button>
                      }
                    />
                  </TableCell>

                  {/* DELETE */}
                  <TableCell>
                    <DeleteDialog
                      faq={faq}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}
