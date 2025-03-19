import { z } from "@/configs/zod.config";
import { GroupNoteSchema } from "./groupNote.schema";
import { CreateNoteSchema } from "./CreateNote.schema";

export const CreateFlashNotesSchema = z.object({
    groupNote: GroupNoteSchema,
    notes: z.array(CreateNoteSchema)
})

export type CreateFlashNotesType = z.infer<typeof CreateFlashNotesSchema>;