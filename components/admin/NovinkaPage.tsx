import prisma from "@/lib/prisma";
import { Novinka } from "@prisma/client";

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";


import DeleteDialog from "@/components/admin/DeleteDialog";
import Logo from "../shared/Logo";
import NovinkaDialog from "./NovinkaDialog";
import { createItem } from "@/lib/serverActions/createItem";
import { Button } from "../ui/button";
import { Pen, PlusCircle } from "lucide-react";
import { updateItem } from "@/lib/serverActions/updateItem";

export default async function DashboardPage() {
  const novinky: Novinka[] = await prisma.novinka.findMany({
    orderBy: { vytvoreno: "desc" },
  });

  return (
    <div className="min-h-screen">
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Aktuality</h1>

        <p className="mb-6">Zde můžete přidávat, upravovat a mazat aktuality.</p>

        <NovinkaDialog
          mode="create"
          action={createItem}
          trigger={
            <Button size="lg">
              <PlusCircle className="mr-2" /> Přidat aktualitu
            </Button>
          }
        />

        <div className="border-2 rounded-lg mt-6 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Název</TableHead>
                <TableHead>Text</TableHead>
                <TableHead>Vytvořeno</TableHead>
                <TableHead>Publikováno</TableHead>
                <TableHead />
                <TableHead />
              </TableRow>
            </TableHeader>

            <TableBody>
              {novinky.map((n) => (
                <TableRow key={n.id}>
                  <TableCell>{n.nazev}</TableCell>
                  <TableCell>{n.obsah}</TableCell>
                  <TableCell>
                    {n.vytvoreno.toLocaleDateString("cs-CZ")}
                  </TableCell>
                  <TableCell>{n.publikovano ? "Ano" : "Ne"}</TableCell>

                  <TableCell>
                    <NovinkaDialog
                      mode="update"
                      action={updateItem}
                      novinka={n}
                      trigger={
                        <button className="text-blue-500 hover:text-blue-800">
                          <Pen size={20} />
                          
                        </button>
                      }
                    />
                  </TableCell>

                  <TableCell>
                    <DeleteDialog novinka={n} />
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
