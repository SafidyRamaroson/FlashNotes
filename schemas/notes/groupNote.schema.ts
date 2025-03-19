import { z } from "@/configs/zod.config";


export const GroupNoteSchema = z.object({
    name: z
    .string()
    .trim()
    .min(3)
    .max(40)
});

export type GroupNoteType = z.infer<typeof GroupNoteSchema>;