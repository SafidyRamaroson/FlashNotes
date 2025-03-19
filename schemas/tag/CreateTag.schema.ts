import { z } from "@/configs/zod.config";


export const CreateTagSchema = z.object({
    name: z
    .string()
    .trim()
    .min(3)
    .max(15)
})

export type CreateTagType = z.infer<typeof CreateTagSchema >;

