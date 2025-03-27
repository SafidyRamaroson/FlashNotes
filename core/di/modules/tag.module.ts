import { createModule } from "@evyweb/ioctopus";
import { SYMBOLS } from "../di.types";

import { ITagsRepository } from "@/core/application/repositories/tags.repo.interface";
import { TagsUseCase } from "@/core/application/use-cases/tags-use-case";
import { TagsRepositoryImpl } from "@/core/infrastructure/repositories/tag.repository";

export function createTagsModule(){
    const tagsModule =  createModule();

    tagsModule
        .bind(SYMBOLS.ITagsRepository)
        .toClass(TagsRepositoryImpl);
    
    tagsModule
        .bind(SYMBOLS.TagsUseCase)
        .toClass(TagsUseCase, [
            SYMBOLS.ITagsRepository
        ])

    return tagsModule

}