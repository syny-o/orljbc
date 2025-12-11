import type { Novinka as PrismaNovinka } from "@prisma/client";

/**
 * Re-export Prisma type so UI files don't import from Prisma directly.
 */
export type Novinka = PrismaNovinka;

/**
 * Additional UI-level types (optional)
 * e.g., create/update payloads, forms, props, etc.
 */
export interface NovinkaBaseInput {
  title: string;
  content: string;
  published: boolean;
}

export interface EditDialogProps {
  novinka: Novinka;
}

export interface DeleteDialogProps {
  novinka: Novinka;
}
