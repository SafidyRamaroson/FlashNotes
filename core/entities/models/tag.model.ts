import { z } from "@/configs/zod.config";

export const TagSchema = z.object({
    id: z
        .number(),
    name: z
        .string()
        .trim()
        .min(3)
        .max(15),
    createdAt: z
        .date(),
    updatedAt: z
        .date()
});


export const TagCreateSchema = TagSchema.pick({ name: true });
export const TagUpdateSchema = TagSchema.pick({ name: true });

export type TagModel = z.infer<typeof TagSchema>;
export type TagCreateType = z.infer<typeof TagCreateSchema>;
export type TagUpdateType  = z.infer<typeof TagUpdateSchema>;

