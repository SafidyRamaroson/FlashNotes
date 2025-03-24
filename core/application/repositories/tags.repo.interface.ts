import { 
    TagCreateType,
    TagModel, 
    TagUpdateType 
} from "@/core/entities/models/tag.model";

export interface ITagsRepository {
    createTag(data: TagCreateType, userId : number): Promise<TagModel>;
    getTagWithNotesNumber(tagId: number): Promise<(TagModel & { notes : { numbers: number}}) | null>;
    getAllTagsWithNotesNumberForUser(userId: number): Promise<(TagModel & { notes : { numbers: number}})[] | null>;
    deleteOneTag(tagId: number): Promise<TagModel | null>;
    deleteAllTagsForUser(userId: number): Promise<TagModel[] | []>;
    updateOneTag(tagId: number ,data: Partial<TagUpdateType>): Promise<TagModel>;
}