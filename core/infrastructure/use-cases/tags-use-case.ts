import { TagCreateType, TagModel, TagUpdateType } from "@/core/entities/models/tag.model";
import { ITagsUseCase } from "@/core/application/use-cases/tags-use-case";
import { Note } from "@prisma/client";
import { ITagsRepository } from "@/core/application/repositories/tags.repo.interface";
import { ConflictError, NotFoundError } from "@/core/entities/errors/common";
import { UnauthorizedError } from "@/core/entities/errors/auth";


export class TagsUseCaseImpl implements ITagsUseCase {
    private _tagsRepository: ITagsRepository;

    constructor(tagsRepository: ITagsRepository){
        this._tagsRepository = tagsRepository
    }

    async createTagForUserUsecase(input: { tag: TagCreateType; }, userId: string):Promise<TagModel> {
        
        const { name: tagName } = input.tag;
        const foundTag = await this._tagsRepository.getTagByNameAndUserId(tagName, userId);
        //TODO: check if user exist
        if(foundTag){
            throw new ConflictError(`Tag ${tagName} existe déja dans la base de donnée pour cet utilisateur`)
        }

        const tag = await this._tagsRepository.createTagForUser({
            name: tagName
        }, userId);

        return tag;
    }

    async getTagsWithNotesCountForUserUseCase(userId: string): Promise<(TagModel & { notes: { count: number; }; })[] | null> {
        const tagsWithNotesCountForUser =  await this._tagsRepository.getTagsWithNotesCountForUser(userId);

        return tagsWithNotesCountForUser
    }

    async deleteTagUseCase(input: { tagId: string; }, userId: string): Promise<TagModel | null> {
        const tagId = input.tagId;
        console.log("tagId-uc", tagId)
        const foundTag = await this._tagsRepository.getTagById(tagId);

        if(!foundTag){
            throw new NotFoundError("Tag n'existe pas dans la base de donnée");
        }

        if(foundTag.userId != userId){
            throw new UnauthorizedError("Vous n'avez pas le droit pas de supprimé ce tag")
        }

        const deletedTag = await this._tagsRepository.deleteTag(tagId);

        return deletedTag
    }

    deleteTagsForUserUseCase(userId: string): Promise<void | number> {
        // TODO: create transaction for this
        throw new Error("Method not implement");
    }

    async updateTagUseCase(input: { tagId: string; tag: Partial<TagUpdateType>; }): Promise<TagModel> {
        const tagId = input.tagId;
        const foundTag = await this._tagsRepository.getTagById(tagId);

        if(!foundTag){
            throw new NotFoundError(`Tag n'existe pas dans la base de donnée.`)
        }

        const updatedTag = await this._tagsRepository.updateTag(tagId, input.tag);

        return updatedTag
    }

    getTagWithNotesUseCase(input: { tagId: string; }, userId: string): Promise<TagModel & { notes: Note[]; }> {
        throw new Error("Method not implemented.");
    }
}