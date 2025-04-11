import { 
    TagCreateType,
    TagModel, 
    TagUpdateType 
} from "@/core/entities/models/tag.model";
import { Note } from "@prisma/client";

export interface ITagsRepository {
    createTagForUser(data: TagCreateType, userId : string): Promise<TagModel>;
    getTagsWithNotesCountForUser(userId: string): Promise<(TagModel & { notes : { count: number}})[] | null>;
    deleteTag(tagId: string): Promise<TagModel | null>;
    deleteTagsForUser(userId: string): Promise<void | number>;
    updateTag(tagId: string ,data: Partial<TagUpdateType>): Promise<TagModel>;
    getTagWithNotes(tagId: string) : Promise<TagModel & {
        notes: Note[]
    }>
    getTagByNameAndUserId(name: string,userId: string): Promise<TagModel | null>;
    getTagById(tagId: string): Promise<TagModel | null>;
}