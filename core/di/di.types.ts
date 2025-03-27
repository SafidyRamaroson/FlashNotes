import { ITagsRepository } from "../application/repositories/tags.repo.interface";
import { TagsUseCase } from "../application/use-cases/tags-use-case";

export const SYMBOLS = {
    ITagsRepository: Symbol.for('ITagsRepository'),
    TagsUseCase: Symbol.for('TagsUseCase'),
}

export type DI_TYPES = {
    ITagsRepository: ITagsRepository,
    TagsUseCase: TagsUseCase
}