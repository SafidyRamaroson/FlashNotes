import { TagCreateType, TagUpdateType } from "@/core/entities/models/tag.model";
import { ITagsRepository } from "../repositories/tags.repo.interface";


export class TagsUseCase {
    private _tagsRepository: ITagsRepository;

    constructor(tagsRepository: ITagsRepository){
        this._tagsRepository = tagsRepository
    }

    async createTagUseCase(tagData : TagCreateType, creatorTagUserId: number){
        const tag = await this._tagsRepository.createTag(tagData, creatorTagUserId);
        return tag;
    }


    async getTagWithNotesNumberUseCase(tagId: number){
        const tag = await this._tagsRepository.getTagWithNotesNumber(tagId);
        return tag;
    }

    async getAllTagsWithNotesNumberForUserUseCase(userId: number){
        const tags = await this._tagsRepository.getAllTagsWithNotesNumberForUser(userId);
        return tags;
    }

    async deleteOneTagUseCase(tagId: number){
        const tag = await this._tagsRepository.deleteOneTag(tagId);
        return tag;
    }

    async deleteAllTagsForUserUseCase(userId: number){
        await this._tagsRepository.deleteAllTagsForUser(userId);
    }

    async updateOneTagUseCase(tagId: number, data: Partial<TagUpdateType>){
        const tag = await this._tagsRepository.updateOneTag(tagId, data);
        return tag;
    }
}