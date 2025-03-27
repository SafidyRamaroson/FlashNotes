import { ITagsRepository } from "@/core/application/repositories/tags.repo.interface";
import { TagCreateType, TagModel, TagUpdateType } from "@/core/entities/models/tag.model";
import { prisma } from "@/configs/prisma.config";
import { equal } from "assert";

export class TagsRepositoryImpl implements ITagsRepository {
    async createTag(data: TagCreateType, userId: number): Promise<TagModel> {
        try {
            const newTag = await prisma.tag.create({
                data: {
                    name: data.name,
                    userId: userId
                }
            });
            return newTag;
        } catch (error) {
            throw error
        }
    }

    async getTagWithNotesNumber(tagId: number): Promise<(TagModel & { notes: { numbers: number; }; }) | null> {
        try {
            const tagWithNotes = await prisma.tag.findFirst({
                where: {
                    id: tagId
                },
                include: {
                    _count: true
                },
                omit: {
                    userId: true,
                }
            })

            return tagWithNotes ? { ...tagWithNotes, notes: { numbers: tagWithNotes._count.notes } } : null;
        } catch (error) {
            throw error
        }
    }

    async getAllTagsWithNotesNumberForUser(userId: number): Promise<(TagModel & { notes: { numbers: number; }; })[] | null> {
        try {
            const AllTagsWithNotesNumberForUser = await prisma.tag.findMany({
                where: {
                    userId
                },
                include: {
                    _count: true
                },
                omit: {
                    userId: true
                }
            })

            return AllTagsWithNotesNumberForUser.map(tag => ({
                ...tag,
                notes: { numbers: tag._count.notes }
            }));
        } catch (error) {
            throw error
        }
    }

    async deleteOneTag(tagId: number): Promise<TagModel | null> {
        try {
            const deletedTag = await prisma.tag.delete({
                where: {
                    id: tagId
                },
                omit: {
                    userId: true
                }
            })

            return deletedTag
        } catch (error) {
            throw error
        }
    }

    async deleteAllTagsForUser(userId: number): Promise<number> {
        try {
            const deletedTagCounts = await prisma.tag.deleteMany({
                where: { userId }
            });
            return deletedTagCounts.count;
        } catch (error) {
            throw error;
        }
    }
    
    async updateOneTag(tagId: number, data: Partial<TagUpdateType>): Promise<TagModel> {
        try {
            const updatedTag = await prisma.tag.update({
                where: {
                    id: tagId
                },
                data,
                omit: {
                    userId: true
                }
            })

            return updatedTag
        } catch (error) {
            throw error
        }
    }
}