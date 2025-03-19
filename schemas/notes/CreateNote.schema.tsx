import { z } from "@/configs/zod.config";

export const CreateNoteSchema = z.object({
    term: z
    .string()
    .trim()
    .min(20),
    definition: z
    .string()
    .trim()
    .min(50),
    image: z
    .string()
    .url()
});

export type CreateNoteType = z.infer <typeof CreateNoteSchema>;