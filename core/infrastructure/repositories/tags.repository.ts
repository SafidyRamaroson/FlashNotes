import { ITagsRepository } from "@/core/application/repositories/tags.repo.interface";
import { TagCreateType, TagModel, TagUpdateType } from "@/core/entities/models/tag.model";
import { prisma } from "@/configs/prisma.config";
import { Note } from "@prisma/client";

export class TagsRepositoryImpl implements ITagsRepository {
    async getTagById(tagId: string): Promise<TagModel | null> {
        const tag = await prisma.tag.findUnique({
            where: {
                id: tagId
            }
        })
        return tag
    }

    async getTagByNameAndUserId(name: string, userId: string): Promise<TagModel | null> {
        const tag = await prisma.tag.findFirst({
            where: {
                name,
                userId
            }
        });
        return tag
    }

    async getTagsWithNotesCountForUser(userId: string): Promise<(TagModel & { notes: { count: number; }; })[] | null> {
        const tagsForUser = await prisma.tag.findMany({
            where: {
                userId
            },
            include: {
                _count: true
            }
        })
        return tagsForUser.map(tag => ({
            ...tag,
            notes: { count: tag._count.notes }
        }));
    }

    async createTagForUser(data: TagCreateType, userId: string): Promise<TagModel> {
        const newTag = await prisma.tag.create({
            data: {
                name: data.name,
                userId: userId
            }
        });
        return newTag;
    }

    async deleteTag(tagId: string): Promise<TagModel | null> {
        const deletedTag = await prisma.tag.delete({
            where: {
                id: tagId
            }
        })

        return deletedTag
    }

    async deleteTagsForUser(userId: string): Promise<void | number> {
        const deletedTagCounts = await prisma.tag.deleteMany({
            where: { userId }
        });
        return deletedTagCounts.count;
    }

    async updateTag(tagId: string, data: Partial<TagUpdateType>): Promise<TagModel> {
        const updatedTag = await prisma.tag.update({
            where: {
                id: tagId
            },
            data
        })

        return updatedTag
    }

    async getTagWithNotes(tagId: string): Promise<any> {
        //TODO: Review
        const tagsWithNotes = await prisma.tag.findMany({
            where: {
                id: tagId
            },
            include: {
                user: {
                    include: {
                        notesGroup: {
                            include: {
                                notes: {
                                    include: {
                                        noteGroup: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
    }
}